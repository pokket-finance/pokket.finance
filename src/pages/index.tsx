import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import TopPanel from '../components/layout/topPanel';

// eslint-disable-next-line react/prop-types
function Home({ updateTheme }) {
  return (
    <div>
      <Head>
        <title>POKKET: A Smarter Way To Invest In Cryptocurrency</title>
        <meta
          name="description"
          content="POKKET is a new cryptocurrency savings account service to help you earn interest returns on your crypto assets. 6-8% APY on Bitcoin lending, +100 other assets!"
        />
      </Head>
      <TopPanel updateTheme={updateTheme} />
      <div>123456</div>
    </div>
  );
}

export default Home;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
