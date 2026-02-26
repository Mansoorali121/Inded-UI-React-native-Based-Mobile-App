import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { s } from 'react-native-size-matters';
import Closebtn from '../../components/drawer_components/Closebtn';
import Line from '../../components/drawer_components/Line';
import Common from '../../components/drawer_components/Common';
import CFooter from '../../components/drawer_components/CFooter';

const Coustomdrawer = props => {
  return (
    <View style={styles.container}>
      <Closebtn onPress={() => props.navigation.closeDrawer()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: s(20) }}
      >
        <View style={{ marginTop: s(140) }}>
          <Text style={styles.title}>Options</Text>
          <Line />
          <Common title="Settings" />
          <Common title="Country and language" />
          
          <Text
            style={[styles.title, { marginTop: s(30), marginBottom: s(10) }]}
          >
            Resources
          </Text>
          <Line />
          <Common title="Company reviews" />
          <Common title="Accessibility at indeed" />
          <Common title="Help" />
          <Common title="Indeed for employers" />
          <Text
            style={[styles.title, { marginTop: s(30), marginBottom: s(10) }]}
          >
            About you
          </Text>
          <Line />
          <Common title="Contact Information" />
          <Common title="My reviews" />

          <Text
            style={[styles.title, { marginTop: s(40), marginBottom: s(10) }]}
          >
            Legal
          </Text>
          <Line />
          <Common title="Terms" />
          <CFooter />
        </View>
      </ScrollView>
    </View>
  );
};

export default Coustomdrawer;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { fontSize: s(14), color: 'gray' },
});
