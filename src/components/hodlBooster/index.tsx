import styled from 'styled-components';
import Card from '@/components/card';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftContainer = styled.div`
  width: 60%;
  height: 50vw;
  background-size: 80%;
  background-position: 40% 20%;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    `url('/assets/BG/${props.theme.name}/HODL.png')`};
`;
const RightContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 5%;
`;

const HODLBooster = ({
  showMessage = true,
  className,
}: {
  showMessage?: boolean;
  className?: string;
}) => {
  return (
    <Container className={className}>
      <LeftContainer />
      <RightContainer>
        <Card
          title="Pokket HODL Booster"
          message={
            showMessage
              ? 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. '
              : ''
          }
          firstButtonTitle="Use App"
          secondButtonTitle="Learn More"
        />
      </RightContainer>
    </Container>
  );
};

export default HODLBooster;
