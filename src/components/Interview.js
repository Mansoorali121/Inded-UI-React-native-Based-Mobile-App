import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';

const Interview = () => {
  return (
    <View style={styles.interviewcontainer}>
     <Image source={require('../assets/interview.jpg')} style={styles.image} />
         <Text style={styles.text}>No upcoming Interviews</Text>
         <Text style={styles.graytext}>
           Your Scheduled interviews will appear here.
         </Text>
         <Text style={styles.footertext}>Not seeing an interview?</Text>
    </View>
  )
}

export default Interview;

const styles = StyleSheet.create({
      image: { height: s(200), width: s(200) },
  text: {
    marginTop: s(5),
    fontSize: s(18),
    fontWeight: 'bold',
    marginBottom: s(10),
  },
  footertext: {
    marginTop: s(100),
    color: 'blue',
    fontWeight: '500',
    fontSize: s(16),
  },
  graytext: { opacity: 0.7, fontSize: s(14) },
  interviewcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: s(60),
  },
})