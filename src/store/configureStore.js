import {applyMiddleware, createStore} from 'redux';

import { persistReducer } from 'redux-persist'
import rootReducer from '../reducers/rootReducer';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    persistReducer({ key: 'root', storage, whitelist: ['login', 'ui'] }, rootReducer),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}