import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './slice';


const persistConfig = { key: "root", storage, version: 1 };
const reducer = combineReducers({
  userReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
 
});

const persistor = persistStore(store);

export { store, persistor };
