import React from 'react';
import DashboardNavigation from './DashboardNavigation';
import {QueryClientProvider, QueryClient} from 'react-query';
import Navigation from './Navigation';
import {StatusBar} from 'react-native';

// const Tab = createBottomTabNavigator();

const queryClient = new QueryClient();

const index = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="white"
          translucent={false}
        />

        <Navigation />
        
      </QueryClientProvider>
    </>
  );
};

export default index;
