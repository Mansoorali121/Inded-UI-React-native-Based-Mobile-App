import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Topline = () => {
  return <View style={styles.container}></View>;
};

export default Topline;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: s(1),
    marginHorizontal: s(5),
    marginTop: s(10),
    opacity: 0.2,
  },
});
