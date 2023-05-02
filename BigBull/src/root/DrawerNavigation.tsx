import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Holiday from '../components/dashBoard/Holiday'
import Home from '../components/dashBoard/Home';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  // return (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Holiday" component={Holiday} />
    </Drawer.Navigator>
  </NavigationContainer>;
  // );
};

export default DrawerNavigation;
