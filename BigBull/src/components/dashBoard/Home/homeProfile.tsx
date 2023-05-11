import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import UserIcon from '../../../assests/homeImages/userIcon';

const HomeProfile = () => {
  return (
    <View style={styles.userProfileContainer}>
      <View
        style={{
          borderWidth: 0,
          borderRadius: 30,
          backgroundColor: '#908FEC',
        }}>
        <TouchableOpacity>
          <UserIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.userProfileTextContainer}>
        <Text style={styles.userProfileText}> Hey, User !</Text>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.userProfilesubText}>Welcome to Tradebase</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  userProfileContainer: {
    height: 50,
    margin: 25,
    marginTop: 40,
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
});
