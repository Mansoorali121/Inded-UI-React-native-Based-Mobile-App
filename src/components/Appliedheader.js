import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const Appliedheader = () => {
  return (
       <View style={styles.cardheader}>
          <Text style={styles.appliedtext}>Applied</Text>
          <Image source={require('../assets/dots.png')} style={styles.image} />
        </View>
  )
}

export default Appliedheader;

const styles = StyleSheet.create({
      cardheader: {
    marginTop: s(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: { height: vs(20), width: s(20) },
  appliedtext: {
    fontWeight: 'bold',
    color: 'blue',
    backgroundColor: '#f3f4f6',
    padding: s(3),
    borderRadius: s(10),
    marginBottom: s(10),
  },
})