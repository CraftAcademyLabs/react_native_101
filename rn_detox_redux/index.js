import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './state/store/configureStore';
import { registerRootComponent } from 'expo';

import App from './App';

const store = configureStore();

const ConnctedApp = () => <Provider store={store}><App /></Provider>

registerRootComponent(ConnctedApp);