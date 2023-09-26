import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
<<<<<<< HEAD
import Button from "./components/button/Button";
import Map from "./Map";
=======
import { Buttonleo } from "./components/button/Buttonleo";
import Map from './Map';
>>>>>>> main

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
      <View style={styles.buttonContainer}>
<<<<<<< HEAD
        <Button />
=======
        <Buttonleo/>
>>>>>>> main
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#fff",
  },
  buttonContainer: {
    position: 'absolute',  // Absolument positionné pour apparaître au-dessus de la carte
    bottom: 20,  // Pour le positionner en bas de l'écran
    left: 0,
    right: 0,
    alignItems: 'center',
=======
    backgroundColor: '#fff',
>>>>>>> main
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50, 
    alignSelf: 'center'
  }
});
