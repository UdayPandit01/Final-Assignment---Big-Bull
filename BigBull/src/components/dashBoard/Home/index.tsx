// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
// import Holiday from './Holiday';

// const Drawer = createDrawerNavigator();

// const DrawerNavigation = () => {
//   // return (
//     <NavigationContainer>
//        <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Holiday" component={Holiday} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   // );
// };

// export default Home;

import {
  View,
  Text,
  FlatList,
  Button,
  Dimensions,
  Stylesheet,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
// import Carousel from 'react-native-reanimated-carousel';
import Swiper from 'react-native-swiper';
// import Navigation from '../../../root/Navigation';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
// import DrawerNavigation from '../../../root/DrawerNavigation';
// import Carousel from 'react-native-reanimated-carousel';

const fetchData = async () => {
  const response = await axios.get(
    'https://priceapi.moneycontrol.com/technicalCompanyData/globalMarket/getGlobalIndicesListingData?view=overview&deviceType=W',
  );
  // console.log(JSON.stringify(response, null, 2));
  console.log(response.data.dataList);
  // console.log(response.data.dataList[2]);
  return response.data.dataList;
  // return response.data.dataList[2];
};

const Home = () => {
  const {data, error, isLoading} = useQuery('nse', fetchData);

  if (isLoading) {
    return <Text style={{color: 'black'}}>Please Wait, Fetching Data...</Text>;
  }
  if (error) {
    return <Text style={{color: 'black'}}>{error.message}</Text>;
  }

  const width = Dimensions.get('window').width;

  return (
    <View>
      {/* <View>
    <Text>Home Screen</Text>
    <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
  </View> */}
      <View style={styles.crouselContainer}>
        <Carousel
          styles={styles.Crousel}
          data={data}
          renderItem={({item}) => (
            <View style={styles.renderItemContainer}>
              <Text style={styles.renderItemText}>{item.heading}</Text>
            </View>
          )}
          sliderWidth={350}
          itemWidth={270}
          // itemHeight={200}
          // sliderHeight={200}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  crouselContainer: {
    backgroundColor: 'yellow',
    height: 180,
    marginTop:35,
    // width:0,
  },
  renderItemContainer: {
    height: 170,
    margin:8,
    backgroundColor: '#908FEC',

    borderWidth:2,
    borderRadius:25,
  },
  renderItemText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});
