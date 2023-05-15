import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import NseModule from '../../../NseModule';
import {NseData} from '../Home/nsedata';
import Search_Icon from '../../../assests/nifty50_images/Search_Icon';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import Top50 from '../../dashBoard/Nifty50/Top50';
import LinearGradient from 'react-native-linear-gradient';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const MarketStatus = () => {
  // const navigator = useNavigation();
  const [nseData, setNseData] = useState<NseData>();
  useEffect(() => {
    {
      NseModule.onBridge('Init');
      setTimeout(() => {
        getNse();
      }, 1000);
    }
  }, []);

  const callbackSuccess = scanResult => {
    setNseData(JSON.parse(scanResult));
    console.log('losinggggJAVADDffd ' + scanResult);
  };
  const callbackError = error => {
    console.log('errorlosinggggJAVADDffd' + error);
  };
  const getNse = async () => {
    try {
      await NseModule.getAPIResponse(
        'https://www.nseindia.com/api/marketStatus',
        callbackSuccess,
        callbackError,
      );
    } catch (error) {
      console.error('testf ' + error);
    } finally {
    }
  };

  console.log('nseData');
  console.log(nseData);
  console.log('marketdata');
  // for (let i = 0; i < nseData?.marketState.length; i++) {
  //   console.log(nseData?.marketState[i].market);
  // }

  Object.keys(nseData?.marketState || {}).map(key => {
    console.log(nseData?.marketState[key].market);
  });

  return (
    <>
      {/* Other JSX code */}
      {nseData?.marketState && (
        <FlatList
          data={nseData?.marketState}
          // keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.marketItem}>
              <Text style={styles.marketText}>{item.index}</Text>
              <Text style={styles.marketText}>{item.marketStatus}</Text>
              {/* Render other properties as needed */}
            </View>
          )}
        />
      )}
    </>
  );
};
export default MarketStatus;

const styles = StyleSheet.create({
  nifty50Card: {
    // borderWidth: 1,
    borderRadius: 25,
    margin: 30,
    marginTop: 30,
    height: 150,
    // backgroundColor: '#40BC9A',
    // backgroundColor: '#D8D8D8',

    elevation: 20,
    shadowColor: 'black',
    //   shadowOffset:{width:-2,height:4},
    //   shadowRadius:3,
  },
  gradient: {
    height: 160,
    borderRadius: 25,
  },
});

// import { View, Text } from 'react-native'
// import React from 'react'

// const MarketStatus = () => {
//   return (
//     <View>
//       <Text>index</Text>
//     </View>
//   )
// }

// export default MarketStatus
