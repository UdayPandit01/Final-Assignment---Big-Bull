import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import LottieView from 'lottie-react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DashboardNavigation from '../../../root/DashboardNavigation';
import string from '../../../assests/string';

const Onboard = () => {
  const [screenShown, setScreenShown] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('screenShown').then(value => {
      if (value !== null) {
        setScreenShown(true);
      } else {
        AsyncStorage.setItem('screenShown', 'true');
      }
    });
  }, []);
  const navigator = useNavigation();

  return (
    <>
      {screenShown ? (
        <DashboardNavigation />
      ) : (
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
            <Text style={styles.slideText}>{string.onboardSlideOneText}</Text>
            <Text style={styles.subHeadingText}>
              {string.onboardSlideSubText}
            </Text>
            <Text style={styles.bottomText}>{string.swipeRightText}</Text>
          </View>

          <View style={styles.slideContainer}>
            <LottieView
              style={[styles.slideLogo]}
              source={require('../../../assests/lottie/onboarding_logo_two.json')}
              autoPlay
              loop
            />
            <Text style={styles.slideText}>{string.onboardSlideTwoText}</Text>
            <Text style={styles.subHeadingText}>
              {string.onboardSlideSubText}
            </Text>

            <TouchableOpacity
              style={styles.navigationButton}
              onPress={() =>
                navigator.dispatch(StackActions.replace('DashboardNavigation'))
              }>
              <Text style={styles.buttonText}>{string.getStartedText}</Text>
            </TouchableOpacity>
          </View>
        </Swiper>
      )}
    </>
  );
};

export default Onboard;
