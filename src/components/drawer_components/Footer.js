import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumes</Text>
      <View style={styles.card}>
        <View style={styles.itemcontainer}>
          <Text>Indeed Resume </Text>
          <Image
            source={require('../../assets/small-down.png')}
            style={styles.Image}
          />
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: { marginTop: s(30) },
  title: {
    fontSize: s(20),
    fontFamily: 'Audiowide-Regular',
    marginBottom: s(5),
  },
  Image: { height: s(20), width: s(20) },
  itemcontainer: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#587682',
    height: s(100),
    borderRadius: s(20),
  },
});
