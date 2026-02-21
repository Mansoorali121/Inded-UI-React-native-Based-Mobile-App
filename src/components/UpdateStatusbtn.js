import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const UpdateStatusbtn = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.btntext}>Update Status</Text>
    </TouchableOpacity>
  );
};

export default UpdateStatusbtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: vs(45),
    width: '100%',
    borderRadius: s(12),
    alignItems:"center",
    justifyContent:"center"
  },
  btntext:{color:"blue",fontSize:s(16),fontFamily:"Redressed-Regular"}
});
