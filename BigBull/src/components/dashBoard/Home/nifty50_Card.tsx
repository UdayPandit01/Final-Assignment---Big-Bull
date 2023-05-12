import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import NseModule from '../../../NseModule';
import {NseData} from './nsedata';
import {useNavigation} from '@react-navigation/core';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

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
    // console.log('errorlosinggggJAVADDffd' + error);
  };
  const getNse = async () => {
    try {
      // NseModule.onBridge(
      //   'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY 50',
      // );
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

  // const renderItem = ({item}) => {
  //   <View style={{padding: 10}}>
  //     <Text style={{color: 'black'}}>{item.symbol}</Text>
  //     <Text style={{color: 'black'}}>{item.timestamp}</Text>
  //     <Text style={{color: 'black'}}>{item.metadata.last}</Text>
  //   </View>;

  //   // )
  // };

  return (
    <View style={styles.nifty50Card}>
      {/* <Text style={{color: 'black'}}>{'Go To Next'}</Text> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Nifty50');
        }}>
        <LinearGradient style={styles.gradient} colors={['#4B0DCF', '#DD7BC2']}>
          <View style={{margin: 10, marginTop: 15, alignItems: 'center'}}>
            {nseData && (
              <Text style={{color: 'white', fontSize: 25, fontWeight: '800'}}>
                {nseData.name}
              </Text>
            )}
          </View>

          {nseData && (
            <Text
              style={{
                color: 'white',
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
              // borderWidth:1,
              borderRadius: 20,
              backgroundColor: 'white',
              elevation: 8,
              shadowColor: 'black',
              height: 25,
            }}>
            {nseData && (
              <Text
                style={{
                  color: 'black',
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
                  color: 'black',
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

// const styles = StyleSheet.create({
//   nifty50Card: {
//     // borderWidth: 1,
//     borderRadius: 25,
//     margin: 30,
//     marginTop: 30,
//     height: 150,
//     // backgroundColor: '#40BC9A',
//     // backgroundColor: '#D8D8D8',

//     elevation: 20,
//     shadowColor: 'black',
//     //   shadowOffset:{width:-2,height:4},
//     //   shadowRadius:3,
//   },
//   gradient: {
//     height: 160,
//     borderRadius: 25,
//   },
// });
