import styled, { DefaultTheme } from 'styled-components';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const LandingContainer = styled.div`
  background-color: ${(props) => props.theme.color.bodyBG};
`;

const BodyContainer = styled.div`
  padding: 5% 5%;
  user-select: none;
`;

const TitleContainer = styled.div`
  text-align: center;
  user-select: none;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  color: #323232;
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
        <TitleContainer>Our Roadmap</TitleContainer>
      </BodyContainer>
      <Footer />
    </LandingContainer>
  );
};

export default LandingPage;
