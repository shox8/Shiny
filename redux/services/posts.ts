import { Post } from "@/app/types";
import { api } from "../api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    upload: builder.mutation<{ url: string }, FormData>({
      query: (data) => ({
        url: "/images",
        method: "POST",
        body: data,
      }),
    }),
    post: builder.mutation<Post, Post>({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useUploadMutation, usePostMutation } = authApi;
export const {
  endpoints: { upload, post },
} = authApi;
