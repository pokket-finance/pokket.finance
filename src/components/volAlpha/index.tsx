import styled from 'styled-components';
import Card from '@/components/card';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5%;
`;
const RightContainer = styled.div`
  width: 60%;
  height: 50vw;
  background-size: 80%;
  background-position: 40% 20%;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    `url('/assets/BG/${props.theme.name}/VOL.png')`};
`;

const VOLAlpha = ({
  showMessage = true,
  className,
}: {
  showMessage?: boolean;
  className?: string;
}) => {
  return (
    <Container className={className}>
      <LeftContainer>
        <Card
          title="Pokket VOL Alpha"
          message={
            showMessage
              ? 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. '
              : ''
          }
          firstButtonTitle="Use App"
          secondButtonTitle="Learn More"
        />
      </LeftContainer>
      <RightContainer />
    </Container>
  );
};

export default VOLAlpha;
