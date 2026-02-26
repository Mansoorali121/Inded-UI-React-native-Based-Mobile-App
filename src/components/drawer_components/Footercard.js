import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Footercard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.itemcontainer}>
          <View>
            <Image
              source={require('../../assets/file.png')}
              style={styles.Image}
            />
          </View>
          <View>
            <Text style={styles.indeedtext}>Mansoor_mobile_app.pdf </Text>
            <Text
              style={[styles.indeedtext, { opacity: 0.6, marginBottom: s(5) }]}
            >
              Added 23 Feb 2026
            </Text>
          </View>
          <Image
            source={require('../../assets/dots.png')}
            style={styles.arrow}
          />
        </View>
      </View>
    </View>
  );
};

export default Footercard;

const styles = StyleSheet.create({
  container: { marginTop: s(5) },
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
    backgroundColor: '#f7fdff',
    height: s(90),
    borderRadius: s(20),
  },
  indeedtext: { fontSize: s(14), fontWeight: '500' },
  arrow: {
    height: s(16),
    width: s(16),
    position: 'absolute',
    left: s(270),
  },
});
