import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { s, vs } from 'react-native-size-matters';

const TabsArray = ['Saved', 'Applied', 'Interviews', 'Archived'];

const Active_bg = 'black';
const Active_text = '#fff';
const Inactive_text = '#000';

const Jobstabs = () => {
  const [activetab, setActivetab] = useState('Saved');

  return (
    <View style={styles.container}>
      
      {/* 🔥 Tabs Section */}
      <View style={styles.tabsContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={TabsArray}
          keyExtractor={(item) => item}
          contentContainerStyle={{ alignItems: 'center' }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setActivetab(item)}
              style={[
                styles.tabbutton,
                activetab === item && { backgroundColor: Active_bg },
              ]}
            >
              <Text
                style={{
                  color:
                    activetab === item
                      ? Active_text
                      : Inactive_text,
                  fontWeight: '600',
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* 🔥 Content Section */}
      <View style={styles.contentContainer}>
        {activetab === 'Saved' && <SavedContent />}
        {activetab === 'Applied' && <AppliedContent />}
        {activetab === 'Interviews' && <InterviewContent />}
        {activetab === 'Archived' && <ArchivedContent />}
      </View>

    </View>
  );
};

/* ---------------- Content Components ---------------- */

const SavedContent = () => (
  <View>
    <Text style={styles.contentText}>Saved Jobs List</Text>
  </View>
);

const AppliedContent = () => (
  <View>
    <Text style={styles.contentText}>Applied Jobs List</Text>
  </View>
);

const InterviewContent = () => (
  <View>
    <Text style={styles.contentText}>Interview Scheduled Jobs</Text>
  </View>
);

const ArchivedContent = () => (
  <View>
    <Text style={styles.contentText}>Archived Jobs</Text>
  </View>
);

export default Jobstabs;

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  tabsContainer: {
    height: vs(70),
    justifyContent: 'center',
  },

  contentContainer: {
    flex: 1,
    padding: vs(16),
  },

  tabbutton: {
    backgroundColor: '#f1f1f1',
    marginRight: s(10),
    alignItems: 'center',
    justifyContent: 'center',
    height: s(45),
    paddingHorizontal: s(18),
    borderRadius: s(30),
  },

  contentText: {
    fontSize: 18,
    fontWeight: '600',
  },
});