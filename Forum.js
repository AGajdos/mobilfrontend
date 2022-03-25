import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity, FlatList, RefreshControl  } from 'react-native';
import Bevitel from './Bevitel';

//const ipcim="172.16.0.114";
const IP = require('./ipcim.js');

export default class Komment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nev: '',
        komment:"",

        dataSource:[]

    };
  }
  
  componentDidMount(){
    return fetch('http://'+IP.ipcim+'/tema')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });

  }

  ujratoltes=()=>{
    //alert(szam)
    this.setState({})

    return fetch('http://'+IP.ipcim+'/tema')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });

  }

  render() {
    return (

        <View style={{}}>
            
        <Bevitel tema_bevitel={this.state.tema}  frissit={()=>this.ujratoltes()}  />

        <Text style={{fontSize:30, textAlign:'center', marginTop:25}}>Megjegyzések</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View style={{backgroundColor:"#B9F3EA", borderRadius:15, margin:10}}>
          <Text style={{color:"#dd00cc",fontSize:18,marginTop:5, marginLeft:10}}>
          {item.k_nev} </Text>
          <Text style={{color:"black",fontSize:20, marginLeft:10}}>
          {item.k_szoveg} </Text>
          <Text style={{color:"black",fontSize:12, marginRight:10, marginBottom:5, textAlign:'right'}}>
          {item.k_datum} </Text>
          </View>
        }
          keyExtractor={({k_id}, index) => k_id}
        />
    </View>
    );
  }
}

