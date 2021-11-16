import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

const Container = styled.div`
  background-color: ${(props) => {
    return props.theme.name === 'Light' ? '#13307e' : '#1D1F2B';
  }};

  /* background: linear-gradient(96.39deg, #13307e 0%, #355fca 100%); */

  padding: 100px calc((100% - 1440px) / 2 + 80px);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1280px) {
    width: 100%;
    padding: 0 0 80px 0;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;

const SponsorsContainer = styled.div`
  .test {
    font-size: 36px;
    font-weight: 700;
    color: white;

    @media only screen and (max-width: 1280px) {
      font-size: 24px;
      padding: 48px 0 48px 18px;
    }
  }
`;

const SponsorLogo = styled.div`
  margin: 70px 250px 0 0;
  width: 370px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1280px) {
    margin: 0;
    width: 100%;
    max-width: 370px;
    height: 110px;
  }
`;

const SponsorDeetContainer = styled.div`
  display: flex;
  margin-top: 100px;
  font-size: 18px;
  color: white;

  @media only screen and (max-width: 1280px) {
    margin: 60px 0;
    font-size: 14px;
    padding: 0 0 0 18px;
    width: 80%;
  }
`;

const ReactSVGStyled = styled(ReactSVG)`
  width: 100%;

  @media only screen and (max-width: 1280px) {
    width: 90%;
  }
`;

const FourthPart = () => {
  const { BastionTrading } = useThemeSVGUrl(['BastionTrading']);

  return (
    <Container>
      <BottomContainer>
        <SponsorsContainer>
          <div className="test">OUR BACKERS.</div>
          <SponsorLogo>
            <ReactSVGStyled src={BastionTrading} />
          </SponsorLogo>
        </SponsorsContainer>
        <SponsorDeetContainer>
          Bastion Trading is a proprietary trading group who engages mainly in
          cryptocurrency trading on centralized and decentralized exchanges.
          <br />
          <br />
          Bastion Trading specializes in cryptocurrency arbitrage, defi trading,
          and market marking. Furthermore, Bastion Trading has recently made
          investments in trading related or crypto assets including Pokket.com
          and other ventures.
        </SponsorDeetContainer>
      </BottomContainer>
    </Container>
  );
};

export default FourthPart;
