import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserRequest } from '../api/user';

const initialState = {
  user: {
    id: null,
    firstName: 'John',
    lastName: 'Doe',
    loading: false
  }
};

export const getUser = createAsyncThunk(
  'users/getOne',
  async (id) => {
    const res = await getUserRequest(id);
    return res;
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: { },
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, state => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = { ...payload, loading: false }
      })
  }
});