
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../../type';


const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action: PayloadAction<{ username: string }>) => {
            state.loading = false;
            state.user = action.payload;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        signupRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        signupSuccess: (state, action: PayloadAction<{ username: string }>) => {
            state.loading = false;
            state.user = action.payload;
        },
        signupFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    signupRequest,
    signupSuccess,
    signupFailure,
    logout,
} = authSlice.actions;
export default authSlice.reducer;
