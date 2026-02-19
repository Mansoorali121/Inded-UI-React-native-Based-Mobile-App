import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/Backbutton';
import HomeBtn from '../components/HomeBtn';
import Indedlogo from '../components/Indedlogo';
import CSHeader from '../components/CSHeader';
import Googlebutton from '../components/Googlebutton';
import Csfooter from "../components/Csfooter";
const Confirmlogin = ({route}) => {
  const {useremail} = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <BackButton onPress={() => navigation.goBack()} />
        <HomeBtn />
      </View>
      {/* Indeed Logo Here */}
      <Indedlogo />
      {/* Card View to Show Details  */}
      <View style={styles.maincardview}>
        {/* header Items Here */}
     
          <CSHeader  useremail={useremail}/>
       <View style={{marginTop:s(20)}}>
         <Googlebutton/>
       </View>
       {/* Footer Items Here */}
       <Csfooter/>
      </View>
    </View>
  );
};

export default Confirmlogin;

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
    top: s(20),
    height: s(480),
    width: vs('100%'),
    borderRadius: s(12),
    marginBottom: s(20),
  },
});
