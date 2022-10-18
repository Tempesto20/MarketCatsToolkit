import { createSlice } from '@reduxjs/toolkit';
// import { FilterSliceState, Sort, SortPropertyEnum } from './types';

const initialState = {
  // categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'сначала взрослые',
    sortProperty: 'age',
  },
  checkpoint: {
    name: 'Все',
    value: 'Купить' && 'Продан',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // setCategoryId(state, action) {
    //   state.categoryId = action.payload;
    // },
    // setSearchValue(state, action) {
    //   state.searchValue = action.payload;
    // },
    setCheckpoinValue(state, action) {
      state.checkpoint = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    // setFilters(state, action) {
    //   if (Object.keys(action.payload).length) {
    //     // state.currentPage = action.payload.currentPage;
    //     // state.categoryId = action.payload.categoryId;
    //     state.sort = action.payload.sort;
    //   } else {
    //     // state.currentPage = 1;
    //     // state.categoryId = 0;
    //     state.sort = {
    //       name: 'юные',
    //       sortProperty: '-age',
    //     };
    //   }
    // },
  },
});

export const { setCheckpoinValue, setSortType, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
