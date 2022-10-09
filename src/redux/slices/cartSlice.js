import { createSlice } from '@reduxjs/toolkit';
// import { calcTotalPrice } from '../../utils/calcTotalPrice';
// import { getCartFromLocalStorage } from '../../utils/getCartFromLocalStorage';

// первоначальное состояние
const initialState = {
  totalPrice: 0,
  items: [],
  // totalPrice: cartData.totalPrice,
  // items: cartData.items,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAddItem(state, action) {
      // const findItem = state.items.find((object) => object.id === action.payload.id);
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

    setRemoveItem(state, action) {
      //console.log(action);
      state.items = state.items.filter((object) => object.id !== action.payload);
      // state.totalPrice = calcTotalPrice(state.items);
      // state.totalPrice = state.items.reduce((sum, obj) => {
      //   return obj.price * obj.count - sum;
      // }, 0);

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price - sum;
      }, 0);
    },

    setClearItems(state) {
      //console.log(action);
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

//console.log(counterSlice.actions);

export const { setAddItem, setRemoveItem, setClearItems } = cartSlice.actions;
// необходимо для импортирования этой переменной в дром файле
// чтобы вытащить какие-либо ACTIONS, те reducers = actions;

export default cartSlice.reducer;

// setAddItem(state, action) {
//   state.items.push(action.payload);
//   //state.totalPrice = [...state.items, action.payload];
//   state.totalPrice = state.items.reduce((sum, obj) => {
//     return obj.price + sum;
//   }, 0);
// },

// export type CartItemSlice = {
//   //type - можно передать что угодно, как константа для TS
//   id: string ;
//   name: string;
//   price: number;
//   img: string;
//   type: string;
//   size: number;
//   rating: number;
//   count: number;
// };

// interface CartSliceState {
//   //interface - типизирует только объект {}
//   totalPrice: number;
//   items: CartItemSlice[];
// }

// const cartData =  getCartFromLocalStorage();
