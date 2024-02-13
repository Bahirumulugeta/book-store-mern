import { all, takeEvery } from "redux-saga/effects";
import { loginUser, signupUser } from "./auth/authSaga";
import { loginRequest, signupRequest } from "./auth/authSlice";
import { getBooks } from "./book/bookSaga";
import { getBooksStart } from "./book/bookSlice";

export default function* rootSaga() {
    yield all([
        takeEvery(signupRequest.type, signupUser),
        takeEvery(loginRequest.type, loginUser),
        takeEvery(getBooksStart.type, getBooks)

    ]);
}