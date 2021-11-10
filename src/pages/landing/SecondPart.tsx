import styled from 'styled-components';

interface StyleProps {
  margin?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  max-width: 1280px;
  padding: 0 calc((100% - 1440px) / 2 + 80px);

  @media only screen and (max-width: 1280px) {
    padding: 0;
  }
`;

const DataContainer = styled.div`
  z-index: 1;
  width: 1200px;
  height: 240px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => {
    return props.theme.name === 'Light' ? '#FFFFFF' : '#292B37';
  }};
  border-radius: 12px;

  @media only screen and (max-width: 1280px) {
    width: 100vw;
  }
`;

const DataItem = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .data {
    font-size: 56px;
    font-weight: 700;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#3F6DE1' : '#FFFFFFDE';
    }};

    @media only screen and (max-width: 1280px) {
      font-size: 24px;
    }
  }
  .title {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#969696' : '#FFFFFFDE';
    }};
  }
`;

const Decoration = styled.div`
  height: 180px;
  width: 1280px;
  z-index: 0;
  margin-top: -210px;
  background: ${(props) => {
    return props.theme.name === 'Light'
      ? 'rgb(255, 255, 255, 0.35)'
      : 'transparent';
  }};
  backdrop-filter: ${(props) => {
    return props.theme.name === 'Light' ? 'blur(64px)' : 'none';
  }};
  border-radius: 12px;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;

const BlueContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 200px calc((100% - 1440px) / 2 + 80px);
  padding-bottom: 120px;
  margin-top: -90px;
  background-color: ${(props) => {
    return props.theme.name === 'Light' ? '#3f6de1' : '#1D1F2B';
  }};

  @media only screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  .grid-right {
    grid-area: right;
  }
`;

const VaultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 520px;
  color: white;

  @media only screen and (max-width: 1280px) {
    width: 300px;
  }

  .title {
    font-size: 36px;
    font-weight: 700;

    @media only screen and (max-width: 1280px) {
      font-size: 24px;
    }
  }
  .subtitle {
    margin-top: 32px;
    font-size: 18px;
    font-weight: 400;

    @media only screen and (max-width: 1280px) {
      font-size: 14px;
    }
  }
`;

const GraphicBox = styled.div<StyleProps>`
  float: right;
  background: ${(props) => {
    return props.theme.name === 'Light' ? '#3f6de1' : '#1D1F2B';
  }};
  border: 1px solid white;
  border-radius: 4px;
  width: 520px;
  height: 200px;
  z-index: 0;
  margin: ${(props) => {
    return `${props.margin}` || `0px`;
  }};
  .title {
    padding: 50px 0 0 50px;
    font-size: 24px;
    font-weight: 700;
    color: white;
  }

  @media only screen and (max-width: 1280px) {
    width: 300px;
  }
`;

const BarsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 35px 50px 0 50px;
  color: white;
  font-size: 13px;
  font-weight: 500;
`;

const Bars = styled.div`
  .bartitle {
    font-size: 13px;
    font-weight: 500;
  }
  .purple {
    background-color: #9979fc;
    height: 16px;
    width: 85%;
    border-radius: 12px;
    margin-top: 8px;
  }
  .yellow {
    background-color: #fffac9;
    height: 16px;
    width: 85%;
    border-radius: 12px;
    margin-top: 8px;
  }
  .cyan {
    background-color: #79e1f9;
    height: 16px;
    width: 85%;
    border-radius: 12px;
    margin-top: 8px;
  }
`;

const SecondPart = () => {
  return (
    <>
      <Container>
        <DataContainer>
          <DataItem>
            <div className="data">$94M+</div>
            <div className="title">Savings</div>
          </DataItem>
          <DataItem>
            <div className="data">5K+</div>
            <div className="title">Users</div>
          </DataItem>
          <DataItem>
            <div className="data">243K+</div>
            <div className="title">Deposits</div>
          </DataItem>
        </DataContainer>
        <Decoration />
      </Container>
      <BlueContainer>
        <VaultsContainer>
          <div className="title">STRUCTURED VAULTS</div>
          <div className="subtitle">
            New smart allocation feature allows for better management of
            knock-outs. Don&#39;t fret about esoteric moves ruining your balance
            no longer.
          </div>
        </VaultsContainer>
        <div>
          <GraphicBox margin={`0`} />
          <GraphicBox margin={`-180px 25px 0 0`} />
          <GraphicBox margin={`-180px 50px 0 0`}>
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
          </GraphicBox>
        </div>
      </BlueContainer>
    </>
  );
};

export default SecondPart;
