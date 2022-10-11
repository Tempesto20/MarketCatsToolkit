import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
  isFavorite: false,
  // totalPrice: cartData.totalPrice,
  // items: cartData.items,

  //Способ решения, вытащить из массива лайки и изменить значение
};
//const [like, setLike] = React.useState(isFavorite);
export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setLike(state, action) {
      state.isFavorite = action.payload;
    },
    setAddLike(state, action) {
      const findItem = state.items.find((object) => object.id === action.payload.id);
      //console.log(findItem.items);
      //поиск объекта в массиве
      if (findItem) {
        //Если в массиве уже имеется данный объект, то увелись его значение на +1
        findItem.count++;
        //console.log(findItem);
        //state.items.push(action.payload);
      } else {
        //Если в массиве данного объект не имеется, то будем добавлять
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      // state.totalPrice = calcTotalPrice(state.items);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    setRemoveLike(state, action) {
      // console.log('state ' + ' ' + state);
      // console.log('action ' + ' ' + action);
      state.items = state.items.filter((object) => object.id !== action.payload);
      // state.totalPrice = calcTotalPrice(state.items);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    setClearLikes(state) {
      //console.log(action);
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

//console.log(counterSlice.actions);

export const { setAddLike, setRemoveLike, setClearLikes, setLike } = favoriteSlice.actions;
// необходимо для импортирования этой переменной в дром файле
// чтобы вытащить какие-либо ACTIONS, те reducers = actions;

export default favoriteSlice.reducer;
