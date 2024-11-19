import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Avatar = ({ shortName }) => {
  return (
    <View style={styles.avatarContainer}>
      <Text style={styles.avatarText}>{shortName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    width: 100,           // Adjust the size of the circle
    height: 100,
    borderRadius: 50,      // This makes the shape circular
    backgroundColor: '#F48FB1', // Pink background color similar to the one you provided
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,        // Black border similar to the image
    borderColor: 'black',
  },
  avatarText: {
    color: 'white',
    fontSize: 30,         // Adjust font size based on how large you want the initials to appear
    fontWeight: 'bold',
    letterSpacing: 2,     // Adjust spacing between characters
  },
});

export default Avatar;
