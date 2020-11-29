import { AppProps } from 'next/app';
import { FC } from "react";
import { wrapper } from '../modules/Store';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    console.log('Registered log rocket');
    LogRocket.init('07xsnw/streamdota');
    setupLogRocketReact(LogRocket);
}

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);