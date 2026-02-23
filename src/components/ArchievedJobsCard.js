import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Appliedheader from './Appliedheader';
import { s, vs } from 'react-native-size-matters';

const ArchievedJobsCard = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: s(15) }}>
        <Appliedheader />
        <Text style={styles.jobtext}>Mern Developer</Text>
        <Text style={styles.jobtext}>(Internship)</Text>
        <Text style={styles.locationtext}>Avrio Global Inc</Text>
        <Text style={styles.locationtext}>Karachi</Text>
        <Text style={[styles.locationtext, { opacity: 0.5 }]}>
          Applied on Indeed on Thu
        </Text>
      </View>
    </View>
  );
};

export default ArchievedJobsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    height: vs(230),
    width: vs(290),
    borderRadius: vs(12),
      },
  jobtext: { fontSize: s(16), fontFamily: 'Langar-Regular' },
  locationtext: {
    fontSize: s(16),
    color: 'gray',
    marginTop: s(4),
    marginBottom: s(15),
  },
});
