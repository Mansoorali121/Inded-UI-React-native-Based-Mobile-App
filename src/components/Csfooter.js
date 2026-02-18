import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Csfooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.normaltext}>
        Inded will use your information as described in our
        <Text style={styles.linktext}>privacy policy.</Text>
        Google may ask for your permission to share it with Indeed details like
        your name,profile picture,public profile information, and email
        addresses.
      </Text>
      <Text style={styles.linktext2}>Sign in with a code instead</Text>
    </View>
  );
};

export default Csfooter;

const styles = StyleSheet.create({
  container: { paddingHorizontal: s(20), top: s(20) },
  linktext: { textDecorationLine: 'underline', color: 'skyblue' },
  normaltext: { fontSize: s(16), color: 'gray', marginBottom: s(20) },
  linktext2: { textDecorationLine: 'underline', color: 'blue' },
});
