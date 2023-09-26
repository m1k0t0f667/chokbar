import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavBar } from "./components/button/navbar";
import { StyleSheet, View } from "react-native";
import Map from './Map';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <Map />
      <View style={styles.buttonContainer}>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50, 
    alignSelf: 'center'
  }
});
