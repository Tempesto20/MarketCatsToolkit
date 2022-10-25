import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import catsSlice from './slices/catsSlice';
import favoriteSlice from './slices/favoriteSlice';
import asyncThunkSlice from './slices/asyncThunkSlice';
import fullCatSlice from './slices/fullCatSlice';

// combineReducers - неолбходим для подключения нескольких слайсов
const rootReducer = combineReducers({
  filterSlice,
  cartSlice,
  catsSlice,
  favoriteSlice,
  asyncThunkSlice,
  fullCatSlice,
});

// Конфиг - ключ / знаечний, временное хранилище
const persistConfig = {
  key: 'root',
  storage,
};

// Персистированный редюсер
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Теперь тут не описывается редюсер, а передаётся заранее подготовленный из комбайна rootReducer => persistedReducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
// RootState - нужен для получение всех значений их хранилища для типизации

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// export default store;

// export const store = configureStore({
//   reducer: {
//     filterSlice,
//     cartSlice,
//     catsSlice,
//     favoriteSlice,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;

// type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
