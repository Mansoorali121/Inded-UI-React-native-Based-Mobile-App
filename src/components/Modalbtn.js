import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Modalbtn = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.searchtext}>Search</Text>
    
        
      </TouchableOpacity>
    </View>
  );
};

export default Modalbtn;

const styles = StyleSheet.create({
  container: { marginTop: 'auto', alignItems: 'center', marginBottom: s(20) },
  btn: {
    backgroundColor: 'blue',
    width: '80%',
    padding: s(12),
    alignItems: 'center',
    borderRadius: s(12),
  },
  searchtext: {
    color: '#fff',
    fontFamily: 'Audiowide-Regular',
    fontSize: s(14),
  },

});
