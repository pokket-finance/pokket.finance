import '@/global.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import App from 'next/app';

import PageLoader from '@/components/PageLoader';
import lightTheme from '@/theme/Light';

class ReactApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  state = {
    dynamicPageThemes: [],
  };

  updateTheme = (dynamicTheme) => {
    const { dynamicPageThemes } = this.state;
    const { route } = this.props.router;
    const pageIndex = dynamicPageThemes.findIndex(
      (page) => page.route === route,
    );

    if (pageIndex === -1) {
      dynamicPageThemes.push({ route, dynamicTheme });
    } else {
      dynamicPageThemes[pageIndex] = { route, dynamicTheme };
    }

    this.setState({ dynamicPageThemes });
  };

  getDynamicPageTheme = () => {
    const { route } = this.props.router;
    const { dynamicPageThemes } = this.state;
    const dynamicPageTheme = dynamicPageThemes.find(
      (pageTheme) => pageTheme.route === route,
    );

    return dynamicPageTheme ? dynamicPageTheme.dynamicTheme : lightTheme;
  };

  render() {
    const { Component, pageProps } = this.props;
    const dynamicTheme = this.getDynamicPageTheme();
    return (
      <>
        <ThemeProvider theme={dynamicTheme}>
          <PageLoader />
          <Head>
            <title>POKKET</title>
            <link rel="shortcut icon" href="/favicon.ico" />
          </Head>
          <NotificationContainer />
          <Component {...pageProps} updateTheme={this.updateTheme} />
        </ThemeProvider>
      </>
    );
  }
}

export default appWithTranslation(ReactApp);
