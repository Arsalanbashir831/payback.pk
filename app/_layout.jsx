import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import RequestCashback from './screens/RequestCashback'
import QRScan from './screens/QRscan'
import ReferEarn from './screens/ReferEarn'
import Offers from './screens/Offers'
import OnBoarding from './screens/OnBoarding'
import AddCustomer from './screens/AddCustomer'
import Invites from './screens/Invites'
import {BottomTab} from './components/tabs/index'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <>

      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen 
          name="OnBoarding" 
          component={OnBoarding} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
  name="BusinessLogin"
  options={{ headerShown: false }}
  component={() => <Login isBusiness={true} />}
/>
        <Stack.Screen 
  name="BusinessSignup"
  options={{ headerShown: false }}
  component={() => <Signup isBusiness={true} />}
/>
        <Stack.Screen 
          name="Signup" 
          component={Signup} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CustomerDashboard" 
          component={BottomTab} 
          options={{ headerShown: false }}
        />
       

        <Stack.Screen 
  name="BusinessDashboard"
  options={{ headerShown: false }}
  component={() => <BottomTab isBusiness={true} />}
/>
        
        <Stack.Screen 
          name="RequestCashback" 
          component={RequestCashback} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ReferEarn" 
          component={ReferEarn} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Offers" 
          component={Offers} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="QRscan" 
          component={QRScan} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="AddCustomer" 
          component={AddCustomer} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Invites" 
          component={Invites} 
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
  </>
  
  );
}

export default App;
