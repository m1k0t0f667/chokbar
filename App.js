import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Buttonleo } from "./components/button/Buttonleo";
import Map from './Map';

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
      <View style={styles.buttonContainer}>
        <Buttonleo/>
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
