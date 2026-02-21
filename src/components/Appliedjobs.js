import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Appliedjobs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardheader}>
        <Text style={styles.appliedtext}>Applied</Text>
        <Image source={require('../assets/dots.png')} style={styles.image} />
      </View>
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
    marginHorizontal: s(10),
    justifyContent: 'space-between',
  },
  image: { height: vs(20), width: s(20) },
  appliedtext: {
    fontWeight: 'bold',
    color: 'blue',
    backgroundColor: '#f3f4f6',
    padding: s(3),
    borderRadius: s(10),
  },
});
