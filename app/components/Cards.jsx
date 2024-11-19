import { StyleSheet, View, Text,Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';  // Import icons

const { width } = Dimensions.get('window'); // Get the width of the device screen

const cardWidth = width * 0.42; // Adjust width to be 42% of screen width to fit two cards per row with some space

// CustomerCount.js
export const CustomerCount = ({ count, change }) => (
    <View style={styles.card}>
      <MaterialCommunityIcons name="account-group" size={40} color="orange" />
      <Text style={styles.title}>Customer Count</Text>
      <Text style={styles.value}>{count}</Text>
      <Text style={[styles.change, { color: change > 0 ? 'green' : 'red' }]}>
        {change > 0 ? `↑ ${change} New This Month` : `↓ ${Math.abs(change)} Down This Month`}
      </Text>
    </View>
  );
  
  // RedemptionRate.js
  export const RedemptionRate = ({ rate, change }) => (
    <View style={styles.card}>
      <MaterialCommunityIcons name="chart-pie" size={40} color="orange" />
      <Text style={styles.title}>Redemption Rate</Text>
      <Text style={styles.value}>{`${rate}%`}</Text>
      <Text style={[styles.change, { color: change < 0 ? 'red' : 'green' }]}>
        {change < 0 ? `↓ ${Math.abs(change)}% Down This Week` : `↑ ${change}% Up This Week`}
      </Text>
    </View>
  );
  
  // AverageCashback.js
  export const AverageCashback = ({ amount, change }) => (
    <View style={styles.card}>
      <MaterialCommunityIcons name="currency-usd" size={40} color="orange" />
      <Text style={styles.title}>Average CashBack</Text>
      <Text style={styles.value}>{`Rs. ${amount}`}</Text>
      <Text style={[styles.change, { color: change > 0 ? 'green' : 'red' }]}>
        {change > 0 ? `↑ ${change}% Up In Last 15 days` : `↓ ${Math.abs(change)}% Down In Last 15 days`}
      </Text>
    </View>
  );
  
  // CashbackExpiring.js
  export const CashbackExpiring = ({ amount, change }) => (
    <View style={styles.card}>
      <MaterialCommunityIcons name="timer-sand" size={40} color="orange" />
      <Text style={styles.title}>CashBack Expiring</Text>
      <Text style={styles.value}>{`Rs. ${amount}`}</Text>
      <Text style={[styles.change, { color: change > 0 ? 'green' : 'red' }]}>
        {change > 0 ? `↑ ${change}% Up By Last Week` : `↓ ${Math.abs(change)}% Down By Last Week`}
      </Text>
    </View>
  );
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 15, // Reduced padding
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center', // Center content vertically and horizontally
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: cardWidth, // Use dynamic width for responsiveness
    },
    title: {
      fontSize: 14, // Slightly smaller font size
      fontWeight: 'bold',
      marginBottom: 5,
    },
    value: {
      fontSize: 20, // Slightly smaller font size
      fontWeight: 'bold',
    },
    change: {
      fontSize: 12, // Slightly smaller font size
      marginTop: 5, // Add a little margin top for spacing
    }
  });
