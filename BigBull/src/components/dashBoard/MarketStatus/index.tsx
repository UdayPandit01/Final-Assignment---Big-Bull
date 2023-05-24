import {View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import NseModule from '../../../NseModule';
import {NseData} from '../Home/nsedata';
import Lottie from 'lottie-react-native';
import styles from './style';
import ColorPalette from '../../../assests/ColorPalette';
import { BASE_URL_NSE, marketStatus } from '../../../services';
import { ScrollView } from 'react-native-gesture-handler';



const MarketStatus = () => {
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
        BASE_URL_NSE+marketStatus,
        callbackSuccess,
        callbackError,
      );
    } catch (error) {
      console.error('testf ' + error);
    } finally {
    }
  };

  // console.log('nseData');
  // console.log(nseData);
  // console.log('marketdata');

  // Object.keys(nseData?.marketState || {}).map(key => {
  //   console.log(nseData?.marketState[key].market);
  // });

  return (
    <>
    <ScrollView>
      <View
        style={{
        height: 285,
          backgroundColor: ColorPalette.textPurple,
        }}>
        <Lottie
          style={[styles.Logo]}
          source={require('../../../assests/lottie/market_status_logo.json')}
          autoPlay
          loop
        />
      </View>

      <View style={{backgroundColor: ColorPalette.textPurple}}>

        <View
          style={styles.inbetweenContainer}
        />
        <View style={{backgroundColor:ColorPalette.textWhite}}>
            <Text style={styles.scrollDownText}>Scroll Down For More >></Text>
        </View>
      </View>

      {nseData?.marketState && (
        <FlatList
          data={nseData?.marketState}

          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: ColorPalette.textWhite,
              }}>
              <Text style={{color: ColorPalette.textBlack}} />

              <View style={styles.marketItemContainer}>
                <Text style={styles.marketText}>
                  {item.market.toUpperCase()}
                </Text>

                <View style={styles.marketItemSubContainer}>
                  <View style={styles.tradeDateContainer}>
                    <Text style={styles.tradeText}>{item.tradeDate}</Text>
                  </View>
                  <Text style={styles.marketStatusText}>
                    {item.marketStatusMessage.replace('Normal',"")}
                  </Text>
                </View>
              </View>
            </View>
          )}
          />
          )}
          </ScrollView>
    </>
  );
};
export default MarketStatus;
