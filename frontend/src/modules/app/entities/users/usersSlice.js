import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ],
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    deleteUserById: (state, action) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default usersSlice.reducer;

export const { setUsers, deleteUserById } = usersSlice.actions;
