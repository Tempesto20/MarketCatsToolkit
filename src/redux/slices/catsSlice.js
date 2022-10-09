import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//createAsyncThunk
// Это бизнес-логика, вынесли из UI - в редакс
//Чтобы была возможно повторного использования или исключения
export const fetchCats = createAsyncThunk('pizzas/fetchCatsStatus', async (params) => {
  const { sortBy, order } = params;
  const { data } = await axios.get(
    `https://633db211f2b0e623dc79b585.mockapi.io/cats?sortBy=${sortBy}&order=${order}`,
  );
  //console.log(response.data);
  return data;
});

// первоначальное состояние
//Сохранение пицц в реакте
const initialState = {
  items: [],
  status: 'loading', // Loading | success | error
};
const catsSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas(state, action) {
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
      //console.log(state + 'выполнилось');
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
export const { setPizzas } = catsSlice.actions;
// необходимо для импортирования этой переменной в дром файле
// чтобы вытащить какие-либо ACTIONS, те reducers = actions;

export default catsSlice.reducer;
