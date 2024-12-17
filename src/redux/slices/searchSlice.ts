// src/redux/slices/searchSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchUsers } from "../../services/api";

export const fetchUsers = createAsyncThunk(
  "search/fetchUsers",
  async ({ query, page }: { query: string; page: number }, thunkAPI) => {
    try {
      return await searchUsers(query, page);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    users: [] as any[],
    isLoading: false,
    error: null,
    page: 1,
    query: "",
  },
  reducers: {
    resetState: (state) => {
      state.users = [];
      state.page = 1;
      state.query = "";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = [...state.users, ...action.payload.items];
        state.page += 1;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = searchSlice.actions;
export default searchSlice.reducer;
