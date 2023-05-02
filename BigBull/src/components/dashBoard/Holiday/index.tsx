import {View, Text, Button} from 'react-native';
import React from 'react';

const Holiday = ({navigation}) => {
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default Holiday;
