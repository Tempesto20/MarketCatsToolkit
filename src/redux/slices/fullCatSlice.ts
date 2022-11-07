import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export type SearchCatsParams = {
  id: string | undefined;
};

// Это бизнес-логика, вынес из UI - в редакс, те це UX
//Чтобы была возможно повторного использования или исключения
export const axiosFullCat = createAsyncThunk(
  'fullCatSlice/axiosFullCatStatus',
  async (params: SearchCatsParams) => {
    const { id } = params;
    const { data } = await axios.get(`https://633db211f2b0e623dc79b585.mockapi.io/cats/` + id);
    console.log(data);
    //   console.log(id);
    return data as FullCatsItems[];
  },
);

export type FullCatsItems = {
  age: number;
  breed: string;
  buy: string;
  description: string;
  discount: number;
  id: string;
  img: string;
  isFavorite: boolean;
  isSell: number;
  name: string;
  price: number;
}
;

interface CatsSliceState {
  items: FullCatsItems[];
  status: 'loading' | 'success' | 'error';
}

// первоначальное состояние
//Сохранение пицц в реакте
const initialState: CatsSliceState = {
  items: [],
  status: 'loading', // loading | success | error
};

const fullCatSlice = createSlice({
  name: 'asyncThunkSlice',
  initialState,
  reducers: {
    setCats(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(axiosFullCat.pending, (state, action) => {
      //console.log(state + 'идёт отправка');
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(axiosFullCat.fulfilled, (state, action) => {
      //   console.log(state + 'выполнилось');
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(axiosFullCat.rejected, (state, action) => {
      //console.log('была ошибка');
      state.status = 'error';
      state.items = [];
    });
  },
});
export const { setCats } = fullCatSlice.actions;
// необходимо для импортирования этой переменной в дром файле
// чтобы вытащить какие-либо ACTIONS, те reducers = actions;

export default fullCatSlice.reducer;
