import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Holiday from '../components/dashBoard/Holiday';
import Home from '../components/dashBoard/Home';
import DashboardNavigation from './DashboardNavigation';
import Nifty50 from '../components/dashBoard/Nifty50';
import {Text} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    // <Drawer.Navigation>
    <Drawer.Navigator drawerContent={<Text>hello</Text>}>
      <Drawer.Screen
        name="DashboardNavigation"
        component={DashboardNavigation}
      />
      {/* <Drawer.Screen name="" component={DashboardNavigation} /> */}
      {/* <Drawer.Screen name="Nifty50" component={Nifty50} /> */}
    </Drawer.Navigator>
    // </Drawer.Navigation>
  );
};

export default DrawerNavigation;
