import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splashscreen from '../components/onboarding/SplashScreen';
import Onboard from '../components/onboarding/Onboard';
import DashboardNavigation from './DashboardNavigation';
import routes from '../assests/routes';

const Navigation = () => {
  const stack = createStackNavigator();
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <stack.Navigator>
        {showSplash ? (
          <stack.Screen
            name={routes.SplashScreen.SplashScreen.path}
            component={Splashscreen}
            options={{headerShown: false}}
          />
        ) : null}
        <stack.Screen
          name={routes.onboarding.oboard.path}
          component={Onboard}
          options={{headerShown: false}}
        />
        <stack.Screen
          name={routes.root.path}
          component={DashboardNavigation}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
