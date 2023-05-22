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
        BASE_URL_NSE + nifty50,
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

    <View style={{backgroundColor: ColorPalette.textWhite, flex: 1}}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchBarText}
          placeholder={string.searchText}
          returnKeyType="search"
          placeholderTextColor="#fff"
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
                <Text
                  style={{
                    color: ColorPalette.textBlack,
                    fontSize: 18,
                    fontFamily: fonts.BOLD,
                  }}>
                  {'' + item.symbol}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 15,
                    marginHorizontal: 5,
                  }}>
                  <Text
                    style={{color: ColorPalette.textBlack, fontWeight: '500'}}>
                    {'Price: ' + item.lastPrice}
                  </Text>
                  <Text
                    style={{color: ColorPalette.textBlack, fontWeight: '500'}}>
                    {'Open:  ' + item.open}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{color: ColorPalette.textBlack, fontWeight: '500'}}>
                    {'Day High:  ' + item.dayHigh}
                  </Text>
                  <Text
                    style={{color: ColorPalette.textBlack, fontWeight: '500'}}>
                    {'Day Low:  ' + item.dayLow}
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
