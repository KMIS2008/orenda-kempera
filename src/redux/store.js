import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { catalogReducer } from "./catalogSlice";
import {
  persistStore,
//   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  
} from "redux-persist";

// export const store = configureStore({
//   reducer: {
//     catalog: catalogReducer,
//   },

//   middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// export const persistor = persistStore(store);