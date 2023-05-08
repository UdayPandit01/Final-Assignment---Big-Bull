import {
  View,
  Text,
  FlatList,
  Button,
  Dimensions,
  Stylesheet,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import UserIcon from '../../../assests/homeImages/userIcon';
import React, {useState} from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import {WorldIndices} from '../../../data/worldindices';

const fetchData = async () => {
  const response = await axios.get(
    'https://api.moneycontrol.com/mcapi/v1/us-markets/getCurrencies',
  );
  // console.log(JSON.stringify(response, null, 2));
  // setNewSelectedRoleData(JSON.parse(response.data));
  console.log(response.data.name);

  // newSelectedRoleData?.dataList.

  // console.log(response.data.dataList[2]);
  return response.data.name;
  // return response.data.dataList[2];
};

// interface draw {
//   drawerOpen: any;
// }

const index_three = () => {
  // const {navigate} = useNavigation();
  // console.log(drawerOpen);
  const {data, error, isLoading} = useQuery('nse', fetchData);

  if (isLoading) {
    return <Text style={{color: 'black'}}>Please Wait, Fetching Data...</Text>;
  }
  if (error) {
    return <Text style={{color: 'black'}}>{error.message}</Text>;
  }

  const width = Dimensions.get('window').width;

  return (
    <View style={styles.crouselContainer}>
      <Carousel
        styles={styles.Crousel}
        data={data}
        renderItem={({item}) => (
          <View style={styles.renderItemContainer}>
            <LinearGradient
              style={styles.gradient}
              colors={['#4B0DCF', '#DD7BC2']}>
              <Text style={styles.renderItemText}>{item.name}</Text>
              <Text style={styles.renderItemText}>{item.data[1]}</Text>
            </LinearGradient>
            {/* </LinearGradient>  */}
          </View>
        )}
        sliderWidth={355}
        itemWidth={280}
        loop={true}
      />
    </View>
  );
};


export default index_three;

const styles = StyleSheet.create({
  userProfileContainer: {
    // backgroundColor:
    // borderWidth: 2,
    // borderRadius: 2,
    height: 50,
    margin: 25,
    marginTop: 45,
    flexDirection: 'row',
  },
  userProfileTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 45,
  },
  userProfileText: {
    color: 'black',
    textAlign: 'center',
    flex: 1,
    paddingRight: 55,
    fontSize: 15,
    fontWeight: '500',
  },
  userProfilesubText: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '300',
    paddingRight: 45,
  },
  crouselContainer: {
    // backgroundColor: 'yellow',
    height: 190,
    marginTop: 20,
    // width:0,
  },
  renderItemContainer: {
    height: 180,
    margin: 8,
    // backgroundColor: '#908FEC',
    // backgroundColor:LinearGradient
    // borderWidth:2,
    // borderRadius: 25,
  },
  gradient: {
    height: 180,
    borderRadius: 25,
  },
  renderItemText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 30,
  },
});
