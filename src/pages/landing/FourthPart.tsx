import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #13307e;
  padding: 100px calc((100% - 1440px) / 2 + 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SponsorsContainer = styled.div`
  .test {
    font-size: 36px;
    font-weight: 700;
    color: white;
  }
`;

const SponsorLogo = styled.div`
  margin-top: 56px;
  width: 370px;
  height: 120px;
  background: #ffffff33;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 400;
  color: white;
`;

const SponsorDeetContainer = styled.div`
  display: flex;
  margin-top: 100px;
  font-size: 18px;
  color: white;
`;

const FourthPart = () => {
  return (
    <Container>
      <BottomContainer>
        <SponsorsContainer>
          <div className="test">OUR BACKERS.</div>
          <SponsorLogo>BASTION TRADING</SponsorLogo>
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
