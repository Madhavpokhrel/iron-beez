import React from 'react';
import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import allReducers from './components/Reducers';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux/es/exports';
import {
  legacy_createStore as createStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
