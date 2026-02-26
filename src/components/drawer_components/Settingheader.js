import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Settingheader = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <TouchableOpacity onPress={onPress} style={styles.menuButton}>
        <Image 
          source={require('../../assets/menu.png')} 
          style={styles.image} 
        />
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
    justifyContent: 'space-between', // ✅ correct way
  },

  image: {
    height: s(24),
    width: s(24),
  },

  menuButton: {
    padding: s(5), // touch area better ho jata hai
  },

  title: {
    fontSize: s(16),
    fontWeight: "600"
  },
});
