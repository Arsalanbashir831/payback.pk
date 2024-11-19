import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CustomerDashboard from './CustomerDashboard';
import Notification from './Notifications';
import UserProfile from './UserProfile';
import SearchCategories from './SearchCategories';

const Tab = createBottomTabNavigator();

export const BottomTab = ({isBusiness=false}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,  // This hides the navigation bar on top of each tab
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Notifications':
              iconName = focused ? 'notifications' : 'notifications-outline';
              break;
            case 'UserProfile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Search':
              iconName = focused ? 'search' : 'search-outline';
              break;
            default:
              iconName = 'ellipse'; // default fallback icon
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home"  component={() => <CustomerDashboard isBusiness={isBusiness} />} options={{ title: 'Dashboard' }} />
      <Tab.Screen name="Search" component={SearchCategories} options={{ title: 'Search' }} />
      <Tab.Screen name="Notifications" component={Notification} options={{ title: 'Notifications' }} />
      <Tab.Screen name="UserProfile" component={UserProfile} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
};
