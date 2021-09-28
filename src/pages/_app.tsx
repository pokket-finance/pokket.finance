import '@/global.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

import App from 'next/app';

import PageLoader from '@/components/PageLoader';

class ReactApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <PageLoader />
        <Head>
          <title>POKKET</title>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <NotificationContainer />
        <Component {...pageProps} />
      </>
    );
  }
}

export default appWithTranslation(ReactApp);
