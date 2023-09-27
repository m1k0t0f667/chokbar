import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export function OffreBar() {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle13}>
        <View style={styles.rectangle10}></View>
        <View style={styles.header}>
          <Text style={styles.exempleDeBar}>Exemple de bar</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingCircle}>
              <Text style={styles.ratingText}>4.1</Text>
            </View>
          </View>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.adresse}>Adresse</Text>
          <Text style={styles.numero}>Numéro</Text>
        </View>
        <View style={styles.rectangle14}>
          <Text style={styles.offre}>Offre</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  rectangle13: {
    width: 338,
    height: 393,
    backgroundColor: '#FDFDFD',
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    borderRadius: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 15,
  },
  rectangle10: {
    width: 338,
    height: 265.275,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Cette ligne permet d'aligner verticalement le cercle avec "Exemple de bar"
    width: '100%',
    marginTop: 260,
  },
  ratingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    fontFamily: 'Prompt',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    position: 'absolute',
  },
  ratingCircle: {
    width: 30,
    height: 30,
    borderRadius: 18,
    backgroundColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exempleDeBar: {
    color: '#000',
    fontFamily: 'Prompt',
    fontSize: 18,
    fontWeight: 'normal',
  },
  addressContainer: {
    flexDirection: 'column',
    marginLeft: 10,  // Ce décalage permet de décaler "Adresse" et "Numéro" vers la droite
    marginTop: 1,
  },
  adresse: {
    color: '#000',
    fontFamily: 'Prompt',
    fontSize: 12,
    fontWeight: 'normal',
  },
  numero: {
    color: '#000',
    fontFamily: 'Prompt',
    fontSize: 12,
    fontWeight: 'normal',
    marginTop: 5,
  },
  rectangle14: {
    alignSelf: 'center',
    width: 318,
    height: 26,
    backgroundColor: '#000',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 19,
  },
  offre: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Prompt',
    fontSize: 12,
    fontWeight: 'normal',
  },
});

export default OffreBar;
