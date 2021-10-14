import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5%;
`;
const LeftContainer = styled.div`
  flex: 1;
  width: 60%;
  height: 620px;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 40%;
  background-image: ${(props) =>
    `url('/assets/BG/${props.theme.name}/Scenario2.png')`};
`;
const RightContainer = styled.div`
  flex: 1;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  text-align: left;
  width: 100%;
  font-weight: bold;
  font-size: 28px;
  color: #3f6de1;
`;
const MessageContainer = styled.div`
  margin-top: 34px;
  font-weight: normal;
  font-size: 16px;
  align-items: center;
  color: #969696;
`;

const Second = (props: { title: string; message: string }) => {
  const { title, message } = props;
  return (
    <Container>
      <LeftContainer />
      <RightContainer>
        <TitleContainer>{title}</TitleContainer>
        <MessageContainer>{message}</MessageContainer>
      </RightContainer>
    </Container>
  );
};

export default Second;
