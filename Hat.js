import React, { Component } from 'react';
import { Text, TextInput, View, Image } from 'react-native';

export default class Hat extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    
    return (
      <View style={{padding: 10}}>
       
        <Text style={{padding: 10, fontSize: 42}}>
         Hát
        </Text>
        <Image source={require('./kepek/2.jpg')} style={{width:150,height:150}}  /> 
      </View>
      
      
    );
  }
}