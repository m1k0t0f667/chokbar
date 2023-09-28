import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, Image } from 'react-native';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import emailIcon from '../assets/emailIcon.png';
import lockIcon from '../assets/lock.png';
import eyeOffIcon from '../assets/eye-off.png';
import eyeIcon from '../assets/eye.png';



function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Succès", "Inscription réussie!");
    } catch (error) {
      Alert.alert("Erreur", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={[styles.input, styles.genericInput]}
          placeholder="Votre prénom"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={[styles.input, styles.genericInput]}
          placeholder="Votre nom"
          value={lastName}
          onChangeText={setLastName}
        />
        <View style={styles.inputIconContainer}>
          <Image source={emailIcon} style={styles.icon} />
          <TextInput
            style={styles.inputEmail}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputIconContainer}>
          <Image source={lockIcon} style={styles.icon} />
          <TextInput
            style={styles.inputPassword}
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Image source={hidePassword ? eyeOffIcon : eyeIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.termsText}>
          En vous inscrivant, vous acceptez <Text style={styles.termsHighlight}>nos conditions générales et notre politique de confidentialité*.</Text>
        </Text>
        <TouchableOpacity style={styles.registerButton} onPress={register}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.alreadyRegisteredText}>Déjà inscrit ?</Text>
        <Text style={styles.loginText}>Connexion</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  content: {
    alignItems: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 126,
    bottom: 10
  },
  alreadyRegisteredText: {
    color: '#747980',
    fontSize: 12
  },
  loginText: {
    color: '#FF914D',
    fontSize: 12,
    marginLeft: 5 
  },
  inputIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#A2A2A6',
    borderWidth: 1,
    borderRadius: 4,
    height: 43,
    width: 342,
    paddingLeft: 10,
    marginBottom: 16
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8
  },
  inputEmail: {
    flex: 1,
    height: 43,
    borderColor: 'transparent'
  },
  inputPassword: {
    flex: 1,
    height: 43,
    borderColor: 'transparent'
  },
  genericInput: {
    borderColor: '#A2A2A6',
    borderWidth: 1,
    borderRadius: 4,
    height: 43,
    width: 342,
    paddingLeft: 10,
    marginBottom: 16
  },
  termsText: {
    color: '#A2A2A6',
    fontSize: 12,
    width: 342,
    textAlign: 'center',
    marginBottom: 16
  },
  termsHighlight: {
    color: '#747980',
    fontWeight: 'bold'
  },
  registerButton: {
    backgroundColor: '#FF914D',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 342,
    marginBottom: 16
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14
  }
});

export default Register;
