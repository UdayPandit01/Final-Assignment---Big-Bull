import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../components/dashBoard/Home';
import Nifty50 from '../components/dashBoard/Nifty50';
import DrawerNavigation from './DrawerNavigation';
import HomeIcon from '../assests/homeImages/homeIcon';
import HomeIconFaded from '../assests/homeImages/homeIconFaded';
import Nifty50_Icon from '../assests/homeImages/nifty50_Icon';
import Nifty50_IconFaded from '../assests/homeImages/nifty50_IconFaded';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const DashboardNavigation = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#908FEC'},
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <HomeIcon /> : <HomeIconFaded />,
        }}
      />
    
      <Tab.Screen
        name="Nifty50"
        component={Nifty50}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <Nifty50_Icon /> : <Nifty50_IconFaded />,
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default DashboardNavigation;
