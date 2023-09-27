import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Color, FontFamily, FontSize } from '../../GlobalStyles';
import theme from '../../theme';

export default function Offre() {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle13} />

      <View style={styles.rectangle10}>
        {/* Ajoutez votre image ici */}
        {/* <Image source={require('path_to_your_image.png')} style={{ width: '100%', height: '100%' }} /> */}
      </View>

      <Text style={styles.exempleDeBar}>
        Exemple de bar
      </Text>
      
      <View style={styles.offre}>
        <View style={styles.frame13}>
          <Text style={styles.exempleDoffre}>
            Exemple d’offre
          </Text>
        </View>
      </View>
      <View style={styles.ratingCircle}>
        <Text style={styles.ratingText}>4.1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 338,
    height: 160,
    backgroundColor: '#FDFDFD',
    borderRadius: 15,
    elevation: 5,  // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle13: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: 15,
    backgroundColor: '#FDFDFD',
  },
  rectangle10: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 108,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#E2E2E2',

  },
  exempleDeBar: {
    position: 'absolute',
    bottom: 16,
    left: 17,
    fontSize: 18,
    fontFamily: FontFamily.promptRegular,    
    color: '#000',
  },
  offre: {
    position: 'absolute',
    top: 25, // Ajusté pour une position plus centrale
    left: 0, // Collé à gauche
    flexDirection: 'row',
    width: '100%', // Pour que le bandeau s'étende sur toute la largeur si nécessaire
  },
  frame13: {
    backgroundColor: '#FF914D',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 15, // Agrandir le padding horizontal pour que le bandeau soit plus gros
    paddingVertical: 4,   // Agrandir le padding vertical pour que le bandeau soit plus gros
    alignItems: 'center',
    justifyContent: 'center',
  },
  exempleDoffre: {
    fontSize: 14, // Ajuster la taille de la police pour qu'elle soit plus grande
    color: '#FFF',
    fontFamily: FontFamily.promptRegular,    
  },

  png: {
    position: 'absolute',
    top: 40,
    right: 15,
    fontSize: 18,
    fontFamily: 'Montserrat',
    color: '#131111',
  },
  ratingCircle: {
    position: 'absolute',
    top: 119,
    right: 15,
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#D0D5D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#000000',
  },
});