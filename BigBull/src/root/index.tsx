import React from 'react';
import DashboardNavigation from './DashboardNavigation';
import {QueryClientProvider, QueryClient} from 'react-query';
import Navigation from './Navigation';

// const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

const index = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <Navigation /> */}
        {/* <Home/> */}
        <DashboardNavigation />
      </QueryClientProvider>
    </>
  );
};

export default index;
