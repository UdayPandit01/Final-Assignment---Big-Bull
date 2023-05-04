import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Home from '../components/dashBoard/Home';
import {createStackNavigator} from '@react-navigation/stack';
import Splashscreen from '../components/onboarding/SplashScreen';
import Onboard from '../components/onboarding/Onboard';
import DashboardNavigation from './DashboardNavigation';
import DrawerNavigation from './DrawerNavigation';

const Navigation = () => {
  // const navigator = useNavigation();
  const stack = createStackNavigator();
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1500);
  }, []);

  // useEffect(() => {
  //   const isLoggedIn = true;

  //   if (isLoggedIn) {
  //     navigator.navigate('DashboardNavigation');
  //   } else {
  //     navigator.navigate('Onboard');
  //   }
  // }, [navigate]);

  return (
    <NavigationContainer>
      <stack.Navigator >
        {showSplash ? (
          <stack.Screen
            name="splash"
            component={Splashscreen}
            options={{headerShown: false}}
          />
        ) : null}
        <stack.Screen
          name="Onboarding"
          component={Onboard}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{headerShown: true}}
        />
        {/* <stack.Screen
          name="DashboardNavigation"
          component={DrawerNavigation}
          options={{headerShown: true}}
        /> */}
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
