import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Holiday from '../components/dashBoard/Holiday';
import Home from '../components/dashBoard/Home';
import DashboardNavigation from './DashboardNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="DashboardNavigation"
        component={DashboardNavigation}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
