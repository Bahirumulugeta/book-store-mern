// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import authReducer from "./auth/authSlice"
import bookReducer from "./book/bookSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


