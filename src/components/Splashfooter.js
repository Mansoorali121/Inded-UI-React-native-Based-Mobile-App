import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Splashfooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.normaltext}>
        By using indeed,you agree and consent to
      </Text>
      <Text style={styles.normaltext}>our:</Text>
      <View style={styles.textcontainer}>
        <Text style={styles.decorationtext}>Terms of Use</Text>
        <Text style={styles.decorationtext}>Privacy Policy</Text>
        <Text style={styles.decorationtext}>Cookie Policy</Text>
      </View>
      <Text
        style={[
          styles.normaltext,
          {
            marginBottom: s(10),
            color: '#227eb7',
            textDecorationLine: 'underline',
          },
        ]}
      >
        Your Privacy Choices
      </Text>
    </View>
  );
};

export default Splashfooter;

const styles = StyleSheet.create({
  container: { marginTop: 'auto', gap: 10 },
  normaltext: { fontSize: s(15), fontWeight: '400' },
  decorationtext: {
    color: '#227eb7',
    textDecorationLine: 'underline',
    fontSize: s(15),
    fontWeight: '400',
  },
  textcontainer: { flexDirection: 'row', justifyContent: 'space-between' },
});
