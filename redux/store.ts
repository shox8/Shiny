import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import auth from "./reducers/auth";

const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer, auth },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
