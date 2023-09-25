import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Button from "./components/button/Button";
import Map from "./Map";

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
      <View style={styles.buttonContainer}>
        <Button />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    position: 'absolute',  // Absolument positionné pour apparaître au-dessus de la carte
    bottom: 20,  // Pour le positionner en bas de l'écran
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
