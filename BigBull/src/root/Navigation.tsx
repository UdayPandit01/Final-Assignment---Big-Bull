import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splashscreen from '../components/onboarding/SplashScreen';
import Onboard from '../components/onboarding/Onboard';
import DashboardNavigation from './DashboardNavigation';

const Navigation = () => {
  const stack = createStackNavigator();
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1500);
  }, []);

  return (
    <NavigationContainer>
      <stack.Navigator>
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
          name="DashboardNavigation"
          component={DashboardNavigation}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
