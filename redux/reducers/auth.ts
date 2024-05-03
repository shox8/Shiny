import { User } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";
import { login, member, register } from "../services/auth";
import { token, userId } from "@/app/base";

interface State {
  user: User;
  member: User;
}

const initialState: State = { user: {}, member: {} };

type UserAuthData = User & { token: string };

const equal = (
  state: typeof initialState,
  action: { payload: UserAuthData }
) => {
  state.user = action.payload;
  localStorage.setItem(token, action.payload.token);
  localStorage.setItem(userId, action.payload.id);
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
      .addMatcher(login.matchFulfilled, equal)
      .addMatcher(member.matchFulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logout } = auth.actions;
export default auth.reducer;
