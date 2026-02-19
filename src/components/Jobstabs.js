import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const TabsArray = ['Saved', 'Applied', 'Interviews'];

const Active_bg = '#75563B';
const Active_text = '#fff';
const Inacctive_text = '#2C2016';

const Jobstabs = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={TabsArray}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.tabbutton}>
              <Text style={{ color: '#fff' }}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Jobstabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderRadius: s(10),
    height: vs(50),
  },
  tabbutton: {
    backgroundColor: 'blue',
    marginBottom: vs(5),
    marginRight: s(10),
    alignItems: 'center',
    justifyContent: 'center',
    height: s(40),
    marginTop: vs(5),
    paddingHorizontal: s(20),
    marginStart: s(5),
  },
});
