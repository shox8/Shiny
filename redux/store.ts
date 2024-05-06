import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import auth from "./reducers/auth";
import posts from "./reducers/posts";

const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer, auth, posts },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
