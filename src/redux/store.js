import { configureStore } from "@reduxjs/toolkit";
import { catalogReducer } from "./catalogSlice";
import {
  // persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  // persistReducer,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});



// import { configureStore } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
  
// } from "redux-persist";

// import { catalogReducer } from "./catalogSlice";
// import {favoriteReducer} from './favoriteSlice';

// const favoritePersistConfig = {
//     key: 'favorite',
//     storage,
//     whitelist: ['favorite'],
//   };

// export const store = configureStore({
//   reducer: {
//     catalog: catalogReducer,
//     favorite: persistReducer(favoritePersistConfig, favoriteReducer)
//   },

//   middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// export const persistor = persistStore(store);