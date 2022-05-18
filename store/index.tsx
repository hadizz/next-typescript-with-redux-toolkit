import {
    Action,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice'
import kanyeReducer from './features/kanyeSlice'

export const store = configureStore({
    reducer: {
        // This is where we add reducers.
        // Since we don't have any yet, leave this empty
        counter: counterReducer,
        kanyeQuote: kanyeReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;