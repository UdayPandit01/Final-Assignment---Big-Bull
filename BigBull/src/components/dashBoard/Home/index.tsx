import {View, Text, RefreshControl} from 'react-native';
import React from 'react';
import Index_two from './nifty50_Card';
import Index_one from './international_Market';
import HomeProfile from './homeProfile';
import Index_three from './currency_Index';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';
import ColorPalette from '../../../assests/ColorPalette';

const Home = () => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: ColorPalette.textWhite,
          flex: 1,
        }}>
        <HomeProfile />
        <Index_two />
        <Index_one />
        <Index_three />
      </View>
    </ScrollView>
  );
};

export default Home;
