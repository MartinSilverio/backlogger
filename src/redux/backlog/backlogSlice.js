import { createSlice } from '@reduxjs/toolkit';

const backlogSlice = createSlice({
  name: 'backlog',
  initialState: { list: [] },
  reducers: {
    addGame: (state, action) => {
      const { id } = action.payload;
      state.list.push(id);
    },
    removeGame: (state, action) => {
      const { id } = action.payload;
      return state.list.filter((gameId) => gameId !== id);
    },
  },
});

export const { addGame, removeGame } = backlogSlice.actions;
export default backlogSlice.reducer;
