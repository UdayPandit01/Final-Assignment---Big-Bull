import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import styles from './style';

const API_URL =
  'https://api.moneycontrol.com/mcapi/v1/us-markets/getCurrencies';

const index_three = () => {
  const [data, setData] = useState();
  const currencyIndex = () => {
    axios
      .get(API_URL)
      .then(response => {
        const currencies = response.data.data;
        const currencyNames = currencies.map( (currency) => [currency.name," :  "+currency.open ]);
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
  
      <Text style={{color: 'white',fontSize:15,fontWeight:'400', alignSelf: 'center'}}>{item}</Text>
     
    </View>
  );

  return (
    <>
      <View style={{marginTop:25,}}>
        <Text style={{color:"black",marginLeft:15,fontSize:15,fontWeight:'700',marginTop:0}}>Currency Indices ></Text>
      </View>
      <View style={{height:130,marginTop:7}}>

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

export default index_three;
