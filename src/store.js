import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers/allReducers';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "my-secret-persist-key",
  storage
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export default store;