import styled from 'styled-components';

const IntroducingContainer = styled.div`
  width: 100%;
  height: 372px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) =>
    `url('/assets/BG/${props.theme.name}/Data.png')`};
`;

const Title = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 36px;
  margin-top: 60px;
`;

const Message = styled.div`
  font-weight: normal;
  line-height: 150%;
  font-size: 16px;
  color: #ffffff;
  padding: 20px 15% 0;
`;

const Introducing = (props: {
  title: string;
  message: string;
  className?: string;
}) => {
  const { title, message, className } = props;
  return (
    <IntroducingContainer className={className}>
      <Title>{title}</Title>
      <Message>{message}</Message>
    </IntroducingContainer>
  );
};

export default Introducing;
