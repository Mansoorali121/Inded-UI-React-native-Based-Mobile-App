import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Indedlogo from '../components/Indedlogo';
import Hometabheader from '../components/Hometabheader';
import { s } from 'react-native-size-matters';
import SearchButton from '../components/SearchButton';
import Modalheader from '../components/Modalheader';
import Modalfooter from '../components/Modalfooter';
import Backbutton from '../components/Backbutton';
import Modalbtn from "../components/Modalbtn";

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
            <TouchableOpacity onPress={() => setModalvisible(false)}>
              <Image
                source={require('../assets/left-arrow.png')}
                style={styles.backbutton}
              />
            </TouchableOpacity>

            <Modalheader />

            <Modalfooter />
            
            <Modalbtn/>
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
  closebtn: { marginTop: s(20), color: 'red', textAlign: 'center' },
  backbutton: {
    position: 'absolute',
    marginTop: s(80),
    marginStart: s(3),
    height: s(24),
    width: s(24),
  },
});
