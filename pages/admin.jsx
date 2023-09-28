
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


const Admin = ({navigation}) => {
    const [text, setText] = useState('Not yet scanned')
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const askForCameraPermission = () => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })()
    }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }
  return (
    <View style={styles.container}>
        <Text style={styles.maintext}>{text}</Text>
        <View   View style={styles.barcodebox}>
            <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 200, width: 200 }} />
        </View>
        
        {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' style={{backgroundColor:"black"}} />}
    </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: "flex-end",
  marginBottom:50
},
maintext: {
  fontSize: 16,
  margin: 20,
},
barcodebox: {
  alignItems: '',
  justifyContent: "flex-end",
  overflow: 'hidden',
  borderRadius: 30,
}
});
export default Admin
