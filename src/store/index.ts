import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./combineReducers ";
const Store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
//infer the type of makeStore
export type AppStore = ReturnType<typeof Store>;
//infer the `RootState` and `Appdispatch` types from the store itseft
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default Store;
