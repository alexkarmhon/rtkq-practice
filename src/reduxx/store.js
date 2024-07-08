import { configureStore, } from "@reduxjs/toolkit";
import {
  persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import { reducer } from "./reducer";
import { productsAPI } from "./products/productsApi";

const persistConfig = {
  key: 'todos',
  storage,
  blacklist: ['counter', 'products', 'contacts', 'news'],
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsAPI.middleware),
})

export const persistor = persistStore(store);