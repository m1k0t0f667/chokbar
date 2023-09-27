import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
                                     //PAAAAAS TOUCHE
  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert("Succès", "Inscription réussie!");
    } catch (error) {
        Alert.alert("Erreur", error.message);
}};

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"                 //PARTIE EMAIL
        value={email}                       //PARTIE HTML TU OPERE
        onChangeText={setEmail}             //TA MAGIE ICI                                             
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"      //PARTIE MOT DE PASSE
        value={password}                //ICI AUSSI TU FAS DE LA MAGIE
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="S'inscrire" onPress={register} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16                 //PARTIE CSS
  },                            // AUTANT DE TE DIRE QUE C BASIQUE ICI  
  input: {                      // A TOI DE JOUER
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8
  }
});

export default Register;
