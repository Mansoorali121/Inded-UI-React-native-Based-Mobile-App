import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SplashHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/indeed_logo.png')}
        style={styles.logoimage}
      />
      <Text style={styles.headertext}>The world's no.1 Job search site</Text>
    </View>
  );
};

export default SplashHeader;

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 70 },
  logoimage: { height: 100, width: '80%',resizeMode:"stretch" },
  headertext: { fontSize: 17, top: 5, fontWeight: 'bold' },
});
