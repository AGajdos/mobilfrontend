import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity,FlatList,Image } from 'react-native';

//const ipcim="172.16.0.114";
const IP = require('./ipcim.js');
export default class Kereses extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nev: '',
        komment:"", 
        dataSource:[],
        dataSource2:[]

    };
  }
  
kereses=async ()=>{
    var bemenet={
      bevitel1:this.state.nev
    }
fetch('http://'+IP.ipcim+'/kereses', {
  method: "POST",
  body: JSON.stringify(bemenet),
  headers: {"Content-type": "application/json; charset=UTF-8"}
}
)
  .then((response) => response.json())
  .then((responseJson) => {

    this.setState({
      isLoading2: false,
      dataSource2: responseJson,
    }, function(){
    });
  })
  .catch((error) =>{
    console.error(error);
  });
}
  render() {
    return (
    <View style = {{backgroundColor:"#DCF9F4",width:'95%',borderRadius:20,alignSelf:'center',flex:1,marginBottom:10}}>
      <View style={{padding: 10,backgroundColor: "#B9F3EA",borderRadius:60,marginBottom:10}}>
          <Text style={{padding: 10, fontSize: 35,textAlign:'center',color:"brown"}}>
              Keresés:
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40,width:'85%',alignSelf:'center',backgroundColor:'#0099ff',borderColor:'black',color:"white",textAlign:'center',}}
          placeholder="Add meg mit szeretnél megtalálni:"
          onChangeText={(nev) => this.setState({nev})}
          value={this.state.nev}
        />
         <TouchableOpacity style={{padding:10}}
          onPress={async ()=>this.kereses()}>
          <View style={styles.gomb}>
            <Text style={styles.gombSzoveg}>Keresés</Text>
          </View>
        </TouchableOpacity>
     </View>
    { this.state.dataSource2 ? 
      <FlatList
      data={this.state.dataSource2}
      renderItem={({item}) => 

      /*<View style={{ border: "solid blue",width:600, marginLeft:"auto",marginRight:"auto",padding:20,marginBottom:10,borderRadius:20,}}>*/
      <View style={{marginLeft:"auto",marginRight:"auto",padding:10,marginBottom:10,  border: "solid blue", borderRadius:60,backgroundColor: "#B9F3EA",}}>
      <Text style={{color:"brown",fontSize:40,textAlign:"center",marginTop:15,marginBottom:5,fontWeight:"bold" }}   >{item.gyakorlat_nev} </Text>
      <Image  source={{uri: 'http://'+IP.ipcim+'/'+item.gyakorlat_kep}} style={{width:350,height:300,marginLeft:"auto",marginRight:"auto"}} />  
      <Text style={{color:"brown",fontSize:16,textAlign:"center",marginTop:15,marginBottom:5,textAlign:"justify"}}   >{item.gyakorlat_leiras} </Text>
      </View>
    }   
    />
    : null}
    </View>
    );
  }
}
const styles = StyleSheet.create({
    gombSzoveg:{
            textAlign:'center',
            color:'white',
            marginTop:'auto',
            marginBottom:'auto',
            fontSize:25
    },
    gomb:{
            height:45,
            backgroundColor:'blue',
            width:'45%',
            alignSelf:'center',
            borderRadius:10
    },
});