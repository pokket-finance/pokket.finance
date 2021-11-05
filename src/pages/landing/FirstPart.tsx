import styled from 'styled-components';
import Card from '@/components/card';

const Container = styled.div`
  max-width: 1280px;
  padding: 0 calc((100% - 1440px) / 2 + 80px);
  /* padding: 0 calc((100% - 1440px) / 2); */
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: 0;
`;

const RightContainer = styled.div`
  width: 60%;
  height: 680px;
  margin-top: 40px;
  margin-bottom: 0;
  background-size: 100%;
  /* background-repeat: no-repeat; */
  /* background-image: ${(props) => `url('/assets/tempboxes.png')`}; */
`;
const LeftContainer = styled.div`
  width: 40%;
  display: flex;
  margin-bottom: 0;
`;

const CustomTitle = styled.span`
  color: #3f6de1;
  font-weight: 900;
`;

const FirstPart = () => {
  return (
    <Container>
      <LeftContainer>
        <Card
          title={
            <span>
              Pokket <CustomTitle>DEFI</CustomTitle>
            </span>
          }
          message="Take advantage of token volatility and start earning
          yield on your HODLs"
        />
      </LeftContainer>
      <RightContainer />
    </Container>
  );
};

export default FirstPart;
