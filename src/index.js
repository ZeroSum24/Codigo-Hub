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

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk)
);

function startApp(provider) {

    if (provider) {
        // From now on, this should always be true:
        // provider === window.ethereum
        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById('root')
        );
    } else {
        ReactDOM.render(
            <Provider store={store}>
                <div>Please install MetaMask!</div>
            </Provider>,
            document.getElementById('root')
        );
        console.log('Please install MetaMask!');
    }
}

detectEthereumProvider().then(provider => startApp(provider));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
