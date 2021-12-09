import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Mell from './Mell';
import Hat from './Hat';
import Bicepsz from './Bicepsz';
import Tricepsz from './Tricepsz';
import Vall from './Vall';

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
function Bicepszlap({ navigation }) {
  return (
    <Bicepsz/>
  );
}
function Tricepszlap({ navigation }) {
  return (
    <Tricepsz/>
  );
}
function Valllap({ navigation }) {
  return (
    <Vall/>
  );
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Mell" component={Melllap}  />
        <Drawer.Screen name="Hát" component={Hatlap} />
        <Drawer.Screen name="Bicepsz" component={Bicepszlap} />
        <Drawer.Screen name="Tricepsz" component={Tricepszlap} />
        <Drawer.Screen name="Vall" component={Valllap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
