import {View, Text, RefreshControl} from 'react-native';
import React from 'react';
import Index_two from './Nifty50_Card';
import Index_one from './International_Market';
import HomeProfile from './HomeProfile';
import Index_three from './Currency_Index';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.indexContainer}>
        <HomeProfile />
        <Index_two />
        <Index_one />
        <Index_three />
      </View>
    </ScrollView>
  );
};

export default Home;
