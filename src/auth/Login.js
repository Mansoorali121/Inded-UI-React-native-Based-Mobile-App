import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackButton from '../components/Backbutton';
import HomeBtn from '../components/HomeBtn';
import { s, vs } from 'react-native-size-matters';
import Indedlogo from '../components//Indedlogo';
import CardParagraph from '../components/CardParagraph';
import Googlebutton from '../components/Googlebutton';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <BackButton />
        <HomeBtn />
      </View>
      {/* Indeed Logo Here */}
      <Indedlogo />
      {/* Main View to wrap everything inside it */}
      <View style={styles.maincardview}>
        {/* All the Materials here */}
        <CardParagraph />
        {/* Continue with google button */}
        <Googlebutton />
        <Text style={styles.allFieldsText}>
          All fields marked with * are required
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { paddingHorizontal: s(20), flex: 1, backgroundColor: '#fff' },
  headercontainer: {
    flexDirection: 'row',
    top: s(40),
    justifyContent: 'space-between',
    marginBottom: s(50),
  },
  maincardview: {
    backgroundColor: '#fff4f499',
    top: s(40),
    height: s(500),
    width: vs('100%'),
    borderRadius: s(12),
    marginBottom: s(20),
  },
  allFieldsText: {
    marginStart: s(40),
    marginTop: s(10),
    fontSize: vs(12),
    color: 'gray',
  },
});
