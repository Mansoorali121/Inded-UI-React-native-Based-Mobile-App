import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumes</Text>
      <View style={styles.card}>
        <View style={styles.itemcontainer}>
          <View>
            <Image
              source={require('../../assets/pdf.png')}
              style={styles.Image}
            />
          </View>
          <View>
            <Text style={styles.indeedtext}>Indeed Resume </Text>
            <Text
              style={[styles.indeedtext, { opacity: 0.7, marginBottom: s(5) }]}
            >
              Updated 24 Feb 2026
            </Text>
          </View>
          <Image
            source={require('../../assets/small-right.png')}
            style={styles.arrow}
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
  Image: { height: s(50), width: s(50) },
  itemcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: s(20),
    marginHorizontal: s(10),
    gap: s(10),
  },
  card: {
    backgroundColor: '#d8dee0',
    height: s(100),
    borderRadius: s(20),
  },
  indeedtext: { fontSize: s(14) },
  arrow: {
    height: s(16),
    width: s(16),
    position: 'absolute',
    left: s(270),
  },
});
