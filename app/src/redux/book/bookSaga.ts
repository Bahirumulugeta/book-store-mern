
import { Effect, call, put } from "redux-saga/effects";
import axios from "axios";

import { getBooksFailure, getBooksSuccess } from "./bookSlice";
import { Base_URL } from "@/lib/utils";


export function* getBooks(): Generator<Effect, void, any> {
    try {
        const response = yield call(axios.get, `${Base_URL}/books`);
        console.log("Resppinse:", response)
        yield put(getBooksSuccess(response?.data));
    } catch (error: any) {
        console.log("error", error)
        if (error?.response) {
            const { data } = error.response;
            yield put(getBooksFailure(data?.error))
        } else {
            yield put(getBooksFailure('Error occurred'));
        }

    }
}
