import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/button/Button";
import { Buttonleo } from "./components/button/Buttonleo";
import Legende from "./components/button/legende";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button />
      <Buttonleo property1="Active" />
      <Legende property1="Active" />
      <Legende property1="Unactive" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
