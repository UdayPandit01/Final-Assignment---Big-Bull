import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import UserIcon from '../../../assests/homeImages/userIcon';
import ColorPalette from '../../../assests/ColorPalette';
import styles from './style';
import string from '../../../assests/string';

const HomeProfile = () => {
  return (
    <View style={styles.userProfileContainer}>
      <View
        style={{
          borderWidth: 0,
          borderRadius: 30,
          backgroundColor:  ColorPalette.textPurple,
        }}>
        <TouchableOpacity>
          <UserIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.userProfileTextContainer}>
        <Text style={styles.userProfileText}>{string.heyUser}</Text>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.userProfilesubText}>{string.welocmeText}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeProfile;
