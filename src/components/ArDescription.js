import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { s } from 'react-native-size-matters';

const ArDescription = () => {
  const [showfull, setShowfull] = useState(true);

  const description =
    "We're looking for top-tier React Native developers to work on large web development projects. They will have to collaborate with graphic designers and the product team. The candidate must design a flexible and well-structured front-end architecture and APIs to support it. React Native developers will create visualizations that can render massive amounts of data.";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Full Job Description</Text>
      <Text style={styles.description} numberOfLines={showfull ? undefined : 2}>
        {description}
      </Text>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity
          onPress={() => setShowfull(!showfull)}
          activeOpacity={0.6}
          style={styles.input}
        >
          <Text style={styles.btntext}>
            {showfull ? 'Show less' : 'Show more'}{' '}
          </Text>
          <Image
            source={
              showfull
                ? require('../assets/arrow-up.png')
                : require('../assets/down-arrow.png')
            }
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: s(40) }} />
    </View>
  );
};

export default ArDescription;

const styles = StyleSheet.create({
  container: { marginHorizontal: s(20), marginTop: s(20) },
  title: { fontSize: s(20), fontWeight: '500', marginBottom: s(10) },
  description: {
    fontSize: s(13),
    paddingHorizontal: s(1),
    marginBottom: s(20),
    opacity: s(0.5),
  },
  image: { height: s(24), width: s(24) },
  input: {
    width: '100%',
    backgroundColor: '#fffcfce4',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: s(10),
    height: s(60),
  },
  buttoncontainer: { alignItems: 'center', marginTop: s(10) },
  btntext: { color: 'blue', fontSize: s(15), fontWeight: 'bold' },
});
