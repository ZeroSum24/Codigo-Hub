import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

// this function detects most providers injected at window.ethereum
import detectEthereumProvider from '@metamask/detect-provider';

import App from './components/App';
import reducers from './reducers';
import AuthErrorView from "./pages/error/AuthErrorView";

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk)
);

function EthereumApp(props) {
    let ethereumApp;

    if (props.provider) {
        ethereumApp = (<App/>);
    } else {
        ethereumApp = (<AuthErrorView title={"Please install MetaMask!"}/>);
        console.log('Please install MetaMask!');
    }
    return ethereumApp
}

function startApp(provider) {
    ReactDOM.render(
        <Provider store={store}>
            <EthereumApp provider={provider} />
        </Provider>,
        document.getElementById('root')
    );
}

detectEthereumProvider().then(provider => startApp(provider));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
