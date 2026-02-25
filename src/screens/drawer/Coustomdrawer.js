import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Coustomdrawer = (props) => {
  return (
    <View style={styles.container}>
      <Text>Coustomdrawer</Text>
      <TouchableOpacity  onPress={()=>props.navigation.closeDrawer()} style={{backgroundColor:"red"}}>
        <Text>Close the drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Coustomdrawer;

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:"#fff"},
})