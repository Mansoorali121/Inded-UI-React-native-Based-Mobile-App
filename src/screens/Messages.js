import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Messageheader from "../components/Messageheader";

const Messages = () => {
  return (
    <View style={styles.container}>
      <Messageheader/>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
});
