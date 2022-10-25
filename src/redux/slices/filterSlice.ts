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
  // sell: SellProps;
  sell: number;
  sort: SortProps;
}

const initialState = {
  currentPage: 1,
  sell: 0,
  // sell: {
  //   name: 'Все',
  //   value: 0,
  // },
  sort: {
    name: 'сначала взрослые',
    sortProperty: 'age',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setIsSell(state, action: PayloadAction<number>) {
      state.sell = action.payload;
    },
    // setIsSell(state, action: PayloadAction<SellProps>) {
    //   state.sell = action.payload;
    // },
    setSortType(state, action: PayloadAction<SortProps>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },

    // setFilters(state, action: PayloadAction<FilterItemSlice>) {
    //   //console.log(action);
    //   if (Object.keys(action.payload).length) {
    //     state.currentPage = Number(action.payload.currentPage);
    //     state.sell = <SellProps>(action.payload.sell);
    //     state.sort = action.payload.sort;
    //   } else {
    //     state.currentPage = 1;
    //     state.sell = {
    //       name: 'Все',
    //       value: 0,
    //     };
    //   }
    // },
  },
});

export const { setIsSell, setSortType, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
