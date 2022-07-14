import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersThunk = () => async (dispatch) => {
  let response = await axios("https://jsonplaceholder.typicode.com/users");
  console.log(response.data);
  dispatch(getData(response.data));
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getData: (state, action) => {
      state.users = action.payload;
    },
    addData: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const { getData, addData } = usersSlice.actions;

export default usersSlice.reducer;
