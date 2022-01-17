import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Fooldal from './Fooldal';
import Kereses from './Kereses';
import Mell from './Mell';
import Hat from './Hat';
import Bicepsz from './Bicepsz';
import Tricepsz from './Tricepsz';
import Vall from './Vall';
import Comb from './Comb';
import Vadli from './Vadli';

function Fooldallap({ navigation }) {
  return (
    <Fooldal/>
  );
}

function Kereseslap({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#DCF9F4"}}>
      <Kereses/>
      <Button
      
        onPress={() => navigation.navigate('Fooldal')}
        title="Vissza a főoldarra"
      />
    </View>
  );
}
function Melllap({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#DCF9F4"}}>
      <Mell/>
      <Button
      
        onPress={() => navigation.navigate('Fooldal')}
        title="Vissza a főoldarra"
      />
    </View>
  );
}
function Hatlap({ navigation }) {
  return (
    
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#DCF9F4"}}>
      <Hat/>
      <Button
        onPress={() => navigation.navigate('Fooldal')}
        title="Vissza a főoldarra"
        
      />
    </View>
    
  );
}


function Bicepszlap({ navigation }) {
  return (
    
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#DCF9F4"}}>
      <Bicepsz/>
      <Button
        onPress={() => navigation.navigate('Fooldal')}
        title="Vissza a főoldarra"
        
      />
    </View>
    
  );
}
function Tricepszlap({ navigation }) {
  return (
    
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#DCF9F4"}}>
      <Tricepsz/>
      <Button
        onPress={() => navigation.navigate('Fooldal')}
        title="Vissza a főoldarra"
        
      />
    </View>
    
  );
}
function Valllap({ navigation }) {
  return (
    
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#DCF9F4"}}>
      <Vall/>
      <Button
        onPress={() => navigation.navigate('Fooldal')}
        title="Vissza a főoldarra"
        
      />
    </View>
    
  );
}
function Comblap({ navigation }) {
  return (
    
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#DCF9F4"}}>
      <Comb/>
      <Button
        onPress={() => navigation.navigate('Fooldal')}
        title="Vissza a főoldarra"
        
      />
    </View>
    
  );
}
function Vadlilap({ navigation }) {
  return (
    
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#DCF9F4"}}>
      <Vadli/>
      <Button
        onPress={() => navigation.navigate('Fooldal')}
        title="Vissza a főoldarra"
        
      />
    </View>
    
  );
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Fooldal">
      

      <Drawer.Screen name="Fooldal" component={Fooldallap}
        options={{
          title: 'Főoldal',
          headerStyle: {
            backgroundColor: '#0C463C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },   
        }}/>
        <Drawer.Screen name="Kereses" component={Kereseslap}
        options={{
          title: 'Keresés',
          headerStyle: {
            backgroundColor: '#0C463C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },   
        }}/>

        <Drawer.Screen name="Mell" component={Melllap}
        options={{
          title: 'Mell',
          headerStyle: {
            backgroundColor: '#0C463C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },   
        }}/>
        
        <Drawer.Screen name="Hát" component={Hatlap} 
         options={{
          title: 'Hát',
          headerStyle: {
            backgroundColor: '#0C463C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },   
        }}/>

        <Drawer.Screen name="Vall" component={Valllap} 
         options={{
          title: 'Váll',
          headerStyle: {
            backgroundColor: '#0C463C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },   
        }}/>

        <Drawer.Screen name="Bicepsz" component={Bicepszlap} 
         options={{
          title: 'Bicepsz',
          headerStyle: {
            backgroundColor: '#0C463C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },   
        }}/>
        <Drawer.Screen name="Tricepsz" component={Tricepszlap} 
         options={{
          title: 'Tricepsz',
          headerStyle: {
            backgroundColor: '#0C463C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },   
         
        }}/>
        <Drawer.Screen name="Comb" component={Comblap} 
         options={{
          title: 'Comb',
          headerStyle: {
            backgroundColor: '#0C463C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },   
         
        }}/>
        <Drawer.Screen name="Vadli" component={Vadlilap} 
         options={{
          title: 'Vádli',
          headerStyle: {
            backgroundColor: '#0C463C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },   
         
        }}/>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
