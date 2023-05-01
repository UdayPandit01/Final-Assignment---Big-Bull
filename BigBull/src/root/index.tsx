import React from 'react';
import Navigation from './Navigation';
import Home from '../components/dashBoard/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardNavigation from './DashboardNavigation';

const Tab = createBottomTabNavigator();

const index = () => {
  return (
    <>
      {/* <Navigation /> */}
      {/* <Home/> */}
      <DashboardNavigation/>
      
    </>
  );
};

export default index;
