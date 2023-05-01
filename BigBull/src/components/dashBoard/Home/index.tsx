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

import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchData = async () => {
  const response = await axios.get('https://api.example.com/your-endpoint');
  return response.data;
};

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home