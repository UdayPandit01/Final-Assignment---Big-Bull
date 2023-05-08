import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import NseModule from '../../../NseModule';
import {NseData} from '../Home/nsedata';
import Search_Icon from '../../../assests/nifty50_images/Search_Icon';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import Top50 from '../../dashBoard/Nifty50/Top50';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const Index_two = () => {
  const navigator = useNavigation();
  const [nseData, setNseData] = useState<NseData>();
  useEffect(() => {
    {
      NseModule.onBridge('Init');
      setTimeout(() => {
        getNse();
      }, 1000);
    }
  }, []);

  const onClick = () => {
    navigator.navigate('Top50', {nseData});
    getNse();
  };
  const callbackSuccess = scanResult => {
    setNseData(JSON.parse(scanResult));
    console.log('losinggggJAVADDffd ' + scanResult);
  };
  const callbackError = error => {
    console.log('errorlosinggggJAVADDffd' + error);
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

  const renderItem = ({item}) => {
    <View style={{padding: 10}}>
      <Text style={{color: 'black'}}>{item.symbol}</Text>
      <Text style={{color: 'black'}}>{item.timestamp}</Text>
      <Text style={{color: 'black'}}>{item.metadata.last}</Text>
    </View>;

    // )
  };

  return (
    <View style={styles.nifty50Card} onPress={() => onClick()}>
      {/* <Text style={{color: 'black'}}>{'Go To Next'}</Text> */}

      <View style={{margin: 10, alignItems: 'center',}}>
        {nseData && <Text style={{color: 'black',fontSize:22,fontWeight:'500'}}>{nseData.name}</Text>}
      </View>

      {nseData && <Text style={{color: 'black',alignSelf:"center", fontSize:18,fontWeight:'400',marginTop:15}}>{nseData.timestamp}</Text>}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 60,
          marginTop: 20,
        }}>
        {nseData && <Text style={{color: 'black', fontSize: 18,fontWeight:'400'}}>PRICE</Text>}
        {nseData && (
          <Text style={{color: 'black', fontSize: 18,fontWeight:'300'}}>{nseData.metadata.last}</Text>
        )}
      </View>
    </View>
  );
};
export default Index_two;

const styles = StyleSheet.create({
  nifty50Card: {
    borderWidth: 2,
    borderRadius: 25,
    margin: 30,
    marginTop: 40,
    height: '30%',
    backgroundColor: '#F295C6',
    elevation:25,
  },
});
