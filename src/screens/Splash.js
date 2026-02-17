import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashHeader from "../components/SplashHeader"

const Splash = () => {
  return (
    <View style={styles.container}>
        <SplashHeader/>
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:"#fff"}
})