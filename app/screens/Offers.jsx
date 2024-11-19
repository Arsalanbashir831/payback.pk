import { View, Text, SafeAreaView, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import TopHeader from '../components/common/Header'; // Assuming you have a TopHeader component
import Avatar from '../components/common/Avatar';

const offersData = [
  {
    id: '1',
    cashback: '10%',
    availability: 'Online',
    expiry: '30 September 2024',
    minSpend: 'Rs. 1000',
    capped: 'Rs. 4000',
    customerType: 'New',
    redemption: 'Per User: 1',
  },
  {
    id: '2',
    cashback: '10%',
    availability: 'Allama Iqbal Town',
    expiry: '30 December 2024',
    minSpend: 'Rs. 1000',
    capped: 'Rs. 4000',
    customerType: 'Existing',
    redemption: 'No Limit',
  },
];

const Offers = () => {
  // Render each offer in the list
  const renderOffer = ({ item, index }) => (
    <View style={styles.offerCard}>
      <View style={styles.offerHeader}>
        <Text style={styles.offerNumber}>{index + 1}</Text>
      </View>
      <View style={styles.offerDetails}>
        <Text style={styles.offerDetailText}>CashBack: {item.cashback}</Text>
        <Text style={styles.offerDetailText}>Available At: {item.availability}</Text>
        <Text style={styles.offerDetailText}>Expiry: {item.expiry}</Text>
        <Text style={styles.offerDetailText}>Min. Spend: {item.minSpend}</Text>
        <Text style={styles.offerDetailText}>Cashback Capped: {item.capped}</Text>
        <Text style={styles.offerDetailText}>Customer Type: {item.customerType}</Text>
        <Text style={styles.offerDetailText}>Redemption {item.redemption}</Text>
        <Text style={styles.termsText}>Terms & Conditions Applied</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header */}
      <TopHeader  isGoBack={true} />

      {/* Profile Section */}
      <View style={styles.profileSection}>
      <Avatar shortName={"PB"} />
        {/* <Image
          source={require('../../assets/images/brandLogo.png')} // Replace with actual brand logo
          style={styles.profileImage}
        /> */}
        <Text style={styles.brandName}>Pink By B</Text>
        <View style={styles.headerRow}>
          <Text style={styles.promoText}>Offers & Promotions</Text>
         
        </View>
        <TouchableOpacity style={{alignSelf:'flex-end'}}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
      </View>

      {/* Offers List */}
      <FlatList
        data={offersData}
        renderItem={renderOffer}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.offersList}
      />
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
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    gap:10
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  brandName: {
    fontSize: 20,
    fontWeight: 'light',
   
    marginBottom: 5,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    width: '90%',
    paddingTop: 10,
  },
  promoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FD9E28',
    
  },
  seeAllText: {
    fontSize: 16,
    color: '#FD9E28',
  },
  offersList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  offerCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  offerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  offerNumber: {
    backgroundColor: '#FD9E28',
    color: 'white',
    borderRadius: 20,
    width: 30,
    height: 30,
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  offerDetails: {
    flex: 1,
  },
  offerDetailText: {
    fontSize: 14,
    marginBottom: 4,
  },
  termsText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});

export default Offers;
