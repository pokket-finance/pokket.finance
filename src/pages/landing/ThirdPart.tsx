import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1280px;
  height: 800px;
  padding: 0 calc((100% - 1440px) / 2 + 80px);
  margin-bottom: 0;
  margin-top: 85px;
`;

const InfoCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 85px;
`;

const InfoCard = styled.div`
  width: 490px;
  height: 140px;
  background-color: white;
  border-radius: 12px;
  padding: 60px;
  .cardTitle {
    font-size: 36px;
    font-weight: 700;
    color: #3f6de1;
  }
  .cardContent {
    font-size: 18px;
    font-weight: 400;
    color: #646464;
    margin-top: 32px;
  }
`;

const CommunityCard = styled.div`
  float: right;
  display: column;
  flex-direction: column;
  width: 600px;
  margin-top: 180px;
  .communityTitle {
    font-size: 36px;
    font-weight: 700;
    color: #3f6de1;
    margin-bottom: 32px;
  }
  .communityContent {
    font-size: 18px;
    font-weight: 400;
    color: #646464;
  }
`;

const ThirdPart = () => {
  return (
    <Container>
      <InfoCardContainer>
        <InfoCard>
          <div className="cardTitle">HODL Booster.</div>
          <div className="cardContent">
            When you're comfortable with a bit more risk for a shot at more
            return. Risk-management is optimized for scalping just a bit more
            alpha.
          </div>
        </InfoCard>
        <InfoCard>
          <div className="cardTitle">VOL Alpha.</div>
          <div className="cardContent">
            A vault designed to take maximum advantage of large moves. A perfect
            fit for periods of uncertainty, when FUD runs rampant and most go
            paper-hands.
          </div>
        </InfoCard>
      </InfoCardContainer>
      <CommunityCard>
        <div className="communityTitle">GOVERNED BY THE COMMUNITY.</div>
        <div className="communityContent">
          The Pokket Protocol is overseen by a decentralised <br />
          community of passionate PKKT token holders.
          <br />
          <br /> Holders and their delegates propose and vote on upgrades to{' '}
          <br />
          the protocol.
        </div>
      </CommunityCard>
    </Container>
  );
};

export default ThirdPart;
