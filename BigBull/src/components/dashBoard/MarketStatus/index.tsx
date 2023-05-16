import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import NseModule from '../../../NseModule';
import {NseData} from '../Home/nsedata';
import Search_Icon from '../../../assests/nifty50_images/Search_Icon';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import Top50 from '../../dashBoard/Nifty50/Top50';
import LinearGradient from 'react-native-linear-gradient';
import { DrawerContentScrollView } from '@react-navigation/drawer';
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
    <View style={{height:300,backgroundColor:"black",marginTop:0}}><Text style={{color:'white'}}>Markets and Their Status</Text></View>
     <View style={{backgroundColor:"black"}}>

    <View style={{backgroundColor:"white",height:40,borderTopLeftRadius:50,borderTopRightRadius:50}}></View>
    </View> 
      {/* Other JSX code */}
      {nseData?.marketState && (
        
        <FlatList
          data={nseData?.marketState}
          // keyExtractor={(item, index) => index.toString()}
          
          renderItem={({item}) => (
           


            <View style={{backgroundColor:'white',borderTopLeftRadius:0,borderTopRightRadius:0}}>
          <Text style={{color:'black'}}></Text>
           
              <View style={styles.marketItemContainer}>
         
                <Text style={styles.marketText}>{item.market.toUpperCase()}</Text>

                <View style={styles.marketItemSubContainer}>

                <View style={styles.tradeDateContainer}>
                <Text style={styles.tradeText}>{item.tradeDate}</Text>
                <Text style={styles.tradeText}>{item.marketStatus}</Text>
                </View>
                <Text  style={styles.marketStatusText}>{item.marketStatusMessage}</Text>

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
    marginTop:0,
    height: 150,
    marginHorizontal:20,
    backgroundColor: '#908FEC',
    elevation:6,
    // shadowColor:'#908FEC',
    // opacity:0.9
    // paddingHorizontal:0,
  },
  marketText: {
    color: 'white',
    alignSelf:"center",
    fontSize:20,
    fontWeight:'500',
  },
  marketItemSubContainer:{
    borderRadius:15,
    // borderWidth:1,
    marginTop:15,
    marginHorizontal:22,
    height:80,
    // backgroundColor:'#DD7BC2',
    backgroundColor:'white',
    elevation:15

  },
  tradeDateContainer:{
    borderRadius:7,
    borderWidth:1,
    marginTop:15,
    paddingHorizontal:13,
    marginHorizontal:25,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  tradeText:{
    color:"black",
    fontSize:15,
  },
  marketStatusText:{
    marginTop:15,
    fontSize:17,
    fontWeight:'400',
    color:'black',
    alignSelf:'center',
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
