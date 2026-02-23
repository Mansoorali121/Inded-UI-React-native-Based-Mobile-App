import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import Topline from './Topline';

const Archievedparagraph = () => {
  return (
    <View>

 
      <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <Image
            source={require('../assets/info.png')}
            style={styles.infoimage}
          />
          <Text style={styles.title}>This Job has expire on Indeed</Text>
        </View>
        <Text style={styles.paragraph}>
          Reasons could include:the employer is not accpeting applications, is
          not actively hiring, or is reviewing applications
        </Text>
      </View>
      <View style={styles.middlecontainer}>
        <Text style={[styles.title, { fontSize: s(17), marginBottom: s(5) }]}>
          Mobile Application Developer{' '}
        </Text>
        <Text style={[styles.title, { fontSize: s(17), marginBottom: s(12) }]}>
          (Fresh)
        </Text>
        <View style={styles.titlescontainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.linktext}>Dubbizle Labs </Text>
            <Image
              source={require('../assets/open-in-new-window.png')}
              style={[styles.infoimage, { marginStart: s(5) }]}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.digittext}>. 4.0 </Text>
            <Image
              source={require('../assets/star.png')}
              style={[styles.infoimage, { marginStart: s(5) }]}
            />
          </View>
        </View>
      </View>
      <Topline />
         </View>
  );
};

export default Archievedparagraph;

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: s(40) },
  infoimage: { height: s(24), width: s(24) },
  titlecontainer: { flexDirection: 'row', alignItems: 'center', gap: s(15) },
  title: { fontSize: s(14), fontFamily: 'Audiowide-Regular' },
  paragraph: {
    marginHorizontal: s(50),
    textAlign: 'center',
    marginTop: s(10),
    fontSize: s(14),
  },
  middlecontainer: { marginHorizontal: s(20), marginTop: s(20) },
  linktext: { textDecorationLine: 'underline' },
  titlescontainer: { flexDirection: 'row', gap: s(10) },
  digittext: {},
});
