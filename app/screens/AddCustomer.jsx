import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import TopHeader from '../components/common/Header';

const AddCustomer = () => {
  const [selectedFilter, setSelectedFilter] = useState('id');  // Default to 'id'

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <View style={styles.container}>
      <TopHeader title="PayBack" isGoBack={true} />

      <Text style={styles.importText}>Import Customer list</Text>
      
      <TextInput style={styles.searchBar} placeholder="Search" />

      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={[styles.filterOption, selectedFilter === 'id' ? styles.selectedFilter : null]}
          onPress={() => handleFilterChange('id')}
        >
          <Text>Customer ID</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterOption, selectedFilter === 'name' ? styles.selectedFilter : null]}
          onPress={() => handleFilterChange('name')}
        >
          <Text>Customer Name</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.customerList}>
        {Array.from({ length: 4 }, (_, i) => (
          <View key={i} style={styles.customerItem}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>{i + 1}</Text>
            </View>
            <Text style={styles.name}>Usama Shakeel</Text>
            <Text style={styles.amount}>Rs. 2,700</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  importText: {
    textAlign: 'right',
    marginVertical: 10,
    marginRight: 15,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  filterOption: {
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },
  selectedFilter: {
    backgroundColor: '#FFEB9C', // A yellow background for selected state
  },
  customerList: {
    paddingHorizontal: 10,
  },
  customerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFEB9C',
    borderRadius: 20,
    padding: 15,
  },
  circle: {
    backgroundColor: '#FFD700',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  circleText: {
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
    flex: 1,
  },
  amount: {
    fontWeight: 'bold',
  }
});

export default AddCustomer;
