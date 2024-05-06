import { Post } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";
import { post, upload } from "../services/posts";

interface State {
  posts: Post[];
  post: Post;
}

const initialState: State = { posts: [], post: { title: "", images: [] } };

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(upload.matchFulfilled, (state, action) => {})
      .addMatcher(post.matchFulfilled, (state, action) => {
        state.post = action.payload;
      });
  },
});

export const { setPost } = posts.actions;
export default posts.reducer;
