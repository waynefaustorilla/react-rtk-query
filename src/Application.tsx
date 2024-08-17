import { useGetAllPostsQuery } from "./store/slices/DummySlice.ts";

export default function Application() {
  const { data } = useGetAllPostsQuery();

  return <code>{JSON.stringify(data)}</code>;
}