import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL_DEV;

const loginUser = createAsyncThunk('user/loginUser', arg => {
  const { signinForm } = arg;
  console.log('signinForm', signinForm);
  const result = axios
    .post(
      `${BASE_URL}/api/sign-in`,

      JSON.stringify({
        email: signinForm.email,
        password: signinForm.password,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    )
    .then(res => res.data);
  return result;
});

const initialState = {
  loading: false,
  userSignin: [],
  error: '',
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userSignin = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export { loginUser };
export default UserSlice.reducer;
