import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopHeader from '../components/common/Header'; // Assuming you have TopHeader component


const { width } = Dimensions.get('window');
const FRAME_SIZE = width * 0.8;

const QRscan = () => {
 

  return (
    <SafeAreaView style={styles.container}>
      <TopHeader title="QR SCAN" />

      {/* Camera View */}
      <View style={styles.cameraContainer}>
        <View style={styles.scannerFrameContainer}>
          <View style={styles.scannerFrame}>
            <Image 
              style={styles.qrCode} 
              source={{uri:'https://up.yimg.com/ib/th?id=OIP.jVV7uAd_hvvUwBi2MTPrbwHaHW&pid=Api&rs=1&c=1&qlt=95&w=125&h=124'}} 
              resizeMode="contain"
            />
            <Text style={styles.scanText}>Scan Me</Text>
          </View>
        </View>
      </View>

      {/* Customer ID Display */}
      <View style={styles.customerIdContainer}>
        <Text style={styles.customerIdLabel}>Customer ID</Text>
        <Text style={styles.customerId}>98765432909907</Text>
      </View>

      {/* Input / Manual Entry Button */}
      {/* <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enter ID</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    flex: 1,
  },
  scannerFrameContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scannerFrame: {
    width: FRAME_SIZE,
    height: FRAME_SIZE,
    borderWidth: 2,
    borderColor: '#FFB800',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  qrCode: {
    width: '100%',
    height: '100%',
  },
  scanText: {
    color: '#FFB800',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: -25,
  },
  customerIdContainer: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  customerIdLabel: {
    color: '#FFB800',
    fontSize: 16,
    fontWeight: 'bold',
  },
  customerId: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QRscan;
