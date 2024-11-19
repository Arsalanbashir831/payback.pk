import { View, Text, SafeAreaView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import TopHeader from '../common/Header';
import { MaterialIcons } from '@expo/vector-icons';

const notifications = [
  { id: '1', message: 'You have Recieved Rs. 200 Cashback from “ STYLO ”.', date: 'Today', unread: true },
  { id: '2', message: 'You have Recieved Rs. 500 Cashback from “ LIMELIGHT ”.', date: '2 days ago', unread: true },
  { id: '3', message: 'You have Redeemed Rs. 500 Cashback at “ BROADWAY PIZZA ”.', date: '2 days ago', unread: true },
  { id: '4', message: 'You have Recieved Rs. 200 Cashback from “ STYLO ”.', date: '5 days ago', unread: false },
  { id: '5', message: 'You have Recieved Rs. 500 Cashback from “ LIMELIGHT ”.', date: '5 days ago', unread: true },
  { id: '6', message: 'You have Redeemed Rs. 500 Cashback at “ BROADWAY PIZZA ”.', date: '15 days ago', unread: false },
];

const Notification = () => {
  const renderNotification = ({ item }) => (
    <View style={styles.notificationItem}>
      {/* Unread and Read Icons */}
      <View style={styles.iconContainer}>
        <MaterialIcons name="circle" size={12} color={item.unread ? '#FFD700' : 'gray'} />
      </View>
      {/* Message */}
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{item.message}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopHeader isGoBack={true} title={'Notifications'} />

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
          <Text style={styles.tabTextActive}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        style={styles.notificationsList}
      />
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal:8
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  activeTab: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  tabTextActive: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  editText: {
    fontSize: 16,
    color: '#FFD700',
    marginRight: 10,
  },
  notificationsList: {
    marginTop: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  messageContainer: {
    flex: 1,
  },
  messageText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});

export default Notification;
