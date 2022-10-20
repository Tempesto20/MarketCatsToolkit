import { createSlice } from '@reduxjs/toolkit';
// import { FilterSliceState, Sort, SortPropertyEnum } from './types';

const initialState = {
  // categoryId: 0,
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
  // checkpoint: {
  //   name: 'Отсутсвуют в продаже',
  //   buy: 'Продан',

  //   // name: 'Отсутсвуют в продаже',
  //   // isSell: false,
  // },
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

export const { setIsSell, setSortType, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
