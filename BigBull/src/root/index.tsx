import React from 'react';
import Navigation from './Navigation';
import Home from '../components/dashBoard/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const index = () => {
  return (
    <>
      <Navigation />
      {/* <Home/> */}
      
    </>
  );
};

export default index;
