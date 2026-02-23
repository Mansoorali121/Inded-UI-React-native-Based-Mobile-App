import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import UpdateStatusbtn from '../components/UpdateStatusbtn';
import Appliedheader from "../components/Appliedheader";
const Appliedjobs = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: s(15) }}>
       <Appliedheader/>
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

  jobtext: { fontSize: s(16), fontFamily: 'Langar-Regular' },
  locationtext: { fontSize: s(16), color: 'gray', marginTop: s(4) },
  btncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: s(15),
  },
  footertext: {
    textAlign: 'center',
    marginTop: s(60),
    color: 'blue',
    fontSize: s(16),
  },
});
