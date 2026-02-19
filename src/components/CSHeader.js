import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const CSHeader = ({ useremail }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>Welcome Back</Text>
      <Text style={styles.normaltext}>Your eemail is securely powered by</Text>
      <Text style={styles.normaltext}>Google</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.normaltext}>continue as </Text>
        <Text style={styles.email}>{useremail}</Text>
      </View>
      <Text style={styles.linktext}>(not you?)</Text>
    </View>
  );
};

export default CSHeader;

const styles = StyleSheet.create({
  headertext: {
    fontWeight: 'bold',
    fontSize: s(20),
    fontFamily: 'Audiowide-Regular',
    marginBottom: s(10),
  },
  normaltext: { fontSize: s(14), color: 'gray', marginBottom: s(10) },
  email: {
    fontWeight: '600',
    color: '#5c6163',
    fontSize: s(12),
    marginBottom: s(20),
  },
  linktext: { textDecorationLine: 'underline', color: 'skyblue' },
  container: { paddingHorizontal: s(20), top: s(10) },
});
