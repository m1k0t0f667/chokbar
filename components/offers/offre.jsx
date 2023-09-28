import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Color, FontFamily, FontSize } from '../../GlobalStyles';



export default function Offre() {
  const bars = [
    { name: 'Exemple de bar', offer: 'Exemple d’offre', rating: 4.1, image: require('../../assets/bar1.jpg') }, 
    { name: 'test1', offer: 'Offre 1', rating: 4.2, image: require('../../assets/bar2.jpg') },
    { name: 'test2', offer: 'Offre 2', rating: 4.3, image: require('../../assets/bar3.jpg') },
    { name: 'test3', offer: 'Offre 3', rating: 4.4, image: require('../../assets/bar4.jpg') },
    { name: 'test4', offer: 'Offre 4', rating: 4.5, image: require('../../assets/bar1.jpg') },
    { name: 'test5', offer: 'Offre 5', rating: 4.6, image: null },
    { name: 'test6', offer: 'Offre 6', rating: 4.7, image: null },
    { name: 'test7', offer: 'Offre 7', rating: 4.8, image: null },
  ];

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        {bars.map((bar, index) => (
          <View key={index} style={styles.root}>
            <View style={styles.rectangle13} />
            <View style={styles.rectangle10}>
              {bar.image && <Image source={bar.image} style={{ width: '100%', height: '100%' }} />}
            </View>

            <Text style={styles.exempleDeBar}>
              {bar.name}
            </Text>

            <View style={styles.offre}>
              <View style={styles.frame13}>
                <Text style={styles.exempleDoffre}>
                  {bar.offer}
                </Text>
              </View>
            </View>
            <View style={styles.ratingCircle}>
              <Text style={styles.ratingText}>{bar.rating}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}









const styles = StyleSheet.create({
  root: {
    width: 338,
    height: 160,
    backgroundColor: '#FDFDFD',
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clickable: {
    padding: 10,
  },
  rectangle10: {
    position: 'absolute',
    top: 0,
    width: '107%',
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
    color: '#000',
  },
  offre: {
    position: 'absolute',
    top: 25,
    left: 0,
    flexDirection: 'row',
    width: '100%',
  },
  frame13: {
    backgroundColor: '#FF914D',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exempleDoffre: {
    fontSize: 12,
    color: '#FFF',
  },
  ratingCircle: {
    position: 'absolute',
    top: 119,
    right: 15,
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#D0D5D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    margin: 20,
    marginBottom: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  
});