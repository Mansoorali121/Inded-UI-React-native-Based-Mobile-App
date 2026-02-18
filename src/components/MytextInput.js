import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const MytextInput = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.email}>Email Address</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

export default MytextInput;

const styles = StyleSheet.create({
  input: {
    height: s(50),
    width: vs(270),
    backgroundColor: '#fff4f4',
    borderWidth: s(2),
    borderColor: 'blue',
    borderRadius: s(10),
  },
  container: { marginHorizontal: s(20), marginTop: s(10) },
  email: {
    fontSize: s(12),
    fontWeight: 'bold',
    marginBottom: s(10),
    marginStart: s(5),
    fontFamily: 'Audiowide-Regular',
  },
});
