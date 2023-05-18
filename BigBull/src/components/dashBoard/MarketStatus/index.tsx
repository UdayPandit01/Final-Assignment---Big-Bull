import {View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import NseModule from '../../../NseModule';
import {NseData} from '../Home/nsedata';
import Lottie from 'lottie-react-native';
import styles from './style';

// import {TouchableOpacity} from 'react-native-gesture-handler';

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
        'https://www.nseindia.com/api/marketStatus',
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
    
      <View

        style={{
          height: 285,
          backgroundColor: '#908FEC',
          marginTop: 0,
        }}>
        <Lottie
          style={[styles.Logo]}
          source={require('../../../assests/lottie/market_status_logo.json')}
          autoPlay
          loop
        />
      </View>

      <View style={{backgroundColor: '#908FEC'}}>

        <View
          style={{
            backgroundColor: 'white',
            height: 40,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderRadius: 5,
          }}
        />
        <View style={{backgroundColor:'white'}}>
            <Text style={{color: 'black',fontSize:12,fontWeight:'500',marginLeft:20}}>Scroll Down For More >></Text>
        </View>
      </View>

      {nseData?.marketState && (
        <FlatList
          data={nseData?.marketState}

          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: 'white',
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              }}>
              <Text style={{color: 'black'}} />

              <View style={styles.marketItemContainer}>
                <Text style={styles.marketText}>
                  {item.market.toUpperCase()}
                </Text>

                <View style={styles.marketItemSubContainer}>
                  <View style={styles.tradeDateContainer}>
                    <Text style={styles.tradeText}>{item.tradeDate}</Text>
                  </View>
                  <Text style={styles.marketStatusText}>
                    {item.marketStatusMessage}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </>
  );
};
export default MarketStatus;

// const styles = StyleSheet.create({
//   marketItemContainer: {
//     borderRadius: 20,
//     padding: 10,
//     margin: 10,
//     marginTop: 0,
//     height: 150,
//     marginHorizontal: 20,
//     backgroundColor: '#908FEC',
//     elevation: 6,
//   },
//   marketText: {
//     color: 'white',
//     alignSelf: 'center',
//     fontSize: 20,
//     fontWeight: '600',
//   },
//   marketItemSubContainer: {
//     borderRadius: 15,
//     marginTop: 20,
//     marginHorizontal: 25,
//     height: 75,
//     backgroundColor: '#F5F5FD',
//     elevation: 15,
//   },
//   tradeDateContainer: {
//     borderRadius: 7,
//     marginTop: 15,
//     marginHorizontal: 25,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   tradeText: {
//     color: 'black',
//     fontSize: 15,
//     fontWeight: '300',
//   },
//   marketStatusText: {
//     marginTop: 10,
//     fontSize: 16,
//     fontWeight: '400',
//     color: 'black',
//     alignSelf: 'center',
//   },
//   Logo: {
//     marginTop: 18,
//     height: '83%',
//     width: '65%',
//     marginLeft: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
