import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Appliedheader from './Appliedheader';
import { s } from 'react-native-size-matters';

const ArchievedJobsCard = () => {
  return (
    <View>
      <View style={{ marginHorizontal: s(15) }}>
        <Appliedheader />
      </View>
    </View>
  );
};

export default ArchievedJobsCard;

const styles = StyleSheet.create({});
