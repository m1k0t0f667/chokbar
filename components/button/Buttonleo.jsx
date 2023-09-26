import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import QRCodeWhite from '../../assets/qrcode_white.svg';
import QRCodeBlack from '../../assets/qrcode_black.svg';
import theme from '../../theme';

export function Buttonleo(props) {
  const isActive = props.property1 === 'Active';

  const QRCodeIcon = isActive ? QRCodeBlack : QRCodeWhite;

  return (
    <View style={[styles.root, isActive && styles.rootProperty1Active]}>
      <QRCodeIcon style={styles.qrIcon} />
      <Text style={[styles.scannezEtGagnez, isActive && styles.scannezEtGagnezProperty1Active]}>
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
  qrIcon: {
    marginRight: 10, // 10px padding between SVG and text
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
  },
  scannezEtGagnezProperty1Active: {
    color: '#000',
  },
});
