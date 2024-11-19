import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import TopHeader from '../components/common/Header';

const Invites = () => {
  const accountRequests = [
    { name: 'Usama Shakeel', id: 'ID 123456789' },
    { name: 'Hamna Ali', id: 'ID 123456789' },
    // Add more entries as needed
  ];

  const pendingInvites = [
    { name: 'Abdul Rehman', id: 'ID 123456789' },
    { name: 'Arsalan', id: 'ID 123456789' },
    // Add more entries as needed
  ];

  return (
    <View style={styles.container}>
      <TopHeader title="PayBack" isGoBack={true} />
      <ScrollView style={styles.scrollView}>
        <Section title="Account Requests" count={7} items={accountRequests} />
        <Section title="Pending Invites" count={17} items={pendingInvites} />
      </ScrollView>
    </View>
  );
};

const Section = ({ title, count, items }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title} ({count})</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See All</Text>
      </TouchableOpacity>
    </View>
    {items.map((item, index) => (
      <View key={index} style={styles.listItem}>
        <MaterialCommunityIcons name="account-circle" size={24} color="#FFD700" />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userId}>{item.id}</Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="check" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="close" size={24} color="red" />
        </TouchableOpacity>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#FFA500',
    fontSize: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFEB9C',
    marginBottom: 5,
    borderRadius: 10,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  userId: {
    color: 'grey',
  },
});

export default Invites;
