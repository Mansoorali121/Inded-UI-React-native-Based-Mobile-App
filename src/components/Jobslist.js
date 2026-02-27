import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

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
];
const Jobslist = () => {
  return (
    <View>
      <Text>Jobslist</Text>
    </View>
  );
};

export default Jobslist;

const styles = StyleSheet.create({});
