import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const ReferEarn = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header */}
      {/* <TopHeader  isGoBack={true} /> */}

      {/* Refer & Earn Section */}
      <View style={styles.mainContent}>
        {/* Illustration */}
        <View style={{display:'flex', flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , width:'100%'}}>
        <TouchableOpacity style={{backgroundColor:'#FFE101' , borderRadius:100, padding:5}} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/referEarn.png')} // Replace with actual image path
          style={styles.illustration}
        />
        </View>
      
        <Text style={styles.referTitle}>Refer & Earn</Text>
        <Text style={styles.referDescription}>
          Invite your friends to PayBack & Earn bonus of Rs. 50 Each
        </Text>

        {/* Referral Link Section */}
        <View style={styles.referralLinkContainer}>
          <TextInput
            value="https://payback.app/w61PP"
            editable={false}
            style={styles.referralInput}
          />
          <TouchableOpacity style={styles.copyButton}>
            <Text style={styles.copyText}>Copy</Text>
          </TouchableOpacity>
        </View>

        {/* QR Code Section */}
        <TouchableOpacity style={styles.qrCodeButton}>
          {/* <Image
            source={require('../../assets/images/qrCodeIcon.png')} // Replace with actual QR code icon path
            style={styles.qrCodeIcon}
          /> */}
          <Text style={styles.qrCodeText}>Scan QR Code</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share on WhatsApp</Text>
        </TouchableOpacity>

        {/* Earnings Section */}
        <View style={styles.earningsContainer}>
          <Text style={styles.earningsLabel}>Total Referrals: 8</Text>
          <View style={styles.earningsBox}>
            <Text style={styles.bonusTitle}>Bonus Earned</Text>
            <Text style={styles.bonusAmount}>Rs. 400</Text>
            <View style={styles.rightContainer}>
      <View style={{display:'flex' , flexDirection:'row', alignItems:'center'}}>
      <Image
          source={require('../../assets/images/paybackLogo.png')}
          style={{
    height: 50,
    width: 50,
    marginRight: 10,
  }}
        />
        <Text style={{
    fontSize: 20,
    fontWeight: 'bold',
  }}>PayBack</Text>
      </View>
      
      </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical:0, paddingHorizontal:10
  },
  mainContent: {
    padding: 20,
    alignItems: 'center',
  },
  illustration: {
    width: 150,
    height: 150,
 
    alignSelf:'flex-end'
  },
  referTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FD9E28',
    marginBottom: 5,
  },
  referDescription: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  referralLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: '100%',
    marginBottom: 15,
  },
  referralInput: {
    flex: 1,
    fontSize: 14,
    color: 'black',
  },
  copyButton: {
    backgroundColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  copyText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  qrCodeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  qrCodeIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  qrCodeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  shareButton: {
    backgroundColor: '#25D366', // WhatsApp green color
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  shareButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  earningsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  earningsLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 10,
  },
  earningsBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FD9E28',
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  bonusTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 5,
  },
  bonusAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FD9E28',
  },
  paybackLogo: {
    width: 60,
    height: 20,
    marginTop: 10,
  },
});

export default ReferEarn;
