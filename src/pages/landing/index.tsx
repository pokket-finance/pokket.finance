import styled from 'styled-components';

import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
import VOLAlpha from '@/components/volAlpha';
import HODLBooster from '@/components/hodlBooster';
import Partners from '@/components/partners';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const LandingContainer = styled.div`
  background-color: ${(props) => props.theme.color.bodyBG};
`;

const BodyContainer = styled.div`
  width: 1440px;
  padding: 0 calc((100% - 1440px) / 2);
  user-select: none;
  .partners {
    margin: 200px 0 140px;
  }
  .hodlMargin {
    margin-top: 150px;
  }
  .volMargin {
    margin-top: 80px;
  }
`;

const LandingPage = () => {
  return (
    <LandingContainer>
      <Header />
      <BodyContainer>
        <FirstPart />
        <SecondPart />
        <HODLBooster className="hodlMargin" />
        <VOLAlpha className="volMargin" />
        <Partners title="Our Partners" className="partners" />
      </BodyContainer>
      <Footer />
    </LandingContainer>
  );
};

export default LandingPage;
