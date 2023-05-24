import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import styles from './style';
import string from '../../../assests/string';
import {BASE_URL_CURRENCY, getCurrency} from '../../../services';

const API_URL = BASE_URL_CURRENCY + getCurrency;

const Currency_Index = () => {
  const [data, setData] = useState();
  const currencyIndex = () => {
    axios
      .get(API_URL)
      .then(response => {
        const currencies = response.data.data;
        const currencyNames = currencies.map(currency => [
          currency.name,
          ' :  ' + currency.open,
        ]);
        setData(currencyNames);
      })

      .catch(error => {
        console.error(error.message);
      });
  };
  useEffect(() => {
    currencyIndex();
  }, []);
  const renderItem = ({item}) => (
    <View style={styles.renderItemContainer_three}>
      <Text style={styles.currencyRenderItemText}>{item}</Text>
    </View>
  );

  return (
    <>
      <View style={{marginTop: 25}}>
        <Text style={styles.currencyIndicesText}>{string.currencyText}</Text>
      </View>
      <View style={{height: 130, marginTop: 7}}>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={365}
          itemWidth={155}
          loop={true}
        />
      </View>
    </>
  );
};

export default Currency_Index;
