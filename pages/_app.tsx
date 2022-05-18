import React from 'react'
import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';
import {store} from '../store';

function MyApp({
                   Component, pageProps,
               }: AppProps) {
    return (
        <Provider store={store}>
            {/*@ts-ignore*/}
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;