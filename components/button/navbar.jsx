import React, { useState } from 'react'; // import useState
import {StyleSheet, View, TouchableOpacity} from 'react-native'; // import TouchableOpacity
import Legende from '../button/legende';
import Menu from '../button/menu';
import Hot from '../button/hot';
import { Buttonleo } from '../button/Buttonleo';

export function NavBar() {
  const [activeButton, setActiveButton] = useState(''); // initialize with an empty string

  return (
    <View style={styles.root}>
      <View style={styles.frame17}>
        <TouchableOpacity onPress={() => setActiveButton('Legende')}>
          <Legende property1={activeButton === 'Legende' ? "Active" : "Unactive"}/>
        </TouchableOpacity>
      </View>
      <View style={styles.frame14}>
        <TouchableOpacity onPress={() => setActiveButton('Menu')}>
          <Menu property1={activeButton === 'Menu' ? "Active" : "Unactive"}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveButton('Hot')}>
          <Hot property1={activeButton === 'Hot' ? "Active" : "Unactive"}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setActiveButton('Buttonleo')}>
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
});
