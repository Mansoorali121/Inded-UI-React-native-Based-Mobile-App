import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Jobdetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job Details </Text>
      <View style={styles.items}>
        <View style={styles.itemcontainer}>
          <Image source={require('../assets/money.png')} style={styles.img} />
          <Text style={styles.item}>Pay information not provided</Text>
        </View>
        <View style={styles.itemcontainer}>
          <Image source={require('../assets/clock.png')} style={styles.img} />
          <Text style={styles.item}>Full time</Text>
        </View>{' '}
        <View style={styles.itemcontainer}>
          <Image
            source={require('../assets/maps-and-flags.png')}
            style={styles.img}
          />
          <Text style={styles.item}>Lahore</Text>
        </View>
      </View>
    </View>
  );
};

export default Jobdetails;

const styles = StyleSheet.create({
  container: { marginHorizontal: s(20), marginTop: s(20) },
  title: {
    fontSize: s(22),
    fontFamily: 'Redressed-Regular',
    marginBottom: s(15),
  },
  img: { height: s(24), width: s(24) },
  itemcontainer: { flexDirection: 'row', gap: s(10) },
  items: { gap: s(25) },
  item:{fontSize:s(16), fontWeight:"500"},
});
