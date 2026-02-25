import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Settingheader = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Text  style={styles.title}>Profile</Text>
      <TouchableOpacity onPress={onPress}>
        <Image source={require('../../assets/menu.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default Settingheader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: s(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { height: s(24), width: s(24), left: s(120) },
  title:{fontSize:s(16),fontWeight:"600"},
});
