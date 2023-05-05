import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import NseModule from '../../../NseModule';
import {NseData} from '../Home/nsedata';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Nifty50 = () => {
  const [nseData, setNseData] = useState<NseData>();
  useEffect(() => {
    {
      NseModule.onBridge('Init');
      setTimeout(() => {
        getMovies();
      }, 1000);
    }
  }, []);

  // const onClick = () => {
  //   getMovies();
  // };
  const callbackSuccess = scanResult => {
    setNseData(JSON.parse(scanResult));
    console.log('losinggggJAVADDffd ' + scanResult);
  };
  const callbackError = error => {
    console.log('errorlosinggggJAVADDffd' + error);
  };
  const getMovies = async () => {
    try {
      {
        // NseModule.onBridge(
        //   'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY 50',
        // );
        NseModule.getAPIResponse(
          'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY 50',
          callbackSuccess,
          callbackError,
        );
      }
    } catch (error) {
      console.error('testf ' + error);
    } finally {
    }
  };

  return (
    <View>
      <Text>Nifty50</Text>
      {/* {nseData && <Text>{nseData.name}</Text>} */}
      <TouchableOpacity onPress={() => onClick()}>
        <Text>{'Go To Next'}</Text>
        {nseData && <Text>{nseData.name}</Text>}
        {nseData && <Text>{nseData.timestamp}</Text>}
        {nseData && <Text>{nseData.metadata.last}</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default Nifty50;
