import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import NseModule from '../../../NseModule';
import {NseData} from '../Home/nsedata';
import Search_Icon from '../../../assests/nifty50_images/Search_Icon';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const Nifty50 = () => {
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
    // console.log(`all item`)
    // console.log(item)
    // return (
    <View style={{padding: 10}}>
      <Text style={{color: 'black'}}>{item.name}</Text>
      <Text style={{color: 'black'}}>{item.timestamp}</Text>
      <Text style={{color: 'black'}}>{item.metadata.last}</Text>
    </View>;

    // )
  };

  return (
    <View>
      <View
        style={{
          // borderWidth: 1,
          borderRadius: 30,
          height: 50,
          margin: 11,
          marginTop: 15,
          alignItems:'flex-end',
          paddingRight:18,
          backgroundColor:"#908FEC",
          // onChangeText={onSearch},
        //  placeholder="Search",
        //  placeholderTextColor="#888",
        }}>
        <Search_Icon width={35} height={45}/>
      </View>
      <Text style={{color: 'black'}}>Nifty50</Text>
      {/* {nseData && <Text>{nseData.name}</Text>} */}
      <TouchableOpacity onPress={() => onClick()}>
        <Text style={{color: 'black'}}>{'Go To Next'}</Text>
        {nseData && <Text style={{color: 'black'}}>{nseData.name}</Text>}
        {nseData && <Text style={{color: 'black'}}>{nseData.timestamp}</Text>}
        {nseData && (
          <Text style={{color: 'black'}}>{nseData.metadata.last}</Text>
        )}
      </TouchableOpacity>
      {/* {nseData.length > 0 ? ( */}
      <FlatList
        data={nseData}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
      {/* ) : ( */}
      {/* <Text>Loading data...</Text> */}
      {/* )} */}
    </View>
  );
};

export default Nifty50;
