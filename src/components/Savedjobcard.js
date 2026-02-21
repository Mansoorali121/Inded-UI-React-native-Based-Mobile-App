import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import Findjobsbtn from "../components/Findjobsbtn";

const Savedjobcard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/savedpic.jpg')}
        style={styles.headerpic}
      />
      <Text style={styles.jobstext}>No saved jobs yet</Text>
      <Text style={styles.paragraph}>
        Track jobs you're intersted in by saving them.Your saved jobs will be
        appear here.
      </Text>
      <Findjobsbtn/>
      <Text style={styles.footertext}>Not seeing a job?</Text>
    </View>
  );
};

export default Savedjobcard;

const styles = StyleSheet.create({
  container: { marginTop: s(20), alignItems: 'center', gap: s(10) },
  headerpic: { resizeMode: 'stretch', height: vs(150), width: s(170) },
  jobstext: { fontSize: s(18), fontWeight: '500' },
  paragraph: {
    opacity: 0.5,
    fontSize: s(16),
    marginHorizontal: s(10),
    textAlign: 'center',
  }, footertext: {
    textAlign: 'center',
    marginTop: s(20),
    color: 'blue',
    fontSize: s(18),
    fontWeight:"400"
  },
});
