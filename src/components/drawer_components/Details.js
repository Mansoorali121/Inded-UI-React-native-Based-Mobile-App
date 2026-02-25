import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Details = () => {
  return (
    <View style={styles.container}>
      <View style={styles.emailcontainer}>
        <Image
          source={require('../../assets/email.png')}
          style={styles.image}
        />
        <Text style={styles.email}>mansoorsahito601@gmail.com</Text>
      </View>
      <View style={styles.emailcontainer}>
        <Image
          source={require('../../assets/phone-call.png')}
          style={styles.image}
        />
        <Text style={styles.email}>03183436180</Text>
      </View>
      <View style={styles.emailcontainer}>
        <Image
          source={require('../../assets/maps-and-flags.png')}
          style={styles.image}
        />
        <Text style={styles.email}>Karachi Gulshan-E-Iqbal,57300,Pk</Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: { marginTop: s(20), gap: s(20) },
  image: { height: s(24), width: s(24), opacity: 0.4 },
  emailcontainer: { flexDirection: 'row', alignItems: 'center', gap: s(20) },
  email: { opacity: 0.6, fontSize: s(14) },
});
