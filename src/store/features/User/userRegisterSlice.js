import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL_DEV;
const registerUser = createAsyncThunk('user/signupUser', arg => {
  const { signupForm } = arg;
  return axios
    .post(
      `${BASE_URL}/api/sign-up`,

      JSON.stringify({
        firstName: signupForm.firstName,
        lastName: signupForm.lastName,
        phoneNumber: signupForm.phoneNumber,
        email: signupForm.email,
        password: signupForm.password,
        zipCode: signupForm.zipCode,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    )
    .then(res => res.data);
});

const initialState = {
  loading: false,
  signupUser: [],
  error: '',
};

const RegisterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.signupUser = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.signupUser = [];
      state.error = action.error.message;
    });
  },
});

export { registerUser };
export default RegisterSlice.reducer;
