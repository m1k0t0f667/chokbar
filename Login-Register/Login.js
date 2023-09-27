import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');         //TOUCHE PAS ICI

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);   // ICI NON PLUS
      Alert.alert("Succès", "Connexion réussie!");
    } catch (error) {
      Alert.alert("Mauvais indentifiants", error.message);     // TOUJOURS PAS ICI
    }
  };

  return (
    <View style={styles.container}>         
      <TextInput                       //PARTIE HTML BB
        style={styles.input}           // YOU AND ONLY YOU CAN TOUCH HERE
        placeholder="Email"             // EMAIL PARTIE
        value={email}                   // REND MOI CA JOLIE
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"  //MDP PARTIE
        value={password}            // A TOI DE JOUER BG
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Se connecter" onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  input: {                  // PARTIE CSS   
    height: 40,             // OUBLIE PAS DENLEVER LES COM QUAND TA FINIS
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8
  }
});

export default Login;
