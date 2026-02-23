import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const SavedItems = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemcontainer}>
        <Image source={require('../assets/logout.png')} style={styles.logout} />
        <Image
          source={require('../assets/save-instagram.png')}
          style={styles.saved}
        />
      </View>
    </View>
  );
};

export default SavedItems;

const styles = StyleSheet.create({
  logout: { height: s(24), width: s(24) },
  saved: { height: s(24), width: s(24) },
  container: { marginHorizontal: s(20) },
  itemcontainer: { flexDirection: 'row', gap: s(20) },
});
