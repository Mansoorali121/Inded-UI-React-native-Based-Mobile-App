import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Continuebtn = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Continue</Text>
        <Image
          source={require('../assets/right-arrow.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Continuebtn;

const styles = StyleSheet.create({
  container: { marginTop: s(14), marginHorizontal: s(20) },
  btn: {
    height: s(50),
    width: vs(270),
    backgroundColor: '#79bee9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(10),
    flexDirection: 'row',
  },
  image: { height: s(30), width: vs(40), marginStart: s(10), opacity: 0.2 },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: s(16),
    fontFamily: 'NovaFlat-Regular',
    opacity: 0.5,
  },
});
