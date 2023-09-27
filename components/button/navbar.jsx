import React, { useState } from 'react'; // import useState
import {StyleSheet, View, TouchableOpacity,Modal,Text,Pressable,Image} from 'react-native'; // import TouchableOpacity
import Legende from '../button/legende';
import MenuB from '../button/menu';
import Hot from '../button/hot';
import { Buttonleo } from '../button/Buttonleo';
import Croix from "../../assets/Croix1.png"
import Menu from '../../pages/menu';
export function NavBar() {
  const [activeButton, setActiveButton] = useState(''); // initialize with an empty string
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible1, setModalVisible1] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);
  const [modalVisible3, setModalVisible3] = React.useState(false);
  return (
    <View style={styles.root}>
      <View style={styles.frame17}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{width:"100%",height:"100%",backgroundColor:"rgba(52, 52, 52, 0.8)",opacity:50}} onPress={() => setModalVisible(false)}>
        <View style={styles.centerModal}>
          <View style={[styles.modalView,{height:"45%"}]}>
            <View style={{display:"inline-flex",flexDirection:"row", justifyContent:"flex-end",alignItems: "flex-start",width:"100%",gap:125}}>
                <Text style={styles.modalText}>Légende</Text>
                <Pressable style={{width:35}} onPress={() => setModalVisible(!modalVisible)}><Image source={Croix} style={{width: 20,height: 20}}></Image></Pressable>
                </View>
            <View><Text>Ton contenue</Text></View>
          </View>
        </View>
        </View>
      </Modal>
        <TouchableOpacity onPress={() => {setActiveButton('Legende'),setModalVisible(true)}}>
          <Legende property1={activeButton === 'Legende' ? "Active" : "Unactive"}/>
        </TouchableOpacity>
      </View>
      <View style={styles.frame14}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible1);
        }}>
        <View style={{width:"100%",height:"100%",backgroundColor:"rgba(52, 52, 52, 0.8)",opacity:50}} onPress={() => setModalVisible(false)}>
        <View style={styles.centerModal}>
          <View style={[styles.modalView,{height:"45%"}]}>
            <View style={{display:"inline-flex",flexDirection:"row", justifyContent:"flex-end",alignItems: "flex-start",width:"100%",gap:125}}>
                <Text style={styles.modalText}>Légende</Text>
                <Pressable style={{width:35}} onPress={() => setModalVisible1(false)}><Image source={Croix} style={{width: 20,height: 20}}></Image></Pressable>
                </View>
            <View><Menu/></View>
          </View>
        </View>
        </View>
      </Modal>
        <TouchableOpacity onPress={() => {setActiveButton('Menu'),setModalVisible1(true)}}>
          <MenuB property1={activeButton === 'Menu' ? "Active" : "Unactive"}/>
        </TouchableOpacity>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible2(!modalVisible2);
        }}>
        <View style={{width:"100%",height:"100%",backgroundColor:"rgba(52, 52, 52, 0.8)",opacity:50}} onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.centerModal}>
          <View style={[styles.modalView,{height:"45%"}]}>
            <View style={{display:"inline-flex",flexDirection:"row", justifyContent:"flex-end",alignItems: "flex-start",width:"100%",gap:125}}>
                <Text style={styles.modalText}>Légende</Text>
                <Pressable style={{width:35}} onPress={() => setModalVisible2(!modalVisible2)}><Image source={Croix} style={{width: 20,height: 20}}></Image></Pressable>
                </View>
            <View><Text>Ton contenue</Text></View>
          </View>
        </View>
        </View>
      </Modal>
        <TouchableOpacity onPress={() => {setActiveButton('Hot'),setModalVisible2(true)}}>
          <Hot property1={activeButton === 'Hot' ? "Active" : "Unactive"}/>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible3(!modalVisible3);
        }}>
        <View style={{width:"100%",height:"100%",backgroundColor:"rgba(52, 52, 52, 0.8)",opacity:50}} onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.centerModal}>
          <View style={[styles.modalView,{height:"45%"}]}>
            <View style={{display:"inline-flex",flexDirection:"row", justifyContent:"flex-end",alignItems: "flex-start",width:"100%",gap:125}}>
                <Text style={styles.modalText}>Légende</Text>
                <Pressable style={{width:35}} onPress={() => setModalVisible3(!modalVisible3)}><Image source={Croix} style={{width: 20,height: 20}}></Image></Pressable>
                </View>
            <View><Text>Ton contenue</Text></View>
          </View>
        </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => {setActiveButton('Buttonleo'),setModalVisible3(true)}}>
        <Buttonleo property1={activeButton === 'Buttonleo' ? "Active" : "Unactive"}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 390,
    paddingBottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: 'transparent',
  },
  frame17: {
    width: 320,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  frame14: {
    width: 320,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  centerModal:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width:"100%",
    margin: 20,
    marginBottom:0,
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
    textAlign: 'center',}
});
