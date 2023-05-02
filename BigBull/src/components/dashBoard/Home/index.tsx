// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
// import Holiday from './Holiday';

// const Drawer = createDrawerNavigator();

// const Home = () => {
//   return (
//     <NavigationContainer>
//        <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Holiday" component={Holiday} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Home;

import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
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

// const CarouselComponent = () => (
//   <Carousel
//     data={data}
//     renderItem={({item}) => <Text style={{color: 'black'}}>{item.name}</Text>}
//     sliderWidth={300}
//     itemWidth={200}
//   />
// );

const HomeApi = () => {
  const {data, error, isLoading} = useQuery('nse', fetchData);

  if (isLoading) {
    return <Text style={{color: 'black'}}>Please Wait, Fetching Data...</Text>;
  }
  if (error) {
    return <Text style={{color: 'black'}}>{error.message}</Text>;
  }



  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Text style={{color: 'black'}}>{item.heading}</Text>}
      // renderItem={({item}) => <Text style={{color: 'black'}}>{item.dataList.data}</Text>}
    />
  );
  // return (
  //   <View>
  //     <Text>Carousel</Text>
  //     <CarouselComponent data={data.data} />

  //     <Text>API List</Text>
  //     {data.data.map((item) => (
  //       <View key={item.indexCode}>
  //         <Text>{item.indexName}</Text>
  //         <Text>{item.lastPrice}</Text>
  //       </View>
  //     ))}
  //   </View>
  // );
};

export default HomeApi;
