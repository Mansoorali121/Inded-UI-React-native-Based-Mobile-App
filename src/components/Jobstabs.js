import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { s, vs } from 'react-native-size-matters';

const TabsArray = ['Saved', 'Applied', 'Interviews', 'Archived'];

const Active_bg = 'black';
const Active_text = '#fff';
const Inacctive_text = '#0000';

const Jobstabs = () => {
  const [activetab, setActivetab] = useState('Saved');
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={TabsArray}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => setActivetab(item)}
              style={[
                styles.tabbutton,
                activetab == item && { backgroundColor: Active_bg },
              ]}
            >
              <Text
                style={{
                  color: activetab == item ? Active_text : Inacctive_text,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <View style={{ height:vs(300),width:s(310),marginTop:s(20)}}>
        {activetab == 'Saved' && <SavedContent />}
        {activetab == 'Applied' && <AppliedContent />}
        {activetab == 'Interviews' && <InterviewContent />}
        {activetab == 'Archived' && <ArchivedContent />}
      </View>
    </View>
  );
};
const SavedContent = () => (
  <View>
    <Text style={{ fontSize: 18 }}>Saved Jobs List</Text>
  </View>
);

const AppliedContent = () => (
  <View>
    <Text style={{ fontSize: 18 }}>Applied Jobs List</Text>
  </View>
);

const InterviewContent = () => (
  <View>
    <Text style={{ fontSize: 18 }}>Interview Scheduled Jobs</Text>
  </View>
);

const ArchivedContent = () => (
  <View>
    <Text style={{ fontSize: 18 }}>Archived Jobs</Text>
  </View>
);

export default Jobstabs;

const styles = StyleSheet.create({
  container: {
    borderRadius: s(20),
  },
  tabbutton: {
    backgroundColor: '#f9f9f9',
    marginBottom: vs(5),
    marginRight: s(10),
    alignItems: 'center',
    justifyContent: 'center',
    height: s(50),
    marginTop: vs(10),
    paddingHorizontal: s(16),
    marginStart: s(5),
    borderRadius: s(30),
    width: vs(100),
  },
});
