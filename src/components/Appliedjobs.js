import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import UpdateStatusbtn from '../components/UpdateStatusbtn';
const Appliedjobs = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: s(15) }}>
        <View style={styles.cardheader}>
          <Text style={styles.appliedtext}>Applied</Text>
          <Image source={require('../assets/dots.png')} style={styles.image} />
        </View>
        <Text style={styles.jobtext}>Mern Developer</Text>
        <Text style={styles.jobtext}>(Internship)</Text>
        <Text style={styles.locationtext}>Avrio Global Inc</Text>
        <Text style={styles.locationtext}>Karachi</Text>
        <Text style={[styles.locationtext, { opacity: 0.5 }]}>
          Applied on Indeed on Thu
        </Text>
        <View style={styles.btncontainer}>
          <UpdateStatusbtn />
        </View>
      </View>
      <Text style={styles.footertext}>Not seeing an application?</Text>
    </View>
  );
};

export default Appliedjobs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    height: vs(250),
    width: vs(270),
    borderRadius: vs(12),
  },
  cardheader: {
    marginTop: s(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: { height: vs(20), width: s(20) },
  appliedtext: {
    fontWeight: 'bold',
    color: 'blue',
    backgroundColor: '#f3f4f6',
    padding: s(3),
    borderRadius: s(10),
    marginBottom: s(10),
  },
  jobtext: { fontSize: s(16), fontFamily: 'Langar-Regular' },
  locationtext: { fontSize: s(16), color: 'gray', marginTop: s(4) },
  btncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: s(15),
  },
  footertext:{textAlign:"center",marginTop:s(60),color:"blue",fontSize:s(16)},
});
