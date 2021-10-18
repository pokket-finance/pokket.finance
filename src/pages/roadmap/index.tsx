import styled from 'styled-components';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Steps, { Step } from '@/components/steps';

const LandingContainer = styled.div`
  background-color: ${(props) => props.theme.color.bodyBG};
`;

const BodyContainer = styled.div`
  max-width: 1280px;
  padding: 110px calc((100% - 1440px) / 2 + 80px) 0px;
  margin-bottom: 150px;
  user-select: none;
`;

const TitleContainer = styled.div`
  text-align: center;
  user-select: none;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  color: ${(props) => props.theme.color.bodyfontColorLevel1};
  padding-bottom: 50px;
`;

const LandingPage = () => {
  return (
    <LandingContainer>
      <Header />
      <BodyContainer>
        <TitleContainer>Our Roadmap</TitleContainer>
        <Steps>
          <Step
            isLeft={false}
            title="Lorem Ipsum"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <Step
            title="Lorem Ipsum"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <Step
            isLeft={false}
            title="Lorem Ipsum"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <Step
            title="Lorem Ipsum"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <Step
            isLeft={false}
            title="Lorem Ipsum"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <Step
            title="Lorem Ipsum"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </Steps>
      </BodyContainer>
      <Footer />
    </LandingContainer>
  );
};

export default LandingPage;
