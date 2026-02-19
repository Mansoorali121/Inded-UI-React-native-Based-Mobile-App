import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Hometabheader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/indeed_logo.png')}
        style={styles.logoimage}
      />
      <Image
        source={require('../assets/notification.png')}
        style={styles.logoimage2}
      />
    </View>
  );
};

export default Hometabheader;

const styles = StyleSheet.create({
  container: {
    top: s(20),
    marginHorizontal: s(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoimage: { height: s(30), width: vs(80), marginBottom: s(10) },
  logoimage2: { height: s(25), width: vs(25), marginLeft: s(10), top: s(10) },
});
