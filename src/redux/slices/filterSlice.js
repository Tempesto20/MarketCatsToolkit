import { createSlice } from '@reduxjs/toolkit';
// import { FilterSliceState, Sort, SortPropertyEnum } from './types';

const initialState = {
  // sell: 0,
  currentPage: 1,
  sell: {
    name: 'Все',
    value: 0,
  },
  sort: {
    name: 'сначала взрослые',
    sortProperty: 'age',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setIsSell(state, action) {
      state.sell = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setIsSell, setSortType, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
