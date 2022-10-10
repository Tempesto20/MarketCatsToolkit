import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Это бизнес-логика, вынес из UI - в редакс, те це UX
//Чтобы была возможно повторного использования или исключения
export const fetchCats = createAsyncThunk('cats/fetchCatsStatus', async (params) => {
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
export const { setPizzas, setAxios, setCatLength } = catsSlice.actions;
// необходимо для импортирования этой переменной в дром файле
// чтобы вытащить какие-либо ACTIONS, те reducers = actions;

export default catsSlice.reducer;
