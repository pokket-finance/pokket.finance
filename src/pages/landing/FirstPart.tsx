import styled from 'styled-components';
import Card from '@/components/card';

const Container = styled.div`
  max-width: 1280px;
  padding: 0 calc((100% - 1440px) / 2 + 80px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftContainer = styled.div`
  width: 60%;
  height: 694px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    `url('/assets/BG/${props.theme.name}/Chart.png')`};
`;
const RightContainer = styled.div`
  width: 40%;
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
