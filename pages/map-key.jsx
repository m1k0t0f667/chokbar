import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Color, FontFamily, FontSize } from '../GlobalStyles';
import MaskGroup from '../assets/legende/mask-group';
import MaskGroup1 from '../assets/legende/mask-group1';
import MaskGroup2 from '../assets/legende/mask-group2';

const LegendeDesc = () => {
  return (
    <View style={styles.legendeDesc}>
      <View style={styles.maskGroupParent}>
        <MaskGroup />
        <View style={[styles.laSalleEstPleineCraquerParent, styles.parentLayout]}>
          <Text style={[styles.laSalleEst, styles.laSalleEstTypo]}>
            La salle est pleine à craquer, sors tes meilleurs pas de danse !
          </Text>
          <Text style={[styles.forteAffluence, styles.affluenceTypo]}>
            Forte affluence
          </Text>
        </View>
      </View>
      <View style={[styles.maskGroupGroup, styles.maskGroupLayout]}>
        <MaskGroup1 />
        <View style={[styles.ilCommenceYAvoirDuMondeParent, styles.commenceLayout]}>
          <Text style={[styles.ilCommence, styles.commenceLayout]}>
            Il commence à y avoir du monde, prends vite les dernières places !
          </Text>
          <Text style={[styles.moyenneAffluence, styles.commenceLayout]}>
            Moyenne affluence
          </Text>
        </View>
      </View>
      <View style={[styles.maskGroupContainer, styles.maskGroupLayout]}>
        <MaskGroup2 />
        <View style={[styles.ilCommenceYAvoirDuMondeParent, styles.commenceLayout]}>
          <Text style={[styles.ilCommence, styles.commenceLayout]}>
            Le bar est calme, parfait pour une partie de jeux de société !
          </Text>
          <Text style={[styles.faibleAffluence, styles.affluenceTypo]}>
            Faible affluence
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 84,
    left: 155,
  },
  laSalleEstTypo: {
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.promptRegular,
    lineHeight: 18,
    letterSpacing: -0.3,
    fontSize: FontSize.size_base,
    left: 0,
    top: 30,
  },
  affluenceTypo: {
    fontFamily: FontFamily.promptMedium,
    fontWeight: '500',
    lineHeight: 19,
    letterSpacing: -0.4,
    fontSize: FontSize.size_lgi,
    top: 0,
    textAlign: 'left',
    color: Color.colorBlack,
    left: 0,
  },
  maskGroupLayout: {
    height: 140,
    width: 330,
    left: 30,
    position: 'absolute',
  },
  commenceLayout: {
    width: 175,
    position: 'absolute',
  },
  forteAffluence: {
    width: 154,
    position: 'absolute',
    fontWeight: '500',
    lineHeight: 19,
    letterSpacing: -0.4,
    fontSize: FontSize.size_lgi,
  },
  laSalleEstPleineCraquerParent: {
    top: 33,
    width: 185,
    position: 'absolute',
  },
  maskGroupParent: {
    top: 370,
    width: 340,
    height: 150,
    left: 30,
    position: 'absolute',
  },
  ilCommence: {
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.promptRegular,
    lineHeight: 18,
    letterSpacing: -0.3,
    fontSize: FontSize.size_base,
    left: 0,
    top: 30,
  },
  moyenneAffluence: {
    fontFamily: FontFamily.promptMedium,
    fontWeight: '500',
    lineHeight: 19,
    letterSpacing: -0.4,
    fontSize: FontSize.size_lgi,
    top: 0,
    textAlign: 'left',
    color: Color.colorBlack,
    left: 0,
  },
  ilCommenceYAvoirDuMondeParent: {
    top: 28,
    height: 84,
    left: 155,
  },
  maskGroupGroup: {
    top: 185,
  },
  legendeDesc: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 520,
  },
});
//     <View>
//       <MaskGroup />

//       <MaskGroup1 />

//       <MaskGroup2 />
//     </View>
// )}
export default LegendeDesc;
