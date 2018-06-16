import React from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {loginUser} from './actions/index';
import FirstPage from './FirstPage';
import { Actions } from 'react-native-router-flux';

class Root extends React.Component{
  onPressButton = () => {
    this.props.loginUser();
    console.log(this.props.isLoggedIn);
    if(this.props.app.isLoggedIn){
      Actions.firstpage();
    }
  }

  render(){
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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

const mapDispatchToProps = {
  loginUser
};

const mapStateToProps = ({app}) => ({app});

export default connect(mapStateToProps, mapDispatchToProps)(Root);