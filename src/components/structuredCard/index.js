import React from 'react';
import styled from 'styled-components';

const GraphicBox = styled.div`
  float: right;
  background: ${(props) => {
    return props.theme.name === 'Light' ? '#3f6de1' : '#1D1F2B';
  }};
  border: 1px solid white;
  border-radius: 4px;
  width: 520px;
  height: 200px;
  z-index: 0;
  margin: 0;
  .title {
    padding: 50px 0 0 50px;
    font-size: 24px;
    font-weight: 700;
    color: white;

    @media only screen and (max-width: 1280px) {
      font-size: 18px;
      padding: 30px 0 0 24px;
    }
  }

  @media only screen and (max-width: 1280px) {
    height: 160px;
    width: 300px;
  }
`;

const GraphicBoxTwo = styled(GraphicBox)`
  margin: -180px 25px 0 0;

  @media only screen and (max-width: 1280px) {
  margin: -150px 15px 0 0;
  }
`

const GraphicBoxThree = styled(GraphicBox)`
  margin: -180px 50px 0 0;

  @media only screen and (max-width: 1280px) {
  margin: -150px 30px 0 0;
  }
`

const BarsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 35px 50px 0 50px;
  color: white;
  font-size: 13px;
  font-weight: 500;

  @media only screen and (max-width: 1280px) {
    grid-template-columns: 2fr 1fr 1fr;
    padding: 40px 8px 0 24px;
  }
`;

const Bars = styled.div`
  .bartitle {
    font-size: 13px;
    font-weight: 500;

    @media only screen and (max-width: 1280px) {
      font-size: 10px;
  }
  }
  .purple {
    background-color: #9979fc;
    height: 16px;
    width: 85%;
    border-radius: 12px;
    margin-top: 8px;

    @media only screen and (max-width: 1280px) {
    height: 8px; 
  }
  }
  .yellow {
    background-color: #fffac9;
    height: 16px;
    width: 85%;
    border-radius: 12px;
    margin-top: 8px;

    @media only screen and (max-width: 1280px) {
      height: 8px;
    }
  }
  .cyan {
    background-color: #79e1f9;
    height: 16px;
    width: 85%;
    border-radius: 12px;
    margin-top: 8px;

    @media only screen and (max-width: 1280px) {
      height: 8px;
    }
  }
`;


const StructuredCard = () => {
  return (
    <>
      <GraphicBox />
      <GraphicBoxTwo />
      <GraphicBoxThree>
        {/* <GraphicBox margin={`-180px 25px 0 0`} />
          <GraphicBox margin={`-180px 50px 0 0`}>
  */}

        <div className="title">3-month blend-vault</div>
        <BarsContainer>
          <Bars>
            <div className="bartitle">50% ETH</div>
            <div className="purple" />
          </Bars>
          <Bars>
            <div className="bartitle">25% UNI</div>
            <div className="cyan" />
          </Bars>
          <Bars>
            <div className="bartitle">25% MATIC</div>
            <div className="yellow" />
          </Bars>
        </BarsContainer>
      </GraphicBoxThree>
    </>
  )
}

export default StructuredCard;