import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
// import Home from '../components/dashBoard/Home';
// import Nifty50 from '../components/dashBoard/Nifty50';
import Home from '../components/dashBoard/Home';
import Nifty50 from '../components/dashBoard/Nifty50';

const Tab = createBottomTabNavigator();

const DashboardNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Tab.Screen
          name="Home"
          component={Home}
          //   options={{headerShown: false}}
        />
        <Tab.Screen
          name="Nifty50"
          component={Nifty50}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default DashboardNavigation;
