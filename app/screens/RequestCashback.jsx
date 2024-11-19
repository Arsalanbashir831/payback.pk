import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import TopHeader from '../components/common/Header'; // Assuming you have TopHeader component

const RequestCashback = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header */}
      <TopHeader isGoBack={true} />
<Text style={{fontSize:20 , textAlign:'center' , fontWeight:'bold' , color:'#FE9900'}}>CashBack Request</Text>
      {/* Form Inputs */}
      <View style={styles.formContainer}>
        {/* Select Shop */}
        <View style={styles.inputContainer}>
          <TextInput placeholder="Select Shop*" style={styles.input} />
          <MaterialIcons name="arrow-drop-down" size={24} color="black" style={styles.icon} />
        </View>

        {/* Date of Invoice */}
        <View style={styles.inputContainer}>
          <TextInput placeholder="Date of Invoice*" style={styles.input} />
          <FontAwesome name="calendar" size={20} color="black" style={styles.icon} />
        </View>

        {/* Invoice No */}
        <View style={styles.inputContainer}>
          <TextInput placeholder="Invoice No.*" style={styles.input} />
        </View>

        {/* Add Invoice Picture */}
        <View style={styles.inputContainer}>
          <TextInput placeholder="Add Invoice Picture" style={styles.input} />
          <FontAwesome name="camera" size={20} color="black" style={styles.icon} />
        </View>

        {/* Comment Section */}
        <View style={styles.commentContainer}>
          <TextInput
            placeholder="Comment"
            multiline={true}
            numberOfLines={4}
            style={styles.commentInput}
          />
          <FontAwesome name="comment" size={20} color="black" style={styles.commentIcon} />
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Send Request</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical:20,
    paddingHorizontal:10
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center', // Center form vertically
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  icon: {
    marginLeft: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  commentInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    textAlignVertical: 'top',
  },
  commentIcon: {
    marginLeft: 10,
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: '#FD9E28',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 30,
  },
  submitButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RequestCashback;
