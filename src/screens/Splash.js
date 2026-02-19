import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SplashHeader from '../components/SplashHeader';
import Mybutton from '../components/Mybutton';
import { s, vs } from 'react-native-size-matters';
import Splashfooter from '../components/Splashfooter';
import { useNavigation } from '@react-navigation/native';
import CSHeader from '../components/CSHeader';
import Backbutton from '../components/Backbutton';
import HomeBtn from '../components/HomeBtn';

const Splash = () => {
  const navigation = useNavigation();
  // loading Setting
  const [loading,setLoading] = useState(false);

  // handle Loading
  const handleLoading = () => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      navigation.navigate("Login");

    },2000)
  }
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.headercontainer}>
          <Backbutton/>
          <HomeBtn/>
             <View style={styles.loaderOverlay}>
        <ActivityIndicator size="small" color="blue" />
      </View>
          </View>
     

      ):(
      <>
        <SplashHeader />
      <View style={styles.buttocontainer}>
        <Mybutton
          title="Signin"
          color="blue"
          textcolor="#fff"
          onPress={handleLoading}
        />
        <Mybutton title="create an account" color="#fff" textcolor="blue" />
        {/* New text  */}
        <Text style={styles.linktext}>
          Recruiment?Visit{' '}
          <Text style={styles.sublink}>Indeed for employers</Text>
        </Text>
      </View>
      <Splashfooter />
      
      </>
      )}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: vs(30) },
  buttocontainer: { marginTop: s(30), gap: s(12) },
  linktext: { marginTop: s(10), fontSize: s(15), marginStart: s(5) },
  sublink: { color: '#227eb7', textDecorationLine: 'underline' },
  loaderOverlay: {
  position: 'absolute',
  top: s(40),
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
},
headercontainer:{
  flexDirection: 'row',
    top: s(40),
    justifyContent: 'space-between',
    marginBottom: s(50),
}

});
