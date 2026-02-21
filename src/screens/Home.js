import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Indedlogo from '../components/Indedlogo';
import Hometabheader from '../components/Hometabheader';
import { s } from 'react-native-size-matters';
import SearchButton from "../components/SearchButton";

const Home = () => {
  return (
    <View style={styles.container}>
      <Hometabheader />
      {/* Content of the Blue type Background */}
      <View style={styles.topcontaienr}>
        <View style={styles.card}>
          <Text>Hello Hello </Text>
          <SearchButton />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
  topcontaienr: { marginTop: s(30), marginHorizontal: s(15) },
  card: { backgroundColor: '#e7fffdc4', height: '100%', borderRadius: s(10) },
});
