import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import NseModule from '../../../NseModule';
import {NseData} from './nsedata';
import {useNavigation} from '@react-navigation/core';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import {BASE_URL_NSE, nifty50} from '../../../services';
import routes from '../../../assests/routes';
import ColorPalette from '../../../assests/ColorPalette';

const Nifty50_Card = () => {
  const navigation = useNavigation();

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
    // console.log('losinggggJAVADDffd ' + scanResult);
  };
  const callbackError = error => {
    console.log('errorlosinggggJAVADDffd' + error);
  };
  const getNse = async () => {
    try {
      await NseModule.getAPIResponse(
        BASE_URL_NSE + nifty50,
        callbackSuccess,
        callbackError,
      );
    } catch (error) {
      console.error('testf ' + error);
    } finally {
    }
  };

  return (
    <View style={styles.nifty50Card}>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('Nifty50');
          navigation.navigate(routes.dashboard.Nifty50.path);
        }}>
        <LinearGradient
          style={styles.gradient}
          colors={[ColorPalette.textBlue, ColorPalette.textPink]}>
          <View style={{margin: 10, marginTop: 15, alignItems: 'center'}}>
            {nseData && (
              <Text style={styles.nifty50HeadingText}>{nseData.name}</Text>
            )}
          </View>

          {nseData && (
            <Text style={styles.nifty50TimeStamp}>{nseData.timestamp}</Text>
          )}

          <View style={styles.nifty50PriceContainer}>
            {nseData && <Text style={styles.nifty50Price}>Price :</Text>}
            {nseData && (
              <Text style={styles.nifty50Last}>{nseData.metadata.last}</Text>
            )}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
export default Nifty50_Card;
