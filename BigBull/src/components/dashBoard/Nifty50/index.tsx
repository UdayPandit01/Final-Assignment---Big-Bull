import {
  View,
  Text,
  FlatList,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import NseModule from '../../../NseModule';
import {NseData} from '../Home/nsedata';
import Search_Icon from '../../../assests/nifty50_images/Search_Icon';
import styles from './style';

const Nifty50 = () => {
  const [searchText, setSearchText] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const [nseData, setNseData] = useState<NseData>();
  useEffect(() => {
    {
      NseModule.onBridge('Init');
      setTimeout(() => {
        getNse();
      }, 1000);
    }
  }, []);

  const callbackSuccess = (scanResult: string) => {
    setNseData(JSON.parse(scanResult));
    console.log('losinggggJAVADDffd ' + scanResult);
  };
  const callbackError = (error: string) => {
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

  const filteredData = nseData?.data.filter(item =>
    item.symbol?.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    // <ScrollView>

    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchBarText}
          placeholder="search..."
          returnKeyType="search"
          placeholderTextColor="white"
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
        <Search_Icon width={28} height={45} />
      </View>

      {nseData?.data !== undefined && (
        <>
          <FlatList
            refreshing={refreshing}
            onRefresh={onRefresh}
            // data={nseData.data}
            data={filteredData}
            nestedScrollEnabled
            key={'*'}
            bounces={false}
            ListFooterComponent={() => {
              return <View style={{height: 400}} />;
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View style={styles.itemContainer}>
                <Text style={{color: 'black', fontSize: 18}}>
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
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
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
        </>
      )}
    </View>
    // </ScrollView>
  );
};
// };

export default Nifty50;
