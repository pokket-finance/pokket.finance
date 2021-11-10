import styled from 'styled-components';
import Card from '@/components/card';

const Container = styled.div`
  max-width: 1280px;
  padding: 0 calc((100% - 1440px) / 2 + 80px);
  display: flex;
  align-items: center;
  margin-bottom: 0;

  @media only screen and (max-width: 1280px) {
    padding: 0;
  }
`;

const RightContainer = styled.div`
  width: 60%;
  height: 680px;
  margin-top: 40px;
  margin-bottom: 0;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;
const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  margin-bottom: 0;
  padding: 160px 0 0 0;

  @media only screen and (max-width: 1280px) {
    padding: 200px 0 250px 0;
  }
`;

const CustomTitle = styled.span`
  color: ${(props) => {
    return props.theme.name === 'Light' ? '#3f6de1' : '#FFFFFF';
  }};
  font-weight: 900;
`;

const FirstPart = () => {
  return (
    <Container>
      <LeftContainer>
        <Card
          title={
            <span>
              Pokket <CustomTitle>FINANCE</CustomTitle>
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
