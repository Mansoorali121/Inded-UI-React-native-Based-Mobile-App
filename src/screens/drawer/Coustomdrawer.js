import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { s } from 'react-native-size-matters';
import Closebtn from '../../components/drawer_components/Closebtn';

const Coustomdrawer = props => {
  return (
    <View style={styles.container}>
      <Closebtn onPress={() => props.navigation.closeDrawer()} />
    </View>
  );
};

export default Coustomdrawer;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

});
