import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coin: "bitcoin"
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCoin: (state, action) => {
      state.coin = action.payload.coin;
    },
  },
});

export const {setCoin} = appSlice.actions;

export const selectCoin = (state) => state.app.coin;

export default appSlice.reducer;