import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MyJobstitle from '../components/Myjobstitle';
import { s } from 'react-native-size-matters';
import Jobstabs from '../components/Jobstabs';
const MyJobs = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: s(20) }}>
        <MyJobstitle />
        <Jobstabs />
      </View>
    </View>
  );
};

export default MyJobs;

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
});
