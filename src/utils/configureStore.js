import {applyMiddleware, createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import reducers from "../reducers";
import ReduxThunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(ReduxThunk)
  );
  let persistor = persistStore(store);
  return { store, persistor }
}
