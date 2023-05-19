import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import NseModule from '../../../NseModule';
import {NseData} from './nsedata';
import {useNavigation} from '@react-navigation/core';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import ColorConstants from '../../../assests/ColorPalette';
import fonts from '../../../assests/fonts/Fira_Sans';

const Index_two = () => {
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
        'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY 50',
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
          navigation.navigate('Nifty50');
        }}>
        <LinearGradient style={styles.gradient} colors={['#4B0DCF', '#DD7BC2']}>
          <View style={{margin: 10, marginTop: 15, alignItems: 'center'}}>
            {nseData && (
              <Text style={{color: 'white', fontSize: 25, fontWeight: '800',fontFamily:fonts.BOLD}}>
                {nseData.name}
              </Text>
            )}
          </View>

          {nseData && (
            <Text
              style={{
                color: ColorConstants.textWhite,
                alignSelf: 'center',
                fontSize: 18,
                fontWeight: '500',
                marginTop: 15,
              }}>
              {nseData.timestamp}
            </Text>
          )}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 35,
              marginTop: 20,
              borderRadius: 20,
              backgroundColor: ColorConstants.textWhite,
              elevation: 8,
              shadowColor: ColorConstants.textBlack,
              height: 25,
            }}>
            {nseData && (
              <Text
                style={{
                  color: ColorConstants.textBlack,
                  fontSize: 18,
                  fontWeight: '400',
                  marginLeft: 50,
                }}>
                Price :
              </Text>
            )}
            {nseData && (
              <Text
                style={{
                  color: ColorConstants.textBlack,
                  fontSize: 18,
                  fontWeight: '300',
                  marginRight: 30,
                }}>
                {nseData.metadata.last}
              </Text>
            )}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
export default Index_two;
