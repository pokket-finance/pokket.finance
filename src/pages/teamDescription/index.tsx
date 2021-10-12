import styled, { DefaultTheme } from 'styled-components';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AvatarCard from '@/components/avatarCard';

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
  color: ${(props) => props.theme.color.bodyfontColorLevel1};
  padding-bottom: 50px;
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
        <TitleContainer>Meet the Pokket team</TitleContainer>
        <AvatarCard />
      </BodyContainer>
      <Footer />
    </LandingContainer>
  );
};

export default LandingPage;
