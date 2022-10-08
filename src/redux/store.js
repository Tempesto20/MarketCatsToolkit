import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import catsSlice from './slices/catsSlice';

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    catsSlice,
  },
});

// export type RootState = ReturnType<typeof store.getState>;

// type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
