import styled, { DefaultTheme } from 'styled-components';

import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';
import FourthPart from './FourthPart';
import Partners from './Partners';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const LandingContainer = styled.div`
  background-color: ${(props) => props.theme.color.bodyBG};
`;

const BodyContainer = styled.div`
  padding: 0 5%;
  user-select: none;
`;

const LandingPage = ({
  updateTheme,
}: {
  updateTheme: (prop: DefaultTheme) => void;
}) => {
  return (
    <LandingContainer>
      <Header updateTheme={updateTheme} />
      <BodyContainer>
        <FirstPart />
        <SecondPart />
        <ThirdPart />
        <FourthPart />
        <Partners />
      </BodyContainer>
      <Footer />
    </LandingContainer>
  );
};

export default LandingPage;
