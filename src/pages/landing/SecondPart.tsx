import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 5%;
  user-select: none;
`;

const DataContainer = styled.div`
  width: 100%;
  height: 372px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 30px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${'/assets/backgroundImage/SecondPart1.png'});
`;

const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .data {
    font-size: 36px;
    font-weight: bold;
    color: #ffffff;
  }
  .divider {
    width: 50%;
    height: 5px;
    background-color: #ffffff;
    margin: 14px 0px 22px;
  }
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 500px;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${'/assets/backgroundImage/SecondPart2.png'});
  .title {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 36px;
    color: #3f6de1;
    margin-top: 100px;
  }
  .subTitle {
    display: flex;
    justify-content: center;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: ${(props) => props.theme.color.bodyfontColorLevel1};
    margin-top: 5%;
  }
`;

const MessageContainer = styled.div`
  color: ${(props) => props.theme.color.bodyfontColorLevel2};
  width: 80%;
  text-align: center;
`;

const SecondPart = () => {
  return (
    <Container>
      <DataContainer>
        <DataItem>
          <div className="data">$100,000,000</div>
          <div className="divider" />
          <div className="title">Total Protocol Volume</div>
        </DataItem>
        <DataItem>
          <div className="data">$100,000,000</div>
          <div className="divider" />
          <div className="title">Total Value Locked</div>
        </DataItem>
        <DataItem>
          <div className="data">$100,000,000</div>
          <div className="divider" />
          <div className="title">Total Interest Earned</div>
        </DataItem>
      </DataContainer>
      <TitleContainer>
        <div className="title">What we stand for</div>
        <div className="subTitle">
          Introducing
          <br />
          Structured Vaults
        </div>
      </TitleContainer>
      <MessageContainer>
        {`Pokket uses financial engineering to creat structured products that
        deliver sustainable yiel. Pokket's first product focuses on yield
        through automated options strategies. The protocol also allows
        developers to create arbitrary structured products through combining
        various DeFi derivatives`}
      </MessageContainer>
    </Container>
  );
};

export default SecondPart;
