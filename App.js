// import React from 'react';
// import {createStore, applyMiddleware} from 'redux';
// import { persistStore, autoRehydrate } from 'redux-persist';
// import reducer from './reducers/index';
// import thunk from 'redux-thunk';
// import {Provider} from 'react-redux';               
// import Routes from './routes';
// import { AsyncStorage } from 'react-native';

// //const store = createStore(reducer, applyMiddleware(thunk));

// const createAppStore = applyMiddleware(thunk)(createStore);

// export default class App extends React.Component {
//   state={
//     store: null,
//   }

//   configStore = async() => {
//     const store = autoRehydrate()(createAppStore)(reducer);
//     persistStore(store, { storage: AsyncStorage});
//     return store;
//   }
  

//   loadStore = async() => {
//     const store = await this.configStore();
//     console.log(store);
//     this.setState({store});
//   }

//   render() {
//     if(!this.state.store) return null;
//     return (
//       <Provider store={this.state.store}>
//         <Routes/>
//       </Provider>
//     );
//   }
// }


import React from 'react';
import {Provider} from 'react-redux';
import Routes from './routes';
import configureStore from './config-store';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      storeCreated: false,
      store: null,
    };
  }

  componentDidMount() {
    configureStore()
      .then(({ persistor, store }) =>
        this.setState({ persistor, store, storeCreated: true }));
  }

  render() {
    if (!this.state.storeCreated) return null;
    return (
      <Provider store={this.state.store}>
        <PersistGate persistor={this.state.persistor}>
          <Routes/>
        </PersistGate>
      </Provider>
    );
  }
}