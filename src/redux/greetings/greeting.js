import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/v1/greetings';

const FETCH = 'hello_rails_frontend/greetings/FETCH';

const fetchGreeting = createAsyncThunk(FETCH, async () => {
  const response = await fetch(API_URL);
  const greetings = await response.json();
  return greetings;
});

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.fulfilled, (state, action) => action.payload)
      .addDefaultCase((state) => state);
  },
});

const greetingsReducer = greetingSlice.reducer;
export default greetingsReducer;
export { fetchGreeting };
