import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Modalfooter = () => {
  const arrayofitems = [
    'Remote',
    'Part time',
    'Data entry',
    'Internship',
    'Teacher',
    'Graphic designer',
    'Latest',
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={arrayofitems}
        keyExtractor={item => item.name}
        renderItem={({ item }) => {
          return (
            <View style={styles.jobsnames}>
              <Image
                source={require('../assets/search.png')}
                style={styles.itemicon}
              />
              <Text style={styles.itemtext}>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Modalfooter;

const styles = StyleSheet.create({
  itemicon: { height: s(24), width: s(24) },
  itemtext: { marginBottom: s(20) },
  jobsnames: { flexDirection: 'row', marginHorizontal: s(15), gap: vs(15) },
  container: { marginTop: s(80) },
});
