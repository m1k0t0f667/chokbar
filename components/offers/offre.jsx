import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Modal, Text, Pressable, Image, ScrollView } from 'react-native';
import { Color, FontFamily, FontSize } from '../../GlobalStyles';
import Croix from "../../assets/Croix1.png";
import OffreBar from "../button/infobar"
import * as Font from 'expo-font'

async function loadFonts() {
  await Font.loadAsync({
    'Prompt': require('../../GlobalStyles'),  
  });
}

loadFonts();

export default function Offre() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBar, setSelectedBar] = useState(null);

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

  const handleBarClick = (bar) => {
    setSelectedBar(bar);
    setModalVisible(true);
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      {bars.map((bar, index) => (
        <TouchableOpacity key={index} onPress={() => handleBarClick(bar)} style={{ ...styles.root, ...styles.clickable }}>
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
        </TouchableOpacity>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { height: '95%' }]}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: 15 }}>
              <Text style={styles.modalText}>Offre de {selectedBar?.name}</Text>
              <Pressable style={{ width: 35 }} onPress={() => setModalVisible(false)}>
                <Image source={Croix} style={{ width: 20, height: 20 }} />
              </Pressable>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 150 }}>
              <Text>
                <OffreBar />
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
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
    marginBottom: 15,
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
    fontFamily: FontFamily.promptRegular,    
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

  container: {
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',  
  },
  modalView: {
    width: '100%',  
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});