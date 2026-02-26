import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Messageheader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemcontainer}>
        <Text style={styles.messagetext}>Messages</Text>
        <Image
          source={require('../assets/lightning.png')}
          style={[styles.image, { left: s(60) }]}
        />
        <Image source={require('../assets/menu.png')} style={styles.image} />
      </View>
    </View>
  );
};

export default Messageheader;

const styles = StyleSheet.create({
  container: { marginTop: s(20), paddingHorizontal: s(20) },
  messagetext: { fontSize: s(20), fontWeight: '500' },
  itemcontainer: { flexDirection: 'row', justifyContent: 'space-between' },
  image: { height: s(24), width: s(24) },
});
