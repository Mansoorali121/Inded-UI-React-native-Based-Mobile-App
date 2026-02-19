import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Myjobstitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Jobs</Text>
    </View>
  );
};

export default Myjobstitle;

const styles = StyleSheet.create({
  container: {marginTop: s(20) },
  title:{fontSize:s(20),fontFamily:"Audiowide-Regular",marginBottom:s(15)},
});
