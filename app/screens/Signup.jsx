import { View, Text, Image , TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import CustomTextInputField from '../components/common/CustomTextInputField';
import CustomSelectField from '../components/common/CustomSelectField'
const { width, height } = Dimensions.get('window')

const Signup = ({isBusiness=false}) => {
    const [selected, setSelected] = useState(null);

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ];
    
    return (
        <SafeAreaView>
            <View style={{display:'flex' , justifyContent:'space-between' , alignItems:'center' , flexDirection:'row' , paddingHorizontal:10}}>
                <TouchableOpacity onPress={()=>router.back()} style={{ backgroundColor: '#fdba28', padding:5 , borderRadius:20 }}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <View style={{ display:'flex' , flexDirection:'row' , alignItems:'center' , gap:10}}>
                    <Image source={require('../../assets/images/paybackLogo.png')} style={{height:50 , width:50}} />
                    <Text style={{fontSize:20 , fontWeight:'bold'}}>PayBack</Text>
                </View>
               
            </View>
            <View style={{ alignSelf:'center', marginVertical:50 , display:'flex' , gap:20}}>
                <Text style={{fontSize:25 , fontWeight:'bold' , width:200 , textAlign:'center'}}>{isBusiness?'Add Business Information': 'Create new Account'} </Text>
                <Text style={{fontSize:15, textAlign:'center'}}>Already Registered? Log in here.</Text>
            </View>
            <View style={{width:'80%' , alignSelf:'center'}}>
            {!isBusiness?<>
                <CustomTextInputField type='text'  label="PHONE NUMBER" placeholder="03000 0000" />
            <CustomTextInputField type='text'   label="EMAIL" placeholder="welcome@payback.com" />
            <CustomTextInputField type='text'  label="PASSWORD" placeholder="*****"  secureTextEntry/>
            <CustomTextInputField type='dob'  label="DATE OF BIRTH" placeholder="Select" />

           
            </>:<>
            <CustomTextInputField type='text'  label="Business Name" placeholder="PayBack" />
            <CustomSelectField
        label="Category"
        items={options}
        selectedValue={selected}
        onSelect={setSelected}
      />
            <CustomTextInputField type='text'  label="Your Name" placeholder="Usama" />
            <CustomTextInputField type='text'  label="PHONE NUMBER" placeholder="03000 0000" />
            <CustomTextInputField type='text'  label="PASSWORD" placeholder="*****"  secureTextEntry/>
            </>}
           
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Signup</Text>
            </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'#fdba28' , height:100 , marginTop:20 , borderRadius:25}}>

            </View>
        </SafeAreaView>
    )

    
}
const styles = StyleSheet.create({
   
  
    loginButton: {
      backgroundColor: '#333',
      padding: height * 0.015,
      borderRadius: 10,
      marginTop: height * 0.02,
    },
    loginButtonText: {
      color: '#fdba28',
      textAlign: 'center',
      fontSize: width * 0.045,
      fontWeight: 'bold',
    },
   
  })
export default Signup