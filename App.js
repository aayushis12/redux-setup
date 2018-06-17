import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';               
import Routes from './routes';
import { AsyncStorage } from 'react-native';

//const store = createStore(reducer, applyMiddleware(thunk));

const createAppStore = applyMiddleware(thunk)(createStore);

export default class App extends React.Component {
  state={
    store: null,
  }

  configStore = async() => {
    const store = autoRehydrate()(createAppStore)(reducer);
    persistStore(store, { storage: AsyncStorage});
    return store;
  }
  

  loadStore = async() => {
    const store = await this.configStore();
    this.setState({store});
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <Routes/>
      </Provider>
    );
  }
}
