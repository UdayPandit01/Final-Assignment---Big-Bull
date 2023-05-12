import {View, Text, RefreshControl} from 'react-native';
import React from 'react';
import Index_two from './nifty50_Card';
import Index_one from './international_Market';
import HomeProfile from './homeProfile';
import Index_three from './currency_Index';
import styles from './style';

const Home = () => {
  // const [refreshing, setRefreshing] = React.useState(false);

  // let onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);
  // }, []);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <HomeProfile />
      <Index_two />
      <Index_one />
      <Index_three />
    </View>
  );
};

export default Home;
