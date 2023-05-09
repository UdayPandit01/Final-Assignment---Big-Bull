import {View, Text} from 'react-native';
import React from 'react';
import Index_two from './index_two';
import Index_one from './index_one';
import HomeProfile from './homeProfile';
import Index_three from './index_three';

const Home = () => {
  return (
    <View>
      <HomeProfile />
      <Index_two />
      <Index_one />
      <Index_three />
    </View>
  );
};

export default Home;
