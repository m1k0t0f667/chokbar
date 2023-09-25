import { Image, StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import QRCode from "../../assets/QRCode.svg"

const ButtonCustom = () => {
  return (
    <View style={styles.container}>
        <QRCode height={20} width={20}/>
        <Text style={styles.texte}>Buttohjdhzdn</Text>
    
    </View>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"black",
        width:"30",
        height:55,
        alignItems:"center",
        
       
        
    },
    texte:{
        color:"white"
    }
})    