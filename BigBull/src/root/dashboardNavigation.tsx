import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../components/dashBoard/Home';
import Nifty50 from '../components/dashBoard/Nifty50';
import HomeIcon from '../assests/homeImages/homeIcon';
import HomeIconFaded from '../assests/homeImages/homeIconFaded';
import Nifty50_Icon from '../assests/homeImages/nifty50_Icon';
import Nifty50_IconFaded from '../assests/homeImages/nifty50_IconFaded';
import MarketStatus from '../components/dashBoard/MarketStatus';
import MarkeStatus_IconFaded from '../assests/homeImages/markeStatus_IconFaded';
import MarkeStatus_Icon from '../assests/homeImages/markeStatus_Icon';

const Tab = createBottomTabNavigator();

const DashboardNavigation = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          height: 55,
          borderTopWidth: 0,
        },
        headerStyle: {backgroundColor: '#908FEC'},
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="MarketStatus"
        component={MarketStatus}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <MarkeStatus_Icon /> : <MarkeStatus_IconFaded />,
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <HomeIcon /> : <HomeIconFaded />,
        }}
      />

      <Tab.Screen
        name="Nifty50"
        component={Nifty50}
        options={{
          // headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <Nifty50_Icon /> : <Nifty50_IconFaded />,
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default DashboardNavigation;
