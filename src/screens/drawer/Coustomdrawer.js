import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { s } from 'react-native-size-matters';

const Coustomdrawer = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.closeDrawer()}
        style={styles.closeicon}
      >
        <Image
          source={require('../../assets/close.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Coustomdrawer;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { height: s(24), width: s(24) },
  closeicon: {
    marginTop: s(40),
    position: 'absolute',
    right: s(0),
    marginHorizontal: s(20),
  },
});
