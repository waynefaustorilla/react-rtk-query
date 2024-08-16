import { configureStore } from "@reduxjs/toolkit";
import { postAPI } from "./slices/DummySlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [postAPI.reducerPath]: postAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;