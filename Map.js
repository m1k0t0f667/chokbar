import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

import barsData from './DataBar.json';
import greenMarker from './assets/Green.png';
import yellowMarker from './assets/Yellow.png';
import redMarker from './assets/Red.png';

export default function Map() {
  const mapRef = useRef(null);
  const [bars, setBars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBar, setSelectedBar] = useState(null);
  const [region, setRegion] = useState({
    latitude: (barsData[0]?.lat) || 45.76,
    longitude: (barsData[0]?.lgn) || 4.8289,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    try {
      const barsWithRandomValue = barsData.map(bar => ({
        ...bar,
        randomValue: Math.floor(Math.random() * 6) + 1
      }));
      setBars(barsWithRandomValue);
    } catch (error) {
      console.error('Erreur lors du chargement des données JSON:', error);
    }
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const results = bars.filter(bar => bar.Nom.toLowerCase().includes(searchQuery.toLowerCase()));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

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
    setSearchQuery('');
    setSelectedBar(bar);
    mapRef.current.animateToRegion({
      latitude: bar.lat,
      longitude: bar.lgn,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421,
    });
    setTimeout(() => {
      bar.marker.showCallout();
    }, 500); 
  };

  const renderSearchItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleBarSelectFromSearch(item)}>
      <Text style={styles.searchItem}>{item.Nom}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        {bars.map((bar, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: bar.lat, longitude: bar.lgn }}
            ref={ref => { bar.marker = ref; }}
          >
            <Image source={getMarkerImage(bar.randomValue)} style={styles.markerImage} />
            <Callout>
              <View style={styles.calloutContainer}>
                <Text>Nom : {bar.Nom}</Text>
                <Text>Valeur aléatoire : {bar.randomValue}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
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
            keyExtractor={(item) => item.Nom}
            style={styles.searchResults}
          />
        )}
      </View>
    </View>
  );r
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  markerImage: {
    width: 40,
    height: 50,
  },
  searchContainer: {
    position: 'absolute',
    top: 60,
    left: 30,
    right: 30,
    backgroundColor: 'transparent',
  },
  searchInput: {
    padding: 15,
    borderRadius: 25,
    backgroundColor: 'white',
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
    backgroundColor: 'white',
    elevation: 3,
  },
  searchItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  calloutContainer: {
    width: 150,
    borderRadius: 0,
    backgroundColor: 'white', 
    padding: 0, 
    borderColor: 'black',
    borderWidth: 1,
    margin: 1
  }
});
