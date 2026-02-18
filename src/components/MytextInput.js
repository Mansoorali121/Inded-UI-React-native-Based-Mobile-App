import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const MytextInput = ({...props}) => {
  return (
    <View>
      <Text>Email Address</Text>
      <TextInput {...props} 
      style={styles.input}
      />
    </View>
  )
}

export default MytextInput;

const styles = StyleSheet.create({
    input:{},
})