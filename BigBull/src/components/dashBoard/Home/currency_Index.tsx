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
        // console.log("hey",currencies)
        const currencyNames = currencies.map( (currency) => [currency.name," :  "+currency.open ]);
        setData(currencyNames);
        // console.log(currencyNames);
        // console.log(currencyOpen);
        // console.log('data');
        // console.log(data);
      })
      //   console.log(response.data.name);
      // })
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
      <View style={{marginTop:30}}>
        <Text style={{color:"black",marginLeft:15,fontSize:15,fontWeight:'700'}}>Currency Indices ></Text>
      </View>
      <Carousel
        styles={styles.Crousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={350}
        itemWidth={155}
        loop={true}
      
      />
    </>
  );
};

export default index_three;

// const styles = StyleSheet.create({

//   renderItemContainer_three: {
//     height: 58,
//     marginTop: 15,
//     // marginBottom:70,
//     backgroundColor: '#4B0DCF',
//     // backgroundColor:'#908FEC',
//     borderRadius: 17,
//     justifyContent:'center',
//     alignItems:'center',
//     elevation:2,
//     shadowColor:'#908FEC',

//   },
// });

