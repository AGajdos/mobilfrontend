import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';

const ipcim="172.16.0.114";
export default class Nevjegy extends React.Component {

  constructor(props){
    super(props);
    this.state ={
       isLoading: true,
       dataSource:[]
    }
  }



  render(){

  

    return(
      <View style={{ backgroundColor:"#DCF9F4"}}>
          <Text style={{color:"brown",fontSize:40,textAlign:"center",marginTop:15,marginBottom:5,fontWeight:"bold" }}   >Készítette: </Text>
          <Text style={{color:"brown",fontSize:40,textAlign:"center",marginTop:15,marginBottom:5,fontWeight:"bold",marginBottom:30 }}   >Gajdos Artúr </Text>
       
      </View>
    );
  }
}