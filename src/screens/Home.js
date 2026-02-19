import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Indedlogo from '../components/Indedlogo';
import Hometabheader from "../components/Hometabheader";

const Home = () => {
  return (
    <View style={styles.container}>
      <Hometabheader/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff',flex:1},
});
