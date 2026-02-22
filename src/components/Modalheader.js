import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Modalheader = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headertitle}>Job,title,Keywords or company</Text>
      </View>
      <View>
        <TouchableOpacity >
          <Image
            source={require('../assets/search.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Modalheader;

const styles = StyleSheet.create({
  header: { marginHorizontal: s(15), marginTop: s(40), alignItems: 'center' },
  headertitle: { fontFamily: 'Langar-Regular', fontSize: s(14) },
  image: { height: s(24), width: s(24) },
});
