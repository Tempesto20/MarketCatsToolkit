import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { FilterSliceState, Sort, SortPropertyEnum } from './types';



export type SortProps = {
  //type - можно передать что угодно, как константа для TS
  name: string;
  sortProperty: string;
};

export type SellProps = {
  //type - можно передать что угодно, как константа для TS
  name: string;
  value: number;
};

export interface FilterItemSlice {
  //interface - типизирует только объект {}
  currentPage: number;
  sell: SellProps;
  sort: SortProps;
}

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
    setIsSell(state, action: PayloadAction<SellProps>) {
      state.sell = action.payload;
    },
    setSortType(state, action: PayloadAction<SortProps>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setIsSell, setSortType, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
