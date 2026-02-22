import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect , useRef} from 'react';
import { s } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const Modalheader = () => {
  const inputRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headertitle}>Job,title,Keywords or company</Text>
      </View>
      <View style={styles.inputcontainer}>
        <View style={styles.input}>
          <Image
            source={require('../assets/search.png')}
            style={styles.image}
          />
          <TextInput  placeholder = "" ref={inputRef} />
        </View>
      </View>
    </View>
  );
};

export default Modalheader;

const styles = StyleSheet.create({
  header: { marginHorizontal: s(15), marginTop: s(40), alignItems: 'center' },
  headertitle: { fontFamily: 'Langar-Regular', fontSize: s(14) },
  image: { height: s(24), width: s(24) },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: s(2),
    borderColor: 'blue',
    width: '80%',
    padding: s(5),
    borderRadius: s(10),
  },
  inputcontainer: { alignItems: 'center', marginTop: s(6) },
});
