import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostType } from "../../types/PostType";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: ({ query }) => ({
    getAllPosts: query<PostType, undefined>({ query: () => "/posts" })
  })
});

export const { useGetAllPostsQuery } = postAPI;