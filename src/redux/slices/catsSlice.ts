import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SellProps } from './filterSlice';

export type SearchCatsParams = {
  // id:string;
  sortBy: string;
  order: string;
  currentPage: number;
  isSell: string | number;
  // isSell: SellProps;
};

// Это бизнес-логика, вынес из UI - в редакс, те це UX
//Чтобы была возможно повторного использования или исключения
export const fetchCats = createAsyncThunk(
  'cats/fetchCatsStatus',
  async (params: SearchCatsParams) => {
    const { sortBy, order, currentPage, isSell } = params;
    const { data } = await axios.get(
      `https://633db211f2b0e623dc79b585.mockapi.io/cats?page=${currentPage}&limit=6&${isSell}&sortBy=${sortBy}&order=${order}`,
    );

    // console.log(data);
    return data as CatsItems[];
  },
);

type CatsItems = {
  id: string;
  img: string;
  name: string;
  buy: string;
  breed: string;
  description: string;
  discount: number;
  price: number;
  age: number;
  isSell: number;
  isFavorite: boolean;
};

interface CatsSliceState {
  items: CatsItems[];
  status: 'loading' | 'success' | 'error';
}

// первоначальное состояние
//Сохранение пицц в реакте
const initialState: CatsSliceState = {
  items: [],
  status: 'loading', // loading | success | error
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    setCats(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCats.pending, (state, action) => {
      //console.log(state + 'идёт отправка');
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      // console.log(state + 'выполнилось');
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchCats.rejected, (state, action) => {
      //console.log('была ошибка');
      state.status = 'error';
      state.items = [];
    });
  },
});
export const { setCats } = catsSlice.actions;
// необходимо для импортирования этой переменной в дром файле
// чтобы вытащить какие-либо ACTIONS, те reducers = actions;

export default catsSlice.reducer;
