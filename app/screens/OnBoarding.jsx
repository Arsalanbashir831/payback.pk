import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const OnBoarding = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Payback!</Text>
      <Text style={styles.subheading}>Choose your account type:</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('BusinessLogin')}>
          <Text style={styles.buttonText}>Business Account</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.buttonStyle} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Customer Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4', // Light grey background
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subheading: {
    fontSize: 18,
    color: '#555',
    marginVertical: 20, // Spacing above and below the subheading
  },
  buttonContainer: {
    width: '80%', // 80% of screen width
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#fcb103', // Bootstrap primary blue
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginVertical: 10, // Spacing between buttons
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }
});

export default OnBoarding;
