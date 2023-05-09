import React from 'react';
import DashboardNavigation from './DashboardNavigation';
import {QueryClientProvider, QueryClient} from 'react-query';
import Navigation from './Navigation';
import Index_one from '../components/dashBoard/Home/index_one';

// const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

const index = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navigation />
        {/* <Home/> */}
        {/* <DashboardNavigation /> */}
        {/* <Index_one /> */}
      </QueryClientProvider>
    </>
  );
};

export default index;
