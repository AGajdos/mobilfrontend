import React, { Component } from 'react';
import { Text, TextInput, View, Image } from 'react-native';

export default class Tricepsz extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    
    return (
      <View style={{padding: 10}}>
       
        <Text style={{padding: 10, fontSize: 42}}>
         Tricepsz
        </Text>
       
      </View>
      
      
    );
  }
}