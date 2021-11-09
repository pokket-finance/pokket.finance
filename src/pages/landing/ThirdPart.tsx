import React from 'react';
import styled from 'styled-components';
import Dummy from '../../../public/assets/map.png';
import DummyDark from '../../../public/assets/mapdark.png';
import { LeftPoolCard, RightPoolCard } from '../../components/poolCard';

const Container = styled.div`
  max-width: 1280px;
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
  background-color: ${(props) => {
    return props.theme.name === 'Light' ? '#FFFFFF' : '#1D1F2B';
  }};
  border-radius: 12px;
  padding: 60px;
  .cardTitle {
    font-size: 36px;
    font-weight: 700;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#3f6de1' : '#FFFFFF';
    }};
  }
  .cardContent {
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#646464' : '#FFFFFF';
    }};
    margin: 32px 0 40px 0;
    padding: 0 0 32px 0;
    border-bottom: ${(props) => {
      return props.theme.name === 'Light'
        ? `1px solid #0000001a`
        : '1px solid #FFFFFF1A ';
    }};
  }
`;

const CommunityCard = styled.div`
  float: right;
  display: column;
  flex-direction: column;
  width: 500px;
  margin: auto 0 auto 0;
  .communityTitle {
    font-size: 36px;
    font-weight: 700;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#3f6de1' : '#ffffff';
    }};
    margin-bottom: 32px;
  }
  .communityContent {
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#646464' : '#FFFFFF99';
    }};
  }
`;

const SecondHalf = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  padding: 0 0 60px 0;
`;

const Image = styled.div`
  width: 52%;
  height: 400px;
  /* height: 680px; */
  /* margin-top: 40px; */
  /* margin-bottom: 0; */
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: ${(props) => {
    return props.theme.name === 'Light'
      ? `url('/assets/map.png')`
      : `url('/assets/mapdark.png')`;
  }};
  /* justify-content: center; */
  /* width: 675px; */
`;

const CopyWriteContainer = styled.div`
  display: column;
  flex-direction: column;
  padding: 0 0 120px 0;

  .copyTitle {
    font-size: 36px;
    font-weight: 700;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#3f6de1' : '#ffffff';
    }};
    margin-bottom: 32px;
  }
  .copyContent {
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#646464' : '#FFFFFF99';
    }};
  }
  .copyLink {
    font-size: 18px;
    color: #3f6de1;
    font-weight: 700;
    text-decoration: 2px underline;
    margin: 5px 0 0 0;
    cursor: pointer;
  }
`;

const ThirdPart = (props) => {
  const { theme } = props;
  console.log(props);

  return (
    <Container>
      <InfoCardContainer>
        <InfoCard>
          <div className="cardTitle">HODL Booster.</div>
          <div className="cardContent">
            When you&#39;re comfortable with a bit more risk for a shot at more
            return. Risk-management is optimized for scalping just a bit more
            alpha.
          </div>
          <LeftPoolCard />
        </InfoCard>
        <InfoCard>
          <div className="cardTitle">VOL Alpha.</div>
          <div className="cardContent">
            A vault designed to take maximum advantage of large moves. A perfect
            fit for periods of uncertainty, when FUD runs rampant and most go
            paper-hands.
          </div>
          <RightPoolCard />
        </InfoCard>
      </InfoCardContainer>

      <SecondHalf>
        <Image />
        <CommunityCard>
          <div className="communityTitle">GOVERNED BY THE COMMUNITY.</div>
          <div className="communityContent">
            The Pokket Protocol is overseen by a decentralised <br />
            community of passionate PKKT token holders.
            <br />
            <br /> Holders and their delegates propose and vote on upgrades to{' '}
            the protocol.
          </div>
        </CommunityCard>
      </SecondHalf>

      <CopyWriteContainer>
        <div className="copyTitle">THERE&#39;S NO OTHER.</div>
        <div className="copyContent">
          The best rates, best risk-management, low-fees and attentive staff.
          Collect yield with confidence.
        </div>
        <div className="copyLink">See for yourself.</div>
      </CopyWriteContainer>
    </Container>
  );
};

export default ThirdPart;