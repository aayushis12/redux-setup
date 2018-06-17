import { createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import thunk from 'redux-thunk';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';



import rootReducer from './reducers/index';



const persistConfig = {

  key: 'root',

  stateReconciler: autoMergeLevel2,

  storage,

  whitelist: ['app'], // only app will be persisted

};



const persistedReducer = persistReducer(persistConfig, rootReducer);



const configStore = async () => {

  const store = createStore(persistedReducer, applyMiddleware(thunk));

  const persistor = persistStore(store);

  return { persistor, store };

};



export default configStore;