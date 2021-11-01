import styled from 'styled-components';

import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
// import VOLAlpha from '@/components/volAlpha';
// import HODLBooster from '@/components/hodlBooster';
// import Partners from '@/components/partners';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const LandingContainer = styled.div`
  background-color: ${(props) => props.theme.color.bodyBG};
`;

const LandingPage = () => {
  return (
    <LandingContainer>
      <Header />
      <FirstPart />
      <SecondPart />
      <Footer />
    </LandingContainer>
  );
};

export default LandingPage;
