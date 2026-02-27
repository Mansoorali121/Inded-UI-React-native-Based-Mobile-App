import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Dummy_data = [
  {
    id: 1,
    save_image: require('../assets/save-instagram.png'),
    dislike_image: require('../assets/dont-like.png'),
    title: 'Application Engineer ',
    company_name: ' MicroElec Technical ',
    location: ' Karachi ',
    salary: 70000,
    type: 'Full Time',
  },
  {
    id: 2,
    save_image: require('../assets/save-instagram.png'),
    dislike_image: require('../assets/dont-like.png'),
    title: ' React Native Intern ',
    company_name: ' Cubix ',
    location: ' Karachi ',
    salary: 25000,
    type: 'Internship',
  },
  {
    id: 3,
    save_image: require('../assets/save-instagram.png'),
    dislike_image: require('../assets/dont-like.png'),
    title: ' Senior React Developer ',
    company_name: ' Systems Limited ',
    location: ' Karachi ',
    salary: 55000,
    type: 'Contract',
  },
];
const Jobslist = () => {
  return (
    <ScrollView style={styles.container}
    showsVerticalScrollIndicator={false}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Dummy_data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardinner}>
                <View style={styles.upperitems}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Image
                    source={item.save_image}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.upperitems}>
                  <Text style={styles.lowertitle}>{item.company_name}</Text>
                  <Image
                    source={item.dislike_image}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.lowertitle}>{item.location}</Text>
                <View style={styles.salarybtn}>
                  <Image
                    source={require('../assets/checkmark.png')}
                    style={[styles.image, { marginStart: s(10) }]}
                  />
                  <Text>Rs {item.salary}</Text>
                </View>
                <View style={styles.salarybtn}>
                  <Image
                    source={require('../assets/checkmark.png')}
                    style={[styles.image, { marginStart: s(10) }]}
                  />
                  <Text>{item.type}</Text>
                </View>
                <View style={styles.easyapply}>
                  <Image
                    source={require('../assets/rightt.png')}
                    style={[styles.image, { marginStart: s(10) }]}
                  />
                  <Text style={styles.applytext}>Easily apply</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

export default Jobslist;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    height: s(230),
    width: '100%',
    marginBottom: s(15),
    borderRadius: s(10),
  },
  container: { marginTop: s(10), paddingHorizontal: s(20) },
  title: { fontSize: s(18), fontWeight: '500' },
  cardinner: { marginHorizontal: s(10) },
  image: { height: s(20), width: s(20) },
  upperitems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: s(10),
  },
  lowertitle: { fontSize: s(14), marginTop: s(5), opacity: 0.7 },
  salarybtn: {
    backgroundColor: '#f1f4ffc4',
    width: '50%',
    borderRadius: s(5),
    flexDirection: 'row',
    padding: s(2),
    gap: s(10),
    marginTop: s(10),
  },
  easyapply: {
    width: '50%',
    borderRadius: s(5),
    flexDirection: 'row',
    padding: s(2),
    gap: s(5),
    marginTop: s(15),
  },
  applytext: {
    marginStart: s(5),
    fontSize: s(14),
    opacity: 0.7,
    fontWeight: '400',
  },
});
