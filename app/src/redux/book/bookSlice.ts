import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { Book, BookState } from "../../../type";



const initialState: BookState = {
    books: [],
    loading: false,
    error: false,
    errorMsg: null,
};

const BookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        getBooksStart: (state) => {
            state.loading = true;
            state.errorMsg = null;
        },
        getBooksSuccess: (state, action: PayloadAction<Book[]>) => {
            state.loading = false;
            state.books = action.payload;
        },
        getBooksFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.errorMsg = action.payload;
        }


    },
});

export const {
    getBooksStart,
    getBooksSuccess,
    getBooksFailure,

} = BookSlice.actions;
export default BookSlice.reducer;