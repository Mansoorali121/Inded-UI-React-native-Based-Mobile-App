import { Modal, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import Indedlogo from '../components/Indedlogo';
import Hometabheader from '../components/Hometabheader';
import { s } from 'react-native-size-matters';
import SearchButton from '../components/SearchButton';

const Home = () => {
  const [modalvisible, setModalvisible] = useState(false);
  // const [inputRef] = useRef();
  return (
    <View style={styles.container}>
      <Hometabheader />
      {/* Content of the Blue type Background */}
      <View style={styles.topcontaienr}>
        <View style={styles.card}>
          <SearchButton
            placeholder="Enter Job title"
            onPress={() => setModalvisible(true)}
          />
          <Modal visible={modalvisible} animationType="slide">
            <Text>Modal is Visible</Text>
            <Text
              onPress={() => setModalvisible(false)}
              style={{ marginTop: s(20), color: 'red', textAlign: 'center' }}
            >
              Close the model{' '}
            </Text>
          </Modal>
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
