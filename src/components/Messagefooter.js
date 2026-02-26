import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Messagefooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemscontainer}>
        <TouchableOpacity style={styles.btn}>
          <Image
            source={require('../assets/office.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.subtext}>
          <Text  style={styles.names}>SH INNOVATIONS</Text>
          <Text style={styles.names}>You:</Text>
        </View>
        <Text style={styles.subtext}>Apr 17, 2025</Text>
      </View>
    </View>
  );
};

export default Messagefooter;

const styles = StyleSheet.create({
  container: { paddingHorizontal: s(20), marginTop: s(50) },
  image: { height: s(24), width: s(24) },
  btn: {
    backgroundColor: '#a8e4b3',
    height: s(56),
    width: s(56),
    padding: s(10),
    alignItems: 'center',
    borderRadius: s(20),
    justifyContent: 'center',
  },
  subtext: { marginTop: s(8) },
  itemscontainer:{ flexDirection: 'row', justifyContent: 'space-between' },
  names:{fontSize:s(16)}
});
