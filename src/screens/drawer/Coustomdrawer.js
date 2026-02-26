import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { s } from 'react-native-size-matters';
import Closebtn from '../../components/drawer_components/Closebtn';
import Line from "../../components/drawer_components/Line";
import Common from "../../components/drawer_components/Common";
const Coustomdrawer = props => {
  return (
    <View style={styles.container}>
      <Closebtn onPress={() => props.navigation.closeDrawer()} />
      <View style={{ marginHorizontal: s(20) }}>
        <View style={styles.title}>
          <Text>Options</Text>
          <Line/>
          <Common title = "Settings" />
        </View>
      </View>
    </View>
  );
};

export default Coustomdrawer;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { marginTop: s(80), fontSize: s(14), color: 'gray' },
});
