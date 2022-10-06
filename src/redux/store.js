import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    filterSlice,
    // cart,
    // pizza,
  },
});


// export type RootState = ReturnType<typeof store.getState>;

// type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
