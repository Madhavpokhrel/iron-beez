import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  index: 0,
};

const checkTab = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setLoginTab: (state, action) => {
      state.index = 0;
      console.log('Login Click', state.index);
    },
    setSignupTab: (state, action) => {
      state.index = 1;
      console.log('Signup Click', state.index);
    },
    setTab: (state) => {
      state.index === 0 ? (state.index = 1) : (state.index = 0);
    },
  },
});

export const { setLoginTab, setSignupTab, setTab } = checkTab.actions;

export default checkTab.reducer;
