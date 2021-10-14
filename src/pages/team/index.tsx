import styled, { DefaultTheme } from 'styled-components';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Partners from '@/components/partners';
import AvatarCard from '@/components/avatarCard';

const LandingContainer = styled.div`
  background-color: ${(props) => props.theme.color.bodyBG};
`;

const BodyContainer = styled.div`
  padding: 5% 0;
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

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 60px 80px 70px;
  background: ${(props) =>
    props.theme.name === 'Light' ? ' #eceff8' : 'rgba(255, 255, 255, 0.07)'};

  .avatarContainer {
    display: flex;
    flex-direction: column;
    padding: 60px 80px 70px;
    flex-direction: row;
    flex-wrap: wrap;
    .avatarCard {
      width: 33%;
      margin-top: 24px;
    }
  }

  .partnersContainer {
    display: flex;
    flex-direction: column;
    padding: 60px 80px 0px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const TransparentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 60px 80px 70px;
  .avatarContainer {
    display: flex;
    flex-direction: column;
    padding: 60px 80px 70px;
    flex-direction: row;
    flex-wrap: wrap;
    .avatarCard {
      width: 33%;
      margin-top: 24px;
    }
  }
`;

const Title = styled.div`
  color: #3f6de1;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
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
        <TeamContainer>
          <Title>Core Team</Title>
          <div className="avatarContainer">
            <AvatarCard className="avatarCard" />
            <AvatarCard className="avatarCard" />
            <AvatarCard className="avatarCard" />
            <AvatarCard className="avatarCard" />
            <AvatarCard className="avatarCard" />
            <AvatarCard className="avatarCard" />
          </div>
        </TeamContainer>
        <TransparentContainer>
          <Title>Liquidity Partners</Title>
          <div className="avatarContainer">
            <AvatarCard className="avatarCard" />
            <AvatarCard className="avatarCard" />
            <AvatarCard className="avatarCard" />
          </div>
        </TransparentContainer>
        <TeamContainer>
          <Title>Development Partners</Title>
          <div className="partnersContainer">
            <Partners title="" />
          </div>
        </TeamContainer>
        <TransparentContainer>
          <Title>Liquidity Partners</Title>
          <div className="avatarContainer">
            <AvatarCard className="avatarCard" />
            <AvatarCard className="avatarCard" />
            <AvatarCard className="avatarCard" />
          </div>
        </TransparentContainer>
      </BodyContainer>
      <Footer />
    </LandingContainer>
  );
};

export default LandingPage;
