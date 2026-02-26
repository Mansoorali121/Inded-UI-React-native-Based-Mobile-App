import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Messageheader from "../components/Messageheader";
import Messagefooter from "../components/Messagefooter";

const Messages = () => {
  return (
    <View style={styles.container}>
      <Messageheader/>
      <Messagefooter/>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
});
