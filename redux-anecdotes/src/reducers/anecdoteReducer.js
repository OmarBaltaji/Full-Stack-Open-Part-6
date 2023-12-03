import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote (state, action) {
      return state.map(anecdote => {
        if (anecdote.id === action.payload.id) {
          return action.payload;
        }
        return anecdote;
      });
    },
    appendAnecdote (state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    }
  }
})

export const { voteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

export const initialAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content);
    dispatch(appendAnecdote(newAnecdote));
  }
}

export const updateAnecdote = (anecdote) => {
  return async dispatch => {
    const modifiedAnecdote = await anecdoteService.update(anecdote);
    dispatch(voteAnecdote(modifiedAnecdote));
  }
}

export default anecdoteSlice.reducer;