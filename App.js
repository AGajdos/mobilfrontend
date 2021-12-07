import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Mell from './Mell';
import Hat from './Hat'

function Melllap({ navigation }) {
  return (
    <Mell/>
  );
}


function Hatlap({ navigation }) {
  return (
    <Hat/>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Mell" component={Melllap} />
        <Drawer.Screen name="Hát" component={Hatlap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}