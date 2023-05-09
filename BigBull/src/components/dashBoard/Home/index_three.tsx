import {
  View,
  Text,
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
  console.log(response.data.name);

  return response.data.name;

};

const index_three = () => {
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
  crouselContainer: {
    height: 190,
    marginTop: 20,
  },
  renderItemContainer: {
    height: 180,
    margin: 8,
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

// import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import NseModule from '../../../NseModule';
// import {NseData} from '../Home/nsedata';
// import Search_Icon from '../../../assests/nifty50_images/Search_Icon';
// import {TextInput} from 'react-native-gesture-handler';
// import {useNavigation} from '@react-navigation/core';
// import Top50 from '../../dashBoard/Nifty50/Top50';
// import LinearGradient from 'react-native-linear-gradient';
// // import {TouchableOpacity} from 'react-native-gesture-handler';

// const Index_three= () => {
//   const navigator = useNavigation();
//   const [nseData, setNseData] = useState<NseData>();
//   useEffect(() => {
//     {
//       NseModule.onBridge('Init');
//       setTimeout(() => {
//         getNse();
//       }, 1000);
//     }
//   }, []);

//   const onClick = () => {
//     navigator.navigate('Top50', {nseData});
//     getNse();
//   };
//   const callbackSuccess = scanResult => {
//     setNseData(JSON.parse(scanResult));
//     console.log('losinggggJAVADDffd ' + scanResult);
//   };
//   const callbackError = error => {
//     console.log('errorlosinggggJAVADDffd' + error);
//   };
//   const getNse = async () => {
//     try {
//       // NseModule.onBridge(
//       //   'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY 50',
//       // );
//       await NseModule.getAPIResponse(
//         'https://api.moneycontrol.com/mcapi/v1/us-markets/getCurrencies',
//         callbackSuccess,
//         callbackError,
//       );
//     } catch (error) {
//       console.error('testf ' + error);
//     } finally {
//     }
//   };

//   // const renderItem = ({item}) => {
//   //   <View style={{padding: 10}}>
//   //     <Text style={{color: 'black'}}>{item.symbol}</Text>
//   //     <Text style={{color: 'black'}}>{item.timestamp}</Text>
//   //     <Text style={{color: 'black'}}>{item.metadata.last}</Text>
//   //   </View>;

//   //   // )
//   // };

//   return (
//     <View style={styles.nifty50Card} onPress={() => onClick()}>
//       {/* <Text style={{color: 'black'}}>{'Go To Next'}</Text> */}
//       <LinearGradient style={styles.gradient} colors={['#4B0DCF', '#DD7BC2']}>
//         <View style={{margin: 10,marginTop:15, alignItems: 'center'}}>
//           {nseData && (
//             <Text style={{color: 'white', fontSize: 25, fontWeight: '800'}}>
//               {nseData.data.name}
//             </Text>
//           )}
//         </View>

//         {nseData && (
//           <Text
//             style={{
//               color: 'white',
//               alignSelf: 'center',
//               fontSize: 18,
//               fontWeight: '500',
//               marginTop: 15,
//             }}>
//             {nseData.timestamp}
//           </Text>
//         )}

//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginHorizontal: 35,
//             marginTop: 20,
//             // borderWidth:1,
//             borderRadius:20,
//             backgroundColor:'white',
//             elevation:8,
//             shadowColor:'black',
//             height:25
//           }}>
//           {nseData && (
//             <Text style={{color: 'black', fontSize: 18, fontWeight: '400',marginLeft:50}}>
//               Price :
//             </Text>
//           )}
//           {/* {nseData && (
//             <Text style={{color: 'black', fontSize: 18, fontWeight: '300',marginRight:30}}>
//                {nseData.metadata.last}
//             </Text>
//           )} */}
//         </View>
//       </LinearGradient>
//     </View>
//   );
// };
// export default Index_three;

// const styles = StyleSheet.create({
//   nifty50Card: {
//     // borderWidth: 1,
//     borderRadius: 25,
//     margin: 30,
//     marginTop: 20,
//     height: 150,
//     // backgroundColor: '#40BC9A',
//     // backgroundColor: '#D8D8D8',

//     elevation: 20,
//     shadowColor: 'black',
//     //   shadowOffset:{width:-2,height:4},
//     //   shadowRadius:3,
//   },
//   gradient: {
//     height: 160,
//     borderRadius: 25,
//   },
// });

