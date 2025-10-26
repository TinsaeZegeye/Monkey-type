import { configureStore } from "@reduxjs/toolkit";
import testConfigReducer from "./features/testConfigSlice";

export const store = configureStore({
  reducer: {
    testConfig: testConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
