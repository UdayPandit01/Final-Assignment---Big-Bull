
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import LottieView from 'lottie-react-native';
import { StackActions, useNavigation } from '@react-navigation/native'; 
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DashboardNavigation from '../../../root/DashboardNavigation';


const Onboard = () => {
  const [screenShown, setScreenShown] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('screenShown').then(value => {
      if (value !== null) {
        setScreenShown(true);
      }
    
      else {
        AsyncStorage.setItem('screenShown', 'true');
      }
    });
  }, []);
  const navigator = useNavigation();

  return (
    <> 
    {screenShown?(
      <DashboardNavigation/>
    ):(

      
      <Swiper
      style={styles.swiperContainer}
      showsButtons={false}
      loop={false}
      activeDot={<View style={styles.activeDot} />}
      dot={<View style={styles.dot} />}>
      <View style={styles.slideContainer}>
        <LottieView
          style={[styles.slideLogo]}
          source={require('../../../assests/lottie/onboading_logo_one.json')}
          autoPlay
          loop
          />
        <Text style={styles.slideText}>Buy & Trade Top Stocks</Text>
        <Text style={styles.subHeadingText}>
          A place that provides you with the world's top stocks that you can buy
          and trade
        </Text>
        <Text style={styles.bottomText} >Swipe Right ></Text>
      </View>

      <View style={styles.slideContainer}>
        <LottieView
          style={[styles.slideLogo]}
          source={require('../../../assests/lottie/onboarding_logo_two.json')}
          autoPlay
          loop
          />
        <Text style={styles.slideText}>Get Started with Tradebase</Text>
        <Text style={styles.subHeadingText}>
          A place that provides you with the world's top stocks that you can buy
          and trade
        </Text>
       
        {/* <TouchableOpacity style={styles.navigationButton} onPress={() => {navigator.navigate('DashboardNavigation')}}> */}
        <TouchableOpacity style={styles.navigationButton} onPress={() => 
                navigator.dispatch(StackActions.replace('DashboardNavigation'))} >
          <Text style={styles.buttonText} >Get Started</Text>
        </TouchableOpacity>
       
      </View>
    </Swiper>
          )}
          </>
  );
};

export default Onboard;

// const styles = StyleSheet.create({
//   swiperContainer: {},

//   slideContainer: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },

  // slideLogo: {
  //   height: '62%',
  //   width: '60%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

//   slideText: {
//     color: '#03314B',
//     fontSize: 24,
//     fontWeight: '700',
//     textAlign: 'center',
//   },

//   subHeadingText: {
//     textAlign: 'center',
//     fontStyle: 'italic',
//     fontSize: 14,
//     fontWeight: '400',
//     color: '#8198A5',
//     margin: 10,
//     lineHeight: 24,
//   },

//   bottomText:{
//     marginTop:110,
//     fontSize:14,
//     fontWeight:'400',
//     color:'#8198A5',

//   },

//   navigationButton: {
//     backgroundColor: '#908FEC',
//     borderRadius: 8,
//     height: '6%',
//     width: '53%',
//     justifyContent: 'center',
//     padding: 10,
//     marginTop: 60,
//     padding: 10,
    
//   },

//   buttonText: {
//     color: '#FFFFFF',
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: '500',
//   },

//   dot: {
   
//     backgroundColor: 'white',
//     width: 8,
//     height: 8,
//     borderRadius: 10,
//     borderWidth: 0.5,
//   },

//   activeDot: {
//     backgroundColor: '#908FEC',
//     width: 19,
//     height: 8,
//     borderRadius: 25,
//   },
// });
