import styled from 'styled-components';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Partners from '@/components/partners';
import AvatarCard from '@/components/avatarCard';
import TeamData from '../../data/team';
import AdvisorData from '../../data/advisors';

const Container = styled.div`
  background-color: ${(props) => props.theme.color.bodyBG};
  width: 100vw;
`;

const BodyContainer = styled.div`
  padding-top: 5%;
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
  max-width: 1280px;
  padding: 60px calc((100% - 1440px) / 2 + 80px) 0;
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    props.theme.name === 'Light' ? ' #eceff8' : 'rgba(255, 255, 255, 0.07)'};

  @media only screen and (max-width: 1280px) {
    padding: 0;
  }
  .avatarContainer {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 60px 0 70px;
    flex-direction: row;
    flex-wrap: wrap;
    .avatarCard {
      margin-top: 24px;
    }
  }

  .partnersContainer {
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const TransparentContainer = styled.div`
  max-width: 1280px;
  padding: 60px calc((100% - 1440px) / 2 + 80px) 0;
  margin: 0 0 70px 0;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1280px) {
    padding: 0;
  }

  .avatarContainer {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 60px 0 70px;
    flex-direction: row;
    flex-wrap: wrap;
    .avatarCard {
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

const TeamPage = () => {
  return (
    <Container>
      <Header />
      <BodyContainer>
        <TitleContainer>Meet the Pokket team</TitleContainer>
        <TeamContainer>
          <Title>Core Team</Title>
          <div className="avatarContainer">
            {TeamData.map((member) => (
              <AvatarCard className="avatarCard" member={member} />
            ))}
          </div>
        </TeamContainer>
        <TransparentContainer>
          <Partners title="Liquidity Partners" />
        </TransparentContainer>
        <TeamContainer>
          <Title>Advisors</Title>
          <div className="avatarContainer">
            {AdvisorData.map((member) => (
              <AvatarCard className="avatarCard" member={member} />
            ))}
          </div>
        </TeamContainer>
      </BodyContainer>
      <Footer />
    </Container>
  );
};

export default TeamPage;
