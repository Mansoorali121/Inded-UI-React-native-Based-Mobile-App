import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const CardParagraph = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>Ready to take the next step?</Text>
      <Text style={styles.headersub}>Create an account or sign in</Text>
      <Text style={styles.paragraph}>
        By Clicking any of the 'Continue ' option below,you understand and agree
        to Indeed's <Text style={styles.linktext}>Terms.</Text>
        You also acknowledge our <Text style={styles.linktext}>Cookie</Text> and
        <Text style={styles.linktext}> Privacy</Text> policies. You will recieve
        marketing messages from Indeed and may opt out at any time by following
        the unsubscribe link in our messages, or as detailed in our terms.
      </Text>
    </View>
  );
};

export default CardParagraph;

const styles = StyleSheet.create({
  container: { marginTop: s(20), paddingHorizontal: s(20) },
  headertext: {
    fontSize: s(14),
    fontFamily: 'Audiowide-Regular',
    marginBottom: s(10),
  },
  headersub: {
    fontSize: s(12),
    fontFamily: 'Audiowide-Regular',
    color: 'gray',
    marginBottom: s(15),
  },
  paragraph: {
    fontSize: s(13),
    color: 'gray',
    marginBottom: s(5),
  },
  linktext: { textDecorationLine: 'underline', color: 'skyblue' },
});
