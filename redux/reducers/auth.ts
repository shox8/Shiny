import { User } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../services/auth";
import { key } from "@/app/base";

interface State {
  user: User;
}

const initialState: State = { user: {} };

type UserAuthData = User & { token: string };

const equal = (
  state: typeof initialState,
  action: { payload: UserAuthData }
) => {
  state.user = action.payload;
  localStorage.setItem(key, action.payload.token);
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(register.matchFulfilled, equal)
      .addMatcher(login.matchFulfilled, equal);
  },
});

export default auth.reducer;
