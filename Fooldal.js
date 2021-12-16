import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

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

          /*<View style={{ border: "solid blue",width:600, marginLeft:"auto",marginRight:"auto",padding:20,marginBottom:10,borderRadius:20,}}>*/
          <View style={{marginLeft:"auto",marginRight:"auto",padding:40,marginBottom:10,  border: "solid blue", borderRadius:60,backgroundColor: "#B9F3EA"}}>
          <Text style={{color:"brown",fontSize:40,textAlign:"center",marginTop:15,marginBottom:5,fontWeight:"bold" }}   >{item.izom_nev} </Text>
          <Image  source={{uri: 'http://192.168.2.112:3000/'+item.izom_kep}} style={{width:300,height:300,marginLeft:"auto",marginRight:"auto"}} />  
          <TouchableOpacity
          
        style={{backgroundColor:"brown",width:30,height:30,flex:1,margin:10}}
        onPress={()=>this.beviteltorles()}
      ></TouchableOpacity>
          <Collapsible collapsed={this.state.isCollapsed}>
    
	 <Text style={{padding: 10, fontSize: 42}}>
         valami
        </Text>

  </Collapsible>

          
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