import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import { token as TK } from "@/app/base";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
  prepareHeaders(headers, { getState }) {
    const token =
      (getState() as RootState).auth.user.token || localStorage.getItem(TK);

    if (token && token !== null) {
      headers.set("token", token);
    }
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
