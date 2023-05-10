import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import NseModule from '../../../NseModule';
import {NseData} from '../Home/nsedata';
import Search_Icon from '../../../assests/nifty50_images/Search_Icon';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import Index_two from '../Home/index_two';

const Nifty50 = () => {
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
  //   <View  style={{padding: 20}}>
  //     <Text style={{color: 'black'}}>{item.symbol}</Text>
  //     <Text style={{color: 'black'}}>{item.timestamp}</Text>
  //     <Text style={{color: 'black'}}>{item.metadata.last}</Text>
  //   </View>;

  //   // )
  // };

  return (
    <View style={{}}>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="search..."
          returnKeyType="search"
          placeholderTextColor="white"
          style={{marginLeft: 40, color: 'black', fontSize: 17}}
        />
        <Search_Icon width={28} height={45} />
      </View>
      {/* <View>
        <Index_two/>
      </View> */}

      {/* <View style={styles.nifty50Card} onPress={() => onClick()}>
        <Text style={{color: 'black'}}>{'Go To Next'}</Text>

        <View>
        {nseData && <Text style={{color: 'black'}}>{nseData.name}</Text>}
        </View>

        {nseData && <Text style={{color: 'black'}}>{nseData.timestamp}</Text>}
        {nseData && (
          <Text style={{color: 'black'}}>{nseData.metadata.last}</Text>)} */}

      {/* </View>  */}
      {nseData?.data !== undefined && (
        <FlatList
          data={nseData?.data}
          nestedScrollEnabled
          key={'*'}
          bounces={false}
          ListFooterComponent={() => {
            return <View style={{height: 400}} />;
          }}
          showsVerticalScrollIndicator={false}
          
          renderItem={({item, index}) => (
            <View style={styles.itemContainer}>
              <Text style={{color: 'black', fontSize: 17}}>
                {'' + item.symbol}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 15,
                  marginHorizontal: 5,
                }}>
                <Text style={{color: 'black'}}>
                  {'Price: ' + item.lastPrice}
                </Text>
                <Text style={{color: 'black'}}>{'Open:  ' + item.open}</Text>
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'black'}}>
                  {'DayHigh:  ' + item.dayHigh}
                </Text>
                <Text style={{color: 'black'}}>
                  {'DayLow:  ' + item.dayLow}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Nifty50;

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 30,
    height: 50,
    margin: 11,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    backgroundColor: '#908FEC',
    elevation: 9,
    shadowColor: 'black',
  },
  itemContainer: {
    backgroundColor: '#62CDFF',
    // backgroundColor: '#F61C7A',
    opacity: 0.9,
    // borderWidth: 1,
    borderRadius: 15,
    height: 110,
    padding: 10,
    margin: 7,
    marginHorizontal:16,
    elevation: 10,
    shadowColor: 'black',
  },
});
