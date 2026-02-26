import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const CFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lougouttext}>Sign out</Text>
      <Text style={styles.gmailtext}>mansoorsahito57@gmail.com</Text>
    </View>
  );
};

export default CFooter;

const styles = StyleSheet.create({
  container: { marginTop: s(40) },
  lougouttext:{fontWeight:"500",fontSize:s(16),marginBottom:s(2)},
  gmailtext:{fontSize:s(12),marginBottom:s(20)},
});
