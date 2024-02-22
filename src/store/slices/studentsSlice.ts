import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Student } from "../../types/Student";

export const loadStudents = createAsyncThunk( 
    "students/loadStudents",
    async () => {
        const resp = await fetch ("http://127.0.0.1:5501/students.json");
        const data = await resp.json();
        return data;
    }
)

const initialState: {list: Student[], status: string} = {
    list: [],
    status: "ready"
};

const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addMark: (state, {payload}) => {
            const{id, mark} = payload;
            const target: Student | undefined = state.list.find((student) => student.id === id);
            target && target.marks.push(mark);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadStudents.fulfilled, (state, {payload}) => {
            state.list = payload;
            // console.log(payload);
            state.status = "ready";
        })
        .addCase(loadStudents.pending, (state) => {
            state.status = "loading";
        })
        .addCase(loadStudents.rejected, (state) => {
            state.status = "error";
        })
    }

});

export const { addMark } = studentsSlice.actions;

export default studentsSlice.reducer;