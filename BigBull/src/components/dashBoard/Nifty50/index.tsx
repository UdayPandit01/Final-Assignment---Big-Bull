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
import fonts from '../../../assests/fonts/Fira_Sans';
import ColorPalette from '../../../assests/ColorPalette';
import string from '../../../assests/string';
import {BASE_URL_NSE, nifty50} from '../../../services';

const Nifty50 = () => {
  const [searchText, setSearchText] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

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
      setInterval(() => {
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

      setTimeout(async () => {
        await NseModule.getAPIResponse(
          BASE_URL_NSE + nifty50,
          callbackSuccess,
          callbackError,
        );
      }, 1000);
    } catch (error) {
      console.error('testf ' + error);
    } finally {
    }
  };

  const filteredData = nseData?.data.filter(item =>
    item.symbol?.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={{backgroundColor: ColorPalette.textWhite, flex: 1}}>
      <View style={styles.searchBar}>
        {/* <Search_Icon width={25} height={43} /> */}
        <TextInput
          style={styles.searchBarText}
          placeholder={string.searchText}
          returnKeyType="search"
          placeholderTextColor="#fff"
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
        <Search_Icon width={25} height={45} />
      </View>

      {nseData?.data !== undefined && (
        <>
          <FlatList
            refreshing={refreshing}
            onRefresh={onRefresh}
            // data={nseData.data}
            data={filteredData}
            nestedScrollEnabled
            // key={'*'}
            // bounces={false}
            ListFooterComponent={() => {
              return <View style={{height: 5}} />;
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View style={styles.itemContainer}>
                <Text style={styles.symbolText}>{'' + item.symbol}</Text>

                <View style={styles.priceOpeContainer}>
                  <Text style={styles.priceOpenText}>
                    {string.price + item.lastPrice}
                  </Text>
                  <Text style={styles.priceOpenText}>
                    {string.open + item.open}
                  </Text>
                </View>

                <View style={styles.highLowConatiner}>
                  <Text style={styles.highLowText}>
                    {string.dayHigh + item.dayHigh}
                  </Text>
                  <Text style={styles.highLowText}>
                    {string.dayLow + item.dayLow}
                  </Text>
                </View>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
};

export default Nifty50;
