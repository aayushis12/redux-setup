import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class Root extends React.Component{
  onPressButton = () => {
    
  }

  render(){
    return (
      <View>
        <Text>Hello</Text>
        <TextInput
          value="aayushisinha"
          style={{ borderWidth: 1, margin: 5, padding: 15 }}
        />
        <TextInput
          value="password"
          style={{ borderWidth: 1, margin: 5, padding: 15 }}
        />
        <Button title="Sign In" onPress={this.onPressButton}/>
      </View>
    )
  }
}

export default Root;