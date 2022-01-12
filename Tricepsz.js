import React from 'react';

import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';

export default class Tricepsz extends React.Component {

  constructor(props){
    super(props);
    this.state ={
       isLoading: true,
       dataSource:[]
    }
  }

  componentDidMount(){
    return fetch('http:/192.168.1.106:3000/gyakorlatok_tricepsz')
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

  

    return(
      <View style={{ backgroundColor:"#DCF9F4"}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          /*<View style={{ border: "solid blue",width:600, marginLeft:"auto",marginRight:"auto",padding:20,marginBottom:10,borderRadius:20,}}>*/
          <View style={{marginLeft:"auto",marginRight:"auto",padding:40,marginBottom:10,  border: "solid blue", borderRadius:60,backgroundColor: "#B9F3EA"}}>
          <Text style={{color:"brown",fontSize:40,textAlign:"center",marginTop:15,marginBottom:5,fontWeight:"bold" }}   >{item.gyakorlat_nev} </Text>
          <Image  source={{uri: 'http://192.168.1.106:3000/'+item.gyakorlat_kep}} style={{width:300,height:300,marginLeft:"auto",marginRight:"auto"}} />  
          <Text style={{color:"brown",fontSize:16,textAlign:"center",marginTop:15,marginBottom:5,textAlign:"justify"}}   >{item.gyakorlat_leiras} </Text>
          
          </View>
        
        }

        
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
  }
});