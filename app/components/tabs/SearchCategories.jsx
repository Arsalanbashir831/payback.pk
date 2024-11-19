import { View, Text, SafeAreaView, TextInput, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import TopHeader from '../common/Header';
import { MaterialIcons } from '@expo/vector-icons';

// Sample data for the categories grid
const categories = [
  { id: '1', title: 'Stores & Grocery', image: require('../../../assets/images/resturant_pic.jpeg') },
  { id: '2', title: 'Restaurants & Eateries', image: require('../../../assets/images/resturant_pic.jpeg') },
  { id: '3', title: 'Fashion & Accessories', image: require('../../../assets/images/resturant_pic.jpeg') },
  { id: '4', title: 'Beauty & Personal Care', image: require('../../../assets/images/resturant_pic.jpeg') },
  { id: '5', title: 'Mobile & Electronics', image: require('../../../assets/images/resturant_pic.jpeg') },
  { id: '6', title: 'Health & Fitness', image:require('../../../assets/images/resturant_pic.jpeg') },
  { id: '7', title: 'Gifts & Occasions', image: require('../../../assets/images/resturant_pic.jpeg') },
  { id: '8', title: 'Hotels & Cinema', image: require('../../../assets/images/resturant_pic.jpeg') },
  { id: '9', title: 'Baby Clothes & Products', image: require('../../../assets/images/resturant_pic.jpeg') },
];

const SearchCategories = () => {
  // Render each category
  const renderCategory = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopHeader title="Search" isGoBack={true} />

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <MaterialIcons name="search" size={24} color="black" />
        <TextInput style={styles.searchInput} placeholder="Search..." />
      </View>

      {/* Categories Title */}
      <Text style={styles.categoriesTitle}>Categories</Text>

      {/* Categories Grid */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={3} // Grid with 3 columns
        contentContainerStyle={styles.gridContainer}
      />
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical:16
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  categoriesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fdba28',
    marginBottom: 16,
  },
  gridContainer: {
    paddingBottom: 20,
   marginHorizontal:'auto'
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    gap:5
    
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 12,
    width:80,
    fontWeight: 'bold',
  },
});

export default SearchCategories;
