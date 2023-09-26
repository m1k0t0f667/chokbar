import React from 'react'; // You should import React when working with JSX.
import { StyleSheet, View, Text } from 'react-native';
import Vector from '../../assets/qrcode_white.svg';
import theme from '../../theme';

export function Buttonleo(props) {
  const classes = {
    root: [
      styles.root,
      props.property1 === 'Active' && styles.rootProperty1Active,
    ],
    scannezEtGagnez: [
      styles.scannezEtGagnez,
      props.property1 === 'Active' && styles.scannezEtGagnezProperty1Active,
    ],
  };

  return (
    <View style={classes.root}>
      <Vector />
      <Text style={classes.scannezEtGagnez}>
        Scannez et gagnez
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: '#000',
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    flexDirection: 'row',
    paddingVertical: 0,
    paddingHorizontal: 30,
    borderRadius: 60,
  },
  rootProperty1Active: {
    backgroundColor: theme.colors.principalOrange,
  },
  scannezEtGagnez: {
    color: '#FFF',
    fontFamily: 'Prompt',
    fontSize: 27.6,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 27.6,
    letterSpacing: -0.552,
  },
  scannezEtGagnezProperty1Active: {
    color: '#000',
  },
});
