import { playerSlice } from "./redux/slice/PlayerSlice";
import { configureStore } from "@reduxjs/toolkit";

//const store = createStore(counterReducer);
const store = configureStore({
  reducer: playerSlice.reducer,
});

export default store;
