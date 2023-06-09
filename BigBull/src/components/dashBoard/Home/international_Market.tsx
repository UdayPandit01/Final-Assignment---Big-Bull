import {
  View,
  Text,
  FlatList,
  Button,
  Dimensions,
  Stylesheet,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import React, {useState} from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';
import styles from './style';
import ColorPalette from '../../../assests/ColorPalette';
import string from '../../../assests/string';
import {BASE_URL_PRICE, marketPrice} from '../../../services';

const fetchData = async () => {
  const response = await axios.get(BASE_URL_PRICE + marketPrice);

  return response.data.dataList;
};

const International_Market = () => {
  const {data, error, isLoading} = useQuery('nse', fetchData);

  if (isLoading) {
    return (
      <Text style={{color: ColorPalette.textBlack}}>
        Please Wait, Fetching Data...
      </Text>
    );
  }
  if (error) {
    return <Text style={{color: ColorPalette.textBlack}}>{error.message}</Text>;
  }


  return (
    <View style={styles.crouselContainer}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.currencyIndicesText}>
          {string.internationalMarketText}
        </Text>
      </View>

      <Carousel
        styles={styles.Crousel}
        data={data}
        renderItem={({item}) => (
          <View style={styles.renderItemContainer}>
            <Text style={styles.renderItemText}>
              {item.heading.replace('_', ' ')}
            </Text>

            <View style={styles.showDataConatainer}>
              <Text style={styles.renderItemSubText}>{item.data[0][1]}</Text>
              <Text style={styles.renderItemSubText}>{item.data[0][2]}</Text>
            </View>

            <View style={styles.showDataConatainer}>
              <Text style={styles.renderItemSubText}>{item.data[1][1]}</Text>
              <Text style={styles.renderItemSubText}>{item.data[1][2]}</Text>
            </View>
          </View>
        )}
        sliderWidth={362}
        itemWidth={275}
        loop={true}
      />
    </View>
  );
};

export default International_Market;
