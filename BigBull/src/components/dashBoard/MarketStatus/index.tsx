import {View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import NseModule from '../../../NseModule';
import {NseData} from '../Home/nsedata';
import Lottie from 'lottie-react-native';
import Carousel from 'react-native-snap-carousel';
import Search_Icon from '../../../assests/nifty50_images/Search_Icon';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import Top50 from '../../dashBoard/Nifty50/Top50';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerContentScrollView} from '@react-navigation/drawer';
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

  // Object.keys(nseData?.marketState || {}).map(key => {
  //   console.log(nseData?.marketState[key].market);
  // });

  return (
    <>
     <StatusBar
          barStyle="dark-content"
          backgroundColor="#908FEC"
          translucent={false}
        />
      <View
        style={{
          height: 285,
          backgroundColor: '#908FEC',
          //  backgroundColor: 'white',
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
        {/* <Text style={{color: 'white',fontSize:20,fontWeight:'400',alignSelf:'center',marginBottom:10}}>MARKET STATUS</Text> */}

        <View
          style={{
            backgroundColor: 'white',
            // backgroundColor: '#908FEC',
            height: 40,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderRadius: 5,
            // borderWidth:2,
          }}
        />
        <View style={{backgroundColor:'white'}}>
            <Text style={{color: 'black',fontSize:12,fontWeight:'500',marginLeft:20}}>Scroll Down For More >></Text>
        </View>
      </View>

      {nseData?.marketState && (
        <FlatList
          data={nseData?.marketState}
          // keyExtractor={(item, index) => index.toString()}

          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: 'white',
                // backgroundColor: '#908FEC',
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
                    {/* <Text style={styles.tradeText}>{item.marketStatus}</Text> */}
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

const styles = StyleSheet.create({
  marketItemContainer: {
    // backgroundColor: 'white',
    // borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    margin: 10,
    marginTop: 0,
    height: 150,
    marginHorizontal: 20,
    backgroundColor: '#908FEC',
    // backgroundColor: 'white',
    elevation: 6,
    // shadowColor:'#908FEC',
    // paddingHorizontal:0,
  },
  marketText: {
    color: 'white',
    // color: '#908FEC',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  marketItemSubContainer: {
    borderRadius: 15,
    // borderWidth:1,
    marginTop: 20,
    marginHorizontal: 25,
    height: 75,
    // backgroundColor:'#DD7BC2',
    backgroundColor: '#F5F5FD',
    elevation: 15,
  },
  tradeDateContainer: {
    borderRadius: 7,
    // borderWidth:1,
    marginTop: 15,
    // paddingHorizontal:17,
    marginHorizontal: 25,
    flexDirection: 'row',
    // justifyContent:'space-between',
    justifyContent: 'center',
  },
  tradeText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '300',
    // alignSelf:'center',
  },
  marketStatusText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    alignSelf: 'center',
  },
  Logo: {
    marginTop: 18,
    height: '83%',
    width: '65%',
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
