import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Это бизнес-логика, вынес из UI - в редакс, те це UX
//Чтобы была возможно повторного использования или исключения
export const axiosCats = createAsyncThunk('asyncThunkSlice/axiosCatsStatus', async () => {
  const { data } = await axios.get(`https://633db211f2b0e623dc79b585.mockapi.io/cats`);
  // console.log(data);
  return data  as CatsItems[];
});

export type CatsItems = {
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

const asyncThunkSlice = createSlice({
  name: 'asyncThunkSlice',
  initialState,
  reducers: {
    setCats(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(axiosCats.pending, (state, action) => {
      //console.log(state + 'идёт отправка');
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(axiosCats.fulfilled, (state, action) => {
      //   console.log(state + 'выполнилось');
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(axiosCats.rejected, (state, action) => {
      //console.log('была ошибка');
      state.status = 'error';
      state.items = [];
    });
  },
});
export const {} = asyncThunkSlice.actions;
// необходимо для импортирования этой переменной в дром файле
// чтобы вытащить какие-либо ACTIONS, те reducers = actions;

export default asyncThunkSlice.reducer;
