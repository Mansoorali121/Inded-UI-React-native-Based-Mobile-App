import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const D_header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Text style={styles.nametetx}>Mansoor Ali</Text>
        <TouchableOpacity style={styles.circle}>
          <Text style={styles.name}>MA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default D_header;

const styles = StyleSheet.create({
  header: { marginTop: s(40) },
  container: { flexDirection: 'row', justifyContent: 'space-between' },
  circle: { backgroundColor: 'black', padding: s(20), borderRadius: s(34),marginTop:s(-8) },
  nametetx: { fontSize: s(20), fontWeight: 'bold' },
  name:{fontSize: s(20), fontWeight: 'bold',color:"#fff"}
});
