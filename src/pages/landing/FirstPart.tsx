import styled from 'styled-components';
import Card from '@/components/card';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftContainer = styled.div`
  width: 58%;
  height: calc(100vw * 0.58 * 0.9);
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    `url('/assets/BG/${props.theme.name}/Chart.png')`};
`;
const RightContainer = styled.div`
  width: 36%;
  padding: 0 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
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
