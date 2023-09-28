import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import locationPin from './assets/PinLocation.png';
import barsData from './DataBar.json';
import greenMarker from './assets/Green.png';
import yellowMarker from './assets/Yellow.png';
import redMarker from './assets/Red.png';
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import locationPin from "./assets/PinLocation.png";
import barsData from "./DataBar.json";
import greenMarker from "./assets/Green.png";
import yellowMarker from "./assets/Yellow.png";
import redMarker from "./assets/Red.png";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { auth, app, db } from "./firebase";

const Map = forwardRef((props, ref) => {
  const mapRef = useRef(null);
  const markerRefs = useRef({});
  const [bars, setBars] = useState([]);
  const [groupedMarkers, setGroupedMarkers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBar, setSelectedBar] = useState(null);
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState({
    latitude: barsData[0]?.lat || 45.76,
    longitude: barsData[0]?.lgn || 4.8289,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
  useEffect(() => {
    const barsWithRandomValue = barsData.map((bar) => ({
      ...bar,
      randomValue: Math.floor(Math.random() * 6) + 1,
    }));
    setBars(barsWithRandomValue);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const results = bars.filter((bar) =>
        bar.Nom.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
  
      // Animate the map to the user's current location after successfully fetching it
      if (mapRef.current) {
        mapRef.current.animateToRegion({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.01,   // reduced for more zoom
          longitudeDelta: 0.005, // reduced for more zoom
        });
      }
  
    })();
  }, []);
  
  useImperativeHandle(ref, () => ({
    centerOnUserLocation: () => {
      if (location) {
        console.log('Got user location, animating map to region...');
        mapRef.current?.animateToRegion({
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.005,
        });
      } else {
        console.log('No user location available.');
      }
    }
  }));
  

  
  useEffect(() => {
    groupMarkersByProximity();
  }, [region, bars]);


  let lastLocation = null;

  const getLocationAndSendToFirebase = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }
    let currentLocation = await Location.getCurrentPositionAsync({});

    sendToFirebase(currentLocation.coords);

    if (lastLocation && areLocationsEqual(lastLocation, currentLocation.coords))
      lastLocation = currentLocation.coords;
  };

  const areLocationsEqual = (loc1, loc2) => {
    return loc1.latitude === loc2.latitude && loc1.longitude === loc2.longitude;
  };

  setInterval(getLocationAndSendToFirebase, 90000);

  const sendToFirebase = async (coords) => {
    if (!auth.currentUser || !auth.currentUser.uid) {
      console.error(
        "Utilisateur non authentifié, impossible d’envoyer la localisation."
      );
      return;
    }

    const userDocRef = doc(db, "location", auth.currentUser.uid);
    await setDoc(userDocRef, { location: coords }, { merge: true });
  };

  const groupMarkersByProximity = () => {
    const proximity = region.latitudeDelta / 10;

    let groups = [];
    let usedBars = [];

    bars.forEach((bar, index) => {
      if (!usedBars.includes(index)) {
        let group = [bar];

        bars.forEach((innerBar, innerIndex) => {
          if (
            index !== innerIndex &&
            !usedBars.includes(innerIndex) &&
            Math.abs(bar.lat - innerBar.lat) < proximity &&
            Math.abs(bar.lgn - innerBar.lgn) < proximity
          ) {
            group.push(innerBar);
            usedBars.push(innerIndex);
          }
        });

        groups.push(group);
      }
    });

    setGroupedMarkers(groups);
  };

  const getMarkerImage = (value) => {
    if (value <= 2) {
      return greenMarker;
    } else if (value <= 4) {
      return yellowMarker;
    } else {
      return redMarker;
    }
  };

  const handleBarSelectFromSearch = (bar) => {
    setSearchQuery("");
    setSelectedBar(bar);

    if (mapRef && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: bar.lat,
        longitude: bar.lgn,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      });
    }
    
    setTimeout(() => {
      if (markerRefs.current[bar.Nom]) {
        markerRefs.current[bar.Nom].showCallout();
      }
    });
  };

  const renderSearchItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleBarSelectFromSearch(item)}>
      <Text style={styles.searchItem}>{item.Nom}</Text>
    </TouchableOpacity>
  );

  const ZOOM_THRESHOLD = 0.02;

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        {region.latitudeDelta > ZOOM_THRESHOLD 
          ? groupedMarkers.map((group, index) => (
            group.length > 1 ? (

            <Marker
              key={index}
              coordinate={{
                latitude:
                  group.reduce((sum, bar) => sum + bar.lat, 0) / group.length,
                longitude:
                  group.reduce((sum, bar) => sum + bar.lgn, 0) / group.length,
              }}
            >
              <View
                style={{
                  backgroundColor: "gray",
                  borderRadius: 15,
                  padding: 10,
                }}
              >
                <Text style={{ color: "white" }}>{group.length}</Text>
              </View>
            </Marker>
          ) : null
          ))
          : bars.map((bar, index) => (
              <Marker
                  key={index}
                  ref={ref => markerRefs.current[bar.Nom] = ref}
                  coordinate={{ latitude: bar.lat, longitude: bar.lgn }}>
                  <Image source={getMarkerImage(bar.randomValue)} style={styles.markerImage} />
                  <Callout>
                      <View style={styles.calloutContainer}>
                          <Text>Nom : {bar.Nom}</Text>
                          <Text>Valeur aléatoire : {bar.randomValue}</Text>
                      </View>
                  </Callout>
              </Marker>
          ))
        }
  
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Ma position"
            style={{ zIndex: 999 }} // This ensures the marker is on top of others
          >
            <Image source={locationPin} style={[styles.LocationStyle, { zIndex: 999 }]} />

          </Marker>
        )}
      </MapView>
  
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un bar..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery && (
          <FlatList
            data={searchResults}
            renderItem={renderSearchItem}
            keyExtractor={(item, index) => `${item.Nom}-${index}`}
            style={styles.searchResults}
          />
        )}
      </View>
    </View>
  );
  
});

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#fff',

  },
  map: {
    flex: 1,
  },
  markerImage: {
    width: 40,
    height: 55,
  },
  searchContainer: {
    position: "absolute",
    top: 60,
    left: 30,
    right: 30,
    backgroundColor: "transparent",
  },
  searchInput: {
    padding: 15,
    borderRadius: 25,
    backgroundColor: "white",
    elevation: 2,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    fontSize: 16,
  },
  searchResults: {
    marginTop: 5,
    maxHeight: 150,
    borderRadius: 5,
    backgroundColor: "white",
    elevation: 3,
  },
  searchItem: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  calloutContainer: {
    width: 150,
    borderRadius: 0,
    backgroundColor: "white",
    padding: 0,
    borderColor: "black",
    borderWidth: 1,
    margin: 1,
  },
  LocationStyle: {
    width: 40,
    height: 40,
  }
  
});
