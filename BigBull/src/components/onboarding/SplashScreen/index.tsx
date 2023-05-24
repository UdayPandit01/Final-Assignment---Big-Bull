import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import styles from './style';
import string from '../../../assests/string';
import ColorPalette from '../../../assests/ColorPalette';

const Splashscreen = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorPalette.textPurple}
        translucent={false}
      />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>{string.bigBullText}</Text>
          </View>

          <View style={styles.tagLineContainer}>
            <Text style={styles.tagLineText}>{string.splashText}</Text>
          </View>
        </View>

        <LottieView
          style={styles.logo}
          source={require('../../../assests/lottie/bull_logo.json')}
          autoPlay
          loop
        />
      </View>
    </>
  );
};

export default Splashscreen;
