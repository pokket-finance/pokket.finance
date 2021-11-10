import styled from 'styled-components';
import StructuredCard from '../../components/structuredCard';

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
    height: 130px;
    width: 90%;
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
      return props.theme.name === 'Light' ? '#969696' : '#FFFFFF99';
    }};

    @media only screen and (max-width: 1280px) {
      font-size: 12px;
    }
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
    padding: 150px 16px 0 16px;
  }

  @media only screen and (max-width: 860px) {
    display: flex;
    flex-direction: column;
    padding: 150px 16px 0 16px;
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
    width: 90%;
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
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#969696' : '#FFFFFF99';
    }};

    @media only screen and (max-width: 1280px) {
      font-size: 14px;
      margin-top: 24px;
    }
  }
`;

const GraphicBoxContainer = styled.div`
  @media only screen and (max-width: 1280px) {
    padding: 70px 16px 0 16px;
    padding: 70px calc((100% - 335px) / 2);
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
        <GraphicBoxContainer>
          <StructuredCard />
        </GraphicBoxContainer>
      </BlueContainer>
    </>
  );
};

export default SecondPart;
