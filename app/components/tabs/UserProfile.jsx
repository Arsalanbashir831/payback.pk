import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import TopHeader from '../common/Header'; 
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
   
      <TopHeader  isGoBack={true} />


      <View style={styles.profileSection}>
        <Image
          source={require('../../../assets/images/resturant_pic.jpeg')} 
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Arsalan Bashir</Text>
        <Text style={styles.userAccount}>Account: 03440600009</Text>
      </View>

      {/* Info Section */}
      <View style={styles.infoSection}>
        {/* Email Row */}
        <View style={styles.infoRow}>
          <MaterialIcons name="email" size={24} color="black" />
          <Text style={styles.infoText}>arsalan@gmail.com</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Password Row */}
        <View style={styles.infoRow}>
          <FontAwesome name="lock" size={24} color="black" />
          <Text style={styles.infoText}>••••••</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Transactions Row */}
        <View style={styles.infoRow}>
          <MaterialIcons name="history" size={24} color="black" />
          <Text style={styles.infoText}>Transactions</Text>
        </View>
      </View>

      {/* Sign Out Button */}
      <View style={styles.signOutSection}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.signOutButton}>
          <MaterialIcons name="logout" size={24} color="orange" />
          <Text style={styles.signOutText}>SignOut</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    padding: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userAccount: {
    fontSize: 14,
    color: 'gray',
  },
  infoSection: {
    borderTopWidth: 1,
    borderTopColor: 'black',
    paddingTop: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  infoText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  editText: {
    color: '#fdba28',
    fontWeight: 'bold',
  },
  signOutSection: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingVertical: 20,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signOutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
});

export default UserProfile;
