import './App.css';

import React, { Component } from 'react';

import { HashRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import Root from './components/Root';
import Routes from './components/Routes';
import configureStore from './store/configureStore';
import { persistStore } from 'redux-persist'

const store = configureStore();
const persistor = persistStore(store);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Root>
            <HashRouter>
                <Routes />
            </HashRouter>
          </Root>
        </PersistGate>
      </Provider >
    );
  }
}

export default App;
