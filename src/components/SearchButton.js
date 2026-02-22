import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const SearchButton = ({ onPress, ...props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardcontainer}>
        <TouchableOpacity style={styles.subview} onPress={onPress}>
          <Image
            source={require('../assets/search.png')}
            style={styles.searchimage}
          />
          <TextInput {...props} style={styles.input} />
        </TouchableOpacity>
        <View style={styles.line}></View>
        {/* Location */}
        <TouchableOpacity onPress={onPress} style={styles.subview}>
          <Image
            source={require('../assets/pin.png')}
            style={styles.searchimage}
          />
          <TextInput {...props} style={styles.input} placeholder="Korangi" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#0000',
    width: '90%',
    borderRadius: s(10),
    height: s(60),
    marginTop: s(20),
    marginStart: s(20),
  },
  input: {},
  searchimage: { height: s(24), width: s(24), top: s(6) },
  cardcontainer: { flexDirection: 'row', gap: s(30) },
  subview: { flexDirection: 'row', top: s(10) },
  line: {
    borderWidth: s(0.3),
    alignItems: 'center',
    justifyContent: 'center',
    top: s(10),
    height: s(34),
    width: s(0.3),
  },
});
