import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QRCode from "../../assets/QRCode.svg"

const Button = () => {
  return (
    <View style={styles.container}>
        <QRCode height={50} width={50}/>
        <Text style={styles.texte}>Buttohjdhzdn</Text>
    
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"black",
        padding:"10px",
        alignItems:"center",
        
       
        
    },
    texte:{
        color:"white"
    }
})    