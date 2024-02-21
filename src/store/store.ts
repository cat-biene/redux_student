import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slices/studentsSlice";
import { Student } from "../types/Student";

export  const store = configureStore({
    reducer: {
        students: studentReducer

    }
}) 

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
// export type RootState = {
//     students: Student[]
// }