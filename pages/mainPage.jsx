import React from 'react';
import { StyleSheet, View } from "react-native";
import { NavBar } from "../components/button/navbar";
import Map from '../Map';

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Map />
      <View style={styles.navBarContainer}>
        <NavBar />
      </View>
      <View style={styles.buttonContainer}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    zIndex: 0,
  },
  navBarContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50, 
    alignSelf: 'center',
    zIndex: 2,
  }
});

export default MainPage;