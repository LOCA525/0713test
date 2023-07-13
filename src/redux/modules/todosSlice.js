import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from "../../utils";

export const __addToDo = createAsyncThunk("__addToDo", async (payload, thunkAPI) => {
  setTimeout(() => {
    thunkAPI.dispatch(addTodo(payload));
  }, 2000);
});

export const __deleteTodo = createAsyncThunk("__deleteToDo", async (payload, thunkAPI) => {
  setTimeout(() => {
    thunkAPI.dispatch(deleteTodo(payload));
  }, 2000);
});

const initialState = {
  list: [{ title: "test1", body: "body1", id: 0 }],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
