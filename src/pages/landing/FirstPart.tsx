import styled from 'styled-components';
import Card from '@/components/card';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftContainer = styled.div`
  flex: 1;
  width: 60%;
  height: 620px;
  background-size: 100%, 80%;
  background-repeat: no-repeat, no-repeat;
  background-position: 25%center, 32%;
  background-image: url(${'/assets/backgroundImage/chart.png'}),
    url(${'/assets/backgroundImage/ring.png'});
`;
const RightContainer = styled.div`
  flex: 1;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomTitle = styled.span`
  color: #3f6de1;
`;

const FirstPart = () => {
  return (
    <Container>
      <LeftContainer />
      <RightContainer>
        <Card
          title={
            <span>
              Tenable <CustomTitle>Yield</CustomTitle> Protocol
            </span>
          }
          message="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis"
          firstButtonTitle="Documentation"
          secondButtonTitle="Earn Yield"
        />
      </RightContainer>
    </Container>
  );
};

export default FirstPart;
