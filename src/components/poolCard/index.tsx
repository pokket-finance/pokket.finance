import styled, { css } from 'styled-components';

interface StyleProps {
  margin?: string;
  width?: number;
}

const GraphicBox = styled.div<StyleProps>`
  background: ${(props) => {
    return props.theme.name === 'Light' ? '#FFFFFF' : '#1D1F2B';
  }};
  border: ${(props) => {
    return props.theme.name === 'Light'
      ? `1px solid #3f6de14d`
      : `1px solid #FFFFFF`;
  }};
  border-radius: 4px;
  height: 350px;
  width: 423px;
  margin: ${(props) => {
    return `${props.margin}` || `0px`;
  }};
`;

const PurpleBox = styled.div`
  border: 1px solid #9979fc;
  border-radius: 4px;
  width: 390px;
  height: 115px;
  margin: 16px 16px 0 16px;
`;

const PurpleBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 16px;
`;

const PurpleSpotContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
  justify-content: center;
`;

const GreyPill = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  width: ${(props) => {
    console.log(props.width);
    return `${props.width}px` || `150px`;
  }};
  height: 28px;
  background-color: ${(props) => {
    return props.theme.name === 'Light' ? '#F4F4F4' : '#FFFFFF4D';
  }};
  border-radius: 24px;
`;

const GreyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #3f6de133;
  width: 390px;
  height: 36px;
  margin: 0 0 0 16px;
`;

const CyanBox = styled.div`
  display: flex;
  width: 390px;
  height: 72px;
  border-radius: 4px;
  border: 1px solid #79e1f9;
  margin: -3px 0 0 16px;
`;

const CyanBoxContent = styled.div`
  padding: 16px;
`;

const GreenBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 36px;
  margin: -3px 0 0 16px;
  border-radius: 4px;
  border: 1px solid #5fcf99;
`;

const Typography = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => {
    return props.theme.name === 'Light' ? '#646464' : '#FFFFFF';
  }};
  ${(props) =>
    props.sizeFourteen &&
    css`
      font-size: 14px;
    `}
  ${(props) =>
    props.lighter &&
    css`
      font-size: 10px;
      font-weight: 400;
      color: #c8c8c8;
    `}
`;

const Arrow = styled.div`
  display: grid;
  place-items: center;
  margin: 0;

  .lineOnly {
    border-left: 2px solid #969696;
    height: 16px;
  }

  .line {
    border-left: 2px solid #969696;
    height: 10px;
  }

  .point {
    border-bottom: 3px solid transparent;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid #969696;
    float: right;
  }
`;

export const LeftPoolCard = () => {
  return (
    <>
      <GraphicBox />
      <GraphicBox margin={`-325px 0 0 25px`} />
      <GraphicBox margin={`-325px 25px 0 50px`}>
        <PurpleBox>
          <PurpleBoxContainer>
            <Typography>Funds Pool</Typography>
            <GreyPill width={198}>
              <Typography>2% Pr - 2 week - 15% OTM Call</Typography>
            </GreyPill>
            <PurpleSpotContainer>
              <Typography sizeFourteen>100 WBTC</Typography>
              <Typography lighter>WBTC spot price: 50000 (+0%)</Typography>
            </PurpleSpotContainer>
          </PurpleBoxContainer>
        </PurpleBox>
        <Arrow>
          <div className="lineOnly" />
        </Arrow>

        <GreyBox>
          <Typography>2 weeks</Typography>
        </GreyBox>
        <Arrow>
          <div className="line" />
          <div className="point" />
        </Arrow>

        <CyanBox>
          <CyanBoxContent>
            <Typography lighter>WBTC spot price: 55000 (+10%)</Typography>
            <Typography sizeFourteen style={{ marginTop: '14px' }}>
              2 WBTC Interest Earned
            </Typography>
          </CyanBoxContent>
        </CyanBox>
        <Arrow>
          <div className="line" />
          <div className="point" />
        </Arrow>
        <GreenBox>
          <Typography>NAV 102 WBTC (+2%)</Typography>
        </GreenBox>
      </GraphicBox>
    </>
  );
};

export const RightPoolCard = () => {
  return (
    <>
      <GraphicBox margin={`0 0 0 50px`} />
      <GraphicBox margin={`-325px 0 0 25px`} />
      <GraphicBox margin={`-325px 25px 0 0`}>
        <PurpleBox>
          <PurpleBoxContainer>
            <PurpleSpotContainer style={{ margin: '0' }}>
              <Typography>Funds Pool</Typography>
              <Typography sizeFourteen>500,000 USDC</Typography>
            </PurpleSpotContainer>

            <GreyPill>
              <Typography>2% Pr - 2 week - 15% Call</Typography>
            </GreyPill>
            <PurpleSpotContainer>
              <Typography sizeFourteen>500,000 USDC</Typography>
              <Typography lighter>WBTC spot price: 50000 (+0%)</Typography>
            </PurpleSpotContainer>
            <GreyPill>
              <Typography>2% Pr - 2 week - 15% Puts</Typography>
            </GreyPill>
          </PurpleBoxContainer>
        </PurpleBox>
        <Arrow>
          <div className="lineOnly" />
        </Arrow>

        <GreyBox>
          <Typography>2 weeks</Typography>
        </GreyBox>
        <Arrow>
          <div className="line" />
          <div className="point" />
        </Arrow>

        <CyanBox>
          <CyanBoxContent>
            <Typography lighter>WBTC spot price: 55000 (+10%)</Typography>
            <Typography sizeFourteen style={{ marginTop: '14px' }}>
              20,000 USDC Interest Earned
            </Typography>
          </CyanBoxContent>
        </CyanBox>
        <Arrow>
          <div className="line" />
          <div className="point" />
        </Arrow>
        <GreenBox>
          <Typography>NAV 1,020,000 USDC (+2%)</Typography>
        </GreenBox>
      </GraphicBox>
    </>
  );
};
