import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const EmployerD = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btncontainer}>
        <Image source={require('../../assets/eye.png')} style={styles.image} />
        <TouchableOpacity>
          <Text style={styles.btntext}>Employers can find you</Text>
        </TouchableOpacity>
        <Image
          source={require('../../assets/small-down.png')}
          style={[styles.image,{left:s(40)}]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default EmployerD;

const styles = StyleSheet.create({
  container: { marginTop: s(30) },
  
  image: { height: s(24), width: s(24) },
  btncontainer: {
    flexDirection: 'row',
    backgroundColor: '#75c997',
    width: '100%',
    padding: s(15),
    borderRadius: s(20),
  },
  btntext: { color: '#fff', fontWeight: 'bold', fontSize: s(16) ,marginStart:s(20)},
});
