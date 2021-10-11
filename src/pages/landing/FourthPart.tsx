import styled from 'styled-components';
import Card from '@/components/card';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5%;
`;
const LeftContainer = styled.div`
  flex: 1;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightContainer = styled.div`
  flex: 1;
  width: 60%;
  height: 620px;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 40%;
  background-image: url(${'/assets/backgroundImage/fourth.png'});
`;

const FourthPart = () => {
  return (
    <Container>
      <LeftContainer>
        <Card
          title="Pokket HODL Booster"
          message="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. "
          firstButtonTitle="Use App"
          secondButtonTitle="Learn More"
        />
      </LeftContainer>
      <RightContainer />
    </Container>
  );
};

export default FourthPart;
