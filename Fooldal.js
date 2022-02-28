import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';
import Iframe from 'react-iframe';

export default class Mell extends React.Component {

  constructor(props){
    super(props);
    this.state ={
       isLoading: true,
       dataSource:[]
    }
  }
  componentDidMount(){
    return fetch('http://192.168.2.112:3000/izomcsoport')
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

       
          <View style={{marginLeft:"auto",marginRight:"auto",padding:10,marginBottom:10,  border: "solid blue", borderRadius:20,backgroundColor: "#B9F3EA"}}>
          <Text style={{color:"brown",fontSize:40,textAlign:"center",marginTop:15,marginBottom:5,fontWeight:"bold" }}   >{item.izom_nev} </Text>
          <Image  source={{uri: 'http://192.168.2.112:3000/'+item.izom_kep}} style={{width:370,height:300,marginLeft:"auto",marginRight:"auto"}} />  
        {/*<Iframe url="http://www.youtube.com/embed/rsWw-JN46Xw"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
    position="relative"/>*/}
         
         
       </View> 
        }

        
          
        />
      </View>
    );
  }
}
