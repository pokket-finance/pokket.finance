import { DefaultTheme } from 'styled-components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Footer from '../components/layout/footer';
import LandingPage from './landing';

function Home({ updateTheme }: { updateTheme: (prop: DefaultTheme) => void }) {
  return (
    <>
      <Head>
        <title>POKKET: A Smarter Way To Invest In Cryptocurrency</title>
        <meta
          name="description"
          content="POKKET is a new cryptocurrency savings account service to help you earn interest returns on your crypto assets. 6-8% APY on Bitcoin lending, +100 other assets!"
        />
      </Head>
      <LandingPage updateTheme={updateTheme} />
      <Footer />
    </>
  );
}

export default Home;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
