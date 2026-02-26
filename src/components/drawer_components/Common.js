import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import Line from "../../components/drawer_components/Line";

const Common = ({title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.itemcontainer}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={require('../../assets/small-right.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Line/>
    </View>
  );
};

export default Common;

const styles = StyleSheet.create({
  container: { marginTop: s(20) , gap:s(10)},
  image: { height: s(12), width: s(12) },
  itemcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title:{fontWeight:"500",fontSize:s(16)},
});
