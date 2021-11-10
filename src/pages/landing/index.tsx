import styled from 'styled-components';

import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';
import FourthPart from './FourthPart';
// import VOLAlpha from '@/components/volAlpha';
// import HODLBooster from '@/components/hodlBooster';
// import Partners from '@/components/partners';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const LandingContainer = styled.div`
  background-color: ${(props) => props.theme.color.bodyBG};
  width: 100vw;
`;

const LandingPage = () => {
  return (
    <LandingContainer>
      <Header />
      <FirstPart />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <Footer />
    </LandingContainer>
  );
};

export default LandingPage;
