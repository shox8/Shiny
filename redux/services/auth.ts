import { User } from "@/app/types";
import { api } from "../api";

type ResponseData = User & { token: string };

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<ResponseData, User>({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation<ResponseData, User>({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    member: builder.query<ResponseData, string>({
      query: (id) => ({
        url: `/member/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useMemberQuery } =
  authApi;
export const {
  endpoints: { register, login, member },
} = authApi;
