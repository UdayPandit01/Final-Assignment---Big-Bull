import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import styles from './style';
// import Lottie from 'lottie-react-native';

const Splashscreen = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#908FEC"
        translucent={false}
      />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>BIG BULL</Text>
          </View>

          <View style={styles.tagLineContainer}>
            <Text style={styles.tagLineText}>
              Invest And Get Better Returns
            </Text>
          </View>
        </View>

        <LottieView
          style={styles.logo}
          // source={require('../../assests/lottie/bull_logo.json')}
          source={require('../../../assests/lottie/bull_logo.json')}
          autoPlay
          loop
        />
      </View>
    </>
  );
};

export default Splashscreen;
