import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Modal, Text, Pressable, Image } from 'react-native';
import Croix from "../../assets/Croix1.png"; // Assurez-vous que le chemin d'importation est correct
import OffreBar from "../button/infobar"

export default function Offre() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity onPress={() => setModalVisible(true)} style={{ ...styles.root, ...styles.clickable }}>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { height: '95%' }]}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: 15 }}>
              <Text style={styles.modalText}>offre</Text>
              <Pressable style={{ width: 35 }} onPress={() => setModalVisible(!modalVisible)}>
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
    </TouchableOpacity>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: "Bungee-Shade",
    fontSize: 30
  },
});
