import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
// import Lottie from 'lottie-react-native';

const Splashscreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>BIG BULL</Text>
        </View>

        <View style={styles.tagLineContainer}>
          <Text style={styles.tagLineText}>Invest And Get Better Returns</Text>
        </View>
      </View>

      <LottieView
        style={styles.logo}
        source={require('../../assests/lottie/bull_logo.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#908FEC',
  },

  headingContainer: {
    marginTop: 110,
    marginBottom: 30,
  },

  headingText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 45,
    padding: 0,
  },

  tagLineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 5,
 
  },

  tagLineText: {
    fontSize: 21,
    alignItems: 'center',
    fontWeight: '400',
    color: 'black',
    alignSelf: 'center',
  },

  rocketLogo: {
    padding: 0,
    height: '50%',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: '50%',
    width: '50%',
    marginTop: 120,
    paddingLeft: 25,
  },
});
