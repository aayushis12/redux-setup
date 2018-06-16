import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';               
import Routes from './routes';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
