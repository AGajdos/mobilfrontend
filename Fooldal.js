import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

//const ipcim="172.16.0.114";
const IP = require('./ipcim.js');
export default class Fooldal extends React.Component {
  constructor(props){
    super(props);
    this.state ={
       isLoading: true,
       dataSource:[]
    }
  }
  
  componentDidMount(){
    return fetch('http://'+IP.ipcim+'/video')
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

  render(){
      return (
        <View>
          <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View style={{marginBottom:30}}>
            <Text style={{fontSize:40,textAlign:"center",marginTop:15,marginBottom:5,fontWeight:"bold" }}   >{item.video_nev} </Text>
            <YoutubePlayer
          height={300}
          videoId={item.video_telo}
          />
        </View>
      }
      />
    </View>
      );
  }
}