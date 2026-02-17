import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Indedlogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/indeed_logo.png')}
        style={styles.logoimage}
      />
    </View>
  );
};

export default Indedlogo;

const styles = StyleSheet.create({
  container: { alignItems: 'center', top: s(40) },
  logoimage: { height: s(40), width: vs(100) },
});
