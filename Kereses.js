import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity } from 'react-native';

export default class Kereses extends Component {
  constructor(props) {
    super(props);
    this.state = {

        nev: '',
        komment:"", 
        dataSource2:[]

    };
  }

kereses=async ()=>{
    

    var bemenet={
      bevitel1:this.state.nev
     
    }
fetch('http://192.168.2.112:3000/kereses', {
  method: "POST",
  body: JSON.stringify(bemenet),
  headers: {"Content-type": "application/json; charset=UTF-8"}
}
)
  .then((response) => response.json())
  .the
n((responseJson) => {

    this.setState({
      isLoading2: false,
      dataSource2: responseJson,
    }, function(){
      alert(JSON.stringify(this.state.dataSource2))
    });

  })
  .catch((error) =>{
    console.error(error);
  });

    
}


  render() {
    return (
    <View style = {{backgroundColor:'darkblue',width:'90%',borderRadius:20,alignSelf:'center'}}>
      <View style={{padding: 10}}>
          <Text style={{padding: 10, fontSize: 22,color:'white',textAlign:'center'}}>
              Keresés:
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40,width:'85%',alignSelf:'center',backgroundColor:'blue',borderColor:'black',color:"white",textAlign:'center',}}
          placeholder="Add meg mit szerretmél megtalálni:"
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