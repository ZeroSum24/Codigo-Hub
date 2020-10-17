import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react'

// this function detects most providers injected at window.ethereum
import detectEthereumProvider from '@metamask/detect-provider';
import { EthereumProvider } from '@metamask/detect-provider'; //TODO: This could probably go somewhere else

import App from './components/App';
import AuthErrorView from "./pages/error/AuthErrorView";
import configureStore from "./utils/configureStore";
import Loader from "./components/Loader";

function EthereumApp(props : { provider? : EthereumProvider }) {
    let ethereumApp;

    if (props.provider) {
        ethereumApp = (<App/>);
    } else {
        ethereumApp = (<AuthErrorView title={"Please install MetaMask!"}/>);
        console.log('Please install MetaMask!');
    }
    return ethereumApp
}

function startApp(provider : EthereumProvider) {
    const redux = configureStore();
    ReactDOM.render(
        <Provider store={redux.store}>
            <PersistGate loading={<Loader loadingText={"Loading Código Hub"} />} persistor={redux.persistor}>
                <EthereumApp provider={provider} />
            </PersistGate>
        </Provider>,
        document.getElementById('root')
    );
}

detectEthereumProvider().then(provider => startApp(provider));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
