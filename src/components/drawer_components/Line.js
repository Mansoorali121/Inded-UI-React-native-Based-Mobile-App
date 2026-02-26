import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Line = () => {
  return <View style={styles.container}></View>;
};

export default Line;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: s(1),
    marginTop: s(10),
    opacity: 0.2,
  },
});
