import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Assuming you are using React Navigation

const TopHeader = ({ title, isGoBack }) => {
  const navigation = useNavigation(); // Hook to access the navigation

  return (
    <View style={styles.headerContainer}>
      {/* Show back arrow if isGoBack is true */}
     <View style={{display:'flex' , flexDirection:"row" , alignItems:'center' ,gap:10} }>
     {isGoBack && (
        <TouchableOpacity style={{backgroundColor:'#FFE101' , borderRadius:100, padding:5}} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      )}
      
      {/* Title */}
      <Text style={styles.title}>{title}</Text>
     </View>
    
      
      {/* Right side content (Logo + PayBack text) */}
      <View style={styles.rightContainer}>
        <Image
          source={require('../../../assets/images/paybackLogo.png')}
          style={styles.logo}
        />
        <Text style={styles.paybackText}>PayBack</Text>
      </View>
    </View>
  );
};

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  title: {
    color: '#fdba28',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  paybackText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
};

export default TopHeader;
