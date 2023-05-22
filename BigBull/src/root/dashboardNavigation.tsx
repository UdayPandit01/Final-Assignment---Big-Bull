import {View, Text, StatusBar} from 'react-native';
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
import routes from '../assests/routes';

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
        name={routes.dashboard.MarketStatus.path}
        component={MarketStatus}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <MarkeStatus_Icon /> : <MarkeStatus_IconFaded />,
        }}
      />

      <Tab.Screen
        name={routes.dashboard.Home.path}
        component={Home}
        options={{
          // headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <HomeIcon /> : <HomeIconFaded />,
        }}
      />

      <Tab.Screen
        name={routes.dashboard.Nifty50.path}
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
