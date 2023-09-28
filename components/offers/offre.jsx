import React from 'react';
import { StyleSheet, View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import { Color, FontFamily, FontSize } from '../../GlobalStyles';

export default function Offre() {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <TouchableOpacity onPress={() => setModalVisible(true)} style={{...styles.root, ...styles.clickable}}>
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
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContent}>
          <Text>Contenu du modal pour OffreBar</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Fermer</Text>
          </TouchableOpacity>
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
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
