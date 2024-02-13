// sagas/authSaga.js
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {

    loginSuccess,
    loginFailure, 
    signupSuccess,
    signupFailure,

} from './authSlice';

export function* loginUser(action: any) {
    try {
        const { email, password } = action.payload;
        const response = yield call(() =>
            axios.post('/api/login', { email, password })
        );

        yield put(loginSuccess({ username: response.data.username }));
    } catch (error: any) {
        yield put(loginFailure(error.message));
    }
}

export function* signupUser(action: any) {
    try {
        const { firstName, lastName, email, password } = action.payload;
        const response = yield call(() =>
            axios.post('/api/signup', { firstName, lastName, email, password })
        );

        yield put(signupSuccess({ username: response.data.username }));
    } catch (error: any) {
        yield put(signupFailure(error.message));
    }
}

