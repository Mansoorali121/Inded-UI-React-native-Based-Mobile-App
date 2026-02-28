import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Indedlogo from '../components/Indedlogo';
import Hometabheader from '../components/Hometabheader';
import { s } from 'react-native-size-matters';
import SearchButton from '../components/SearchButton';
import Modalheader from '../components/Modalheader';
import Modalfooter from '../components/Modalfooter';
import Backbutton from '../components/Backbutton';
import Modalbtn from '../components/Modalbtn';
import Joblist from "../components/Jobslist";

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
          <ScrollView showsVerticalScrollIndicator={false} style={styles.cardheader}>
            <Text style={styles.jobtitle}>Jobs for you</Text>
            <Text style={styles.subtitle}>
              Jobs based on your activity on Indeed
            </Text>
          </ScrollView >
          <Joblist />
          <Modal visible={modalvisible} animationType="slide">
            <TouchableOpacity
              onPress={() => setModalvisible(false)}
              activeOpacity={0.5}
            >
              <Image
                source={require('../assets/left-arrow.png')}
                style={styles.backbutton}
              />
            </TouchableOpacity>

            <Modalheader />

            <Modalfooter />

            <Modalbtn />
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
  card: { backgroundColor: '#f1f4ffc4', height: '100%', borderRadius: s(10) },
  closebtn: { marginTop: s(20), color: 'red', textAlign: 'center' },
  backbutton: {
    position: 'absolute',
    marginTop: s(80),
    marginStart: s(3),
    height: s(24),
    width: s(24),
  },
  cardheader: { marginTop: s(10), paddingHorizontal: s(22) },
  jobtitle: { fontSize: s(20), fontWeight: '500', marginBottom: s(5) },
  subtitle: { fontSize: s(14), color: 'gray' },
});
