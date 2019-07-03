/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  
   constructor(props){
	  super(props);
	  this.state={
		  un:"",
		  pa:"",
		  kq:"Chua login",
		  token:"...."
	  }
  }
  
  LOGIN(){
	   fetch("http://192.168.56.1:81/login/tonken.php", {
		  
		  method:"POST",
		  headers:{
			 'Accept': 'application/json',
			'Content-Type': 'application/json'
		  },
		   body: JSON.stringify({
				"USERNAME": this.state.un,
				"PASSWORD": this.state.pa
			  }),
  
	  })
	  .then((response)=>response.json())
	  .then((responseJson)=>{
		 
		
			
		this.setState({kq:responseJson.token});
		  
	  })
	  .catch((error)=>{console.log(error)});
	  
  }
  
  render() {
    return (
      <View style={styles.wrapper}>
		
		<View style={styles.box}>
			<Text>Login</Text>
		</View>
		
		<View style={styles.box}>
			
			<TextInput
				style={{height: 30, borderColor: 'gray', borderWidth: 1}}
				onChangeText={(un) => this.setState({un})}
				placeholder="Username"
				value={this.state.un}
			  />
		  
		</View>
		<View style={styles.box}>
		
			<TextInput
				style={{height:30, borderColor: 'gray', borderWidth: 1}}
				onChangeText={(pa) => this.setState({pa})}
				placeholder="Password"
				value={this.state.pa}
			  />
			  
		
		</View>
		<View style={styles.box}>
			 <TouchableOpacity onPress={()=>{this.LOGIN()}} >
				<Text>Login</Text>
			</TouchableOpacity>
		  
		</View>
		
		<View style={styles.box2}>
			<Text>{this.state.kq}</Text>
			<Text>{this.state.token}</Text>
		  
		</View>
     

	 </View>
    );
  }
}

var styles = StyleSheet.create({
	wrapper:{ flex:1, backgroundColor:"yellow", padding:10 },
	box:{ flex:1,   },
	box2:{ flex:3, }
	
});