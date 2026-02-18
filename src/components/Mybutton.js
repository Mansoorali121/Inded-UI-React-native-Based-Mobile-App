import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs, ms } from 'react-native-size-matters';

const Mybutton = ({ title, color, textcolor , onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: color }]}>
      <Text style={[styles.btntext, { color: textcolor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Mybutton;

const styles = StyleSheet.create({
  container: {
    height: vs(60),

    width: s(270),
    borderRadius: ms(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#2e91cf',
    borderWidth: 1,
  },
  btntext: { fontSize: ms(18), fontFamily: 'NovaFlat-Regular' },
});
