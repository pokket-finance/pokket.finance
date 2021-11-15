import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LeftPoolCard, RightPoolCard } from '../../components/poolCard';

const Container = styled.div`
  max-width: 1280px;
  padding: 0 calc((100% - 1440px) / 2 + 80px);
  margin-bottom: 0;
  margin-top: 85px;

  @media only screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
    margin-top: 0;
  }
`;

const InfoCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 85px;

  @media only screen and (max-width: 1280px) {
    flex-direction: column;
    margin: 26px 0 0 0;
    width: 90%;
  }
`;

const InfoCard = styled.div`
  width: 490px;
  background-color: ${(props) => {
    return props.theme.name === 'Light' ? '#FFFFFF' : '#1D1F2B';
  }};
  border-radius: 12px;
  padding: 60px;

  @media only screen and (max-width: 1280px) {
    padding: 30px 16px;
    margin: 24px 0 0 0;
    width: 90%;
  }

  .cardTitle {
    font-size: 36px;
    font-weight: 700;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#3f6de1' : '#FFFFFF';
    }};

    @media only screen and (max-width: 1280px) {
      font-size: 24px;
    }
  }
  .cardContent {
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#646464' : '#FFFFFF99';
    }};
    margin: 32px 0 40px 0;
    padding: 0 0 32px 0;
    border-bottom: ${(props) => {
      return props.theme.name === 'Light'
        ? `1px solid #0000001a`
        : '1px solid #FFFFFF1A ';
    }};

    @media only screen and (max-width: 1280px) {
      font-size: 14px;
    }
  }
`;

const CommunityCard = styled.div`
  float: right;
  display: column;
  flex-direction: column;
  width: 500px;
  margin: auto 0 auto 0;

  @media only screen and (max-width: 1280px) {
    width: 315px;
    margin: 0 0 0 18px;
  }

  .communityTitle {
    font-size: 36px;
    font-weight: 700;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#3f6de1' : '#ffffff';
    }};
    margin-bottom: 32px;

    @media only screen and (max-width: 1280px) {
      font-size: 24px;
    }
  }
  .communityContent {
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#646464' : '#FFFFFF99';
    }};

    @media only screen and (max-width: 1280px) {
      font-size: 14px;
    }
  }
`;

const SecondHalf = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  padding: 0 0 60px 0;

  @media only screen and (max-width: 640px) {
    margin-top: 75px;
    padding: 0;
    flex-direction: column;
  }

  @media only screen and (max-width: 1280px) {
    flex-direction: flex;
    width: 100vw;
  }
`;

const Image = styled.div`
  width: 52%;
  height: 400px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: ${(props) => {
    return props.theme.name === 'Light'
      ? `url('/assets/map.png')`
      : `url('/assets/mapdark.png')`;
  }};

  @media only screen and (max-width: 1280px) {
    width: 500px;
    height: 250px;
    margin: 0 25px 0 0;
  }

  @media only screen and (max-width: 640px) {
    width: 325px;
    height: 250px;
    margin: 25px auto 0 auto;
  }
`;

const CopyWriteContainer = styled.div`
  display: column;
  flex-direction: column;
  padding: 0 0 120px 0;

  @media only screen and (max-width: 1280px) {
    padding: 0 18px 100px 18px;
  }

  .copyTitle {
    font-size: 48px;
    font-weight: 800;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#3f6de1' : '#ffffff';
    }};
    margin-bottom: 32px;

    @media only screen and (max-width: 1280px) {
      font-size: 24px;
    }
  }
  .copyContent {
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#646464' : '#FFFFFFDE';
    }};

    @media only screen and (max-width: 1280px) {
      font-size: 14px;
    }
  }
  .copyLink {
    font-size: 18px;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#3f6de1' : '#FFFFFFDE';
    }};
    font-weight: 700;
    text-decoration: 2px underline;
    margin: 5px 0 0 0;
    cursor: pointer;

    @media only screen and (max-width: 1280px) {
      font-size: 14px;
    }
  }
`;

const ThirdPart = () => {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  const updateSize = () => {
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  };

  useEffect(() => (window.onresize = updateSize), []);

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
        {size.x > 1280 ? <Image /> : ''}
        <CommunityCard>
          <div className="communityTitle">GOVERNED BY THE COMMUNITY.</div>
          <div className="communityContent">
            The Pokket Protocol is overseen by a decentralised community of
            passionate PKKT token holders.
            <br />
            <br /> Holders and their delegates propose and vote on upgrades to
            the protocol.
          </div>
        </CommunityCard>
        {size.x < 1280 ? <Image /> : ''}
      </SecondHalf>

      <CopyWriteContainer>
        <div className="copyTitle">THERE&#39;S NO OTHER.</div>
        <div className="copyContent">
          The best rates, risk-management, and low-fees. Collect yield with
          confidence.
        </div>
        <div className="copyLink">See for yourself.</div>
      </CopyWriteContainer>
    </Container>
  );
};

export default ThirdPart;
