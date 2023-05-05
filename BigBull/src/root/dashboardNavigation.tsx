import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../components/dashBoard/Home';
import Nifty50 from '../components/dashBoard/Nifty50';
import DrawerNavigation from './DrawerNavigation';

const Tab = createBottomTabNavigator();

const DashboardNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#908FEC'},
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}>
        <Tab.Screen name="Home" component={Home} />
        {/* <Tab.Screen name="Drawer" component={DrawerNavigation} /> */}
        <Tab.Screen
          // screenOptions={{headerTitleAlign: 'center'}}
          name="Nifty50"
          component={Nifty50}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default DashboardNavigation;
