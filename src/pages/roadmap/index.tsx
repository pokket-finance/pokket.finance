import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Steps, { Step } from '@/components/steps';

const LandingContainer = styled.div`
  background-color: ${(props) => props.theme.color.bodyBG};
  width: 100vw;
`;

const BodyContainer = styled.div`
  max-width: 1280px;
  padding: 110px calc((100% - 1440px) / 2 + 80px) 0px;
  margin-bottom: 150px;
  user-select: none;

  @media only screen and (max-width: 1280px) {
    padding: 0;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  user-select: none;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  color: ${(props) => props.theme.color.bodyfontColorLevel1};
  padding-bottom: 50px;

  @media only screen and (max-width: 1280px) {
    margin-top: 40px;
    font-size: 24px;
  }
`;

const LandingPage = () => {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  const updateSize = () => {
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  };

  useEffect(() => {
    window.onresize = updateSize;
  }, []);

  return (
    <LandingContainer>
      <Header />
      <BodyContainer>
        <TitleContainer>Our Roadmap</TitleContainer>
        <Steps>
          <Step
            isLeft={false}
            title="Community Building Phase"
            content="Q3 2021"
          />
          <Step
            isLeft={size.x > 1280}
            title="Pokket Finance Launch"
            content="Q4 2021"
          />
          <Step isLeft={false} title="DApp Launch" content="Q4 2021" />
          <Step
            isLeft={size.x > 1280}
            title="Treasury Management"
            content="Q1 2022"
          />
          <Step isLeft={false} title="Pokket IDO" content="Q1 2022" />
          <Step isLeft={size.x > 1280} title="PKKT Farming" content="Q1 2022" />
          <Step isLeft={false} title="sPKKT Launch" content="Q1 2022" />
          <Step
            isLeft={size.x > 1280}
            title="PKKT DAO Launch"
            content="Q1 2022"
          />
          <Step
            isLeft={false}
            title="Protocol Collaborations"
            content="Q1 2022"
          />
        </Steps>
      </BodyContainer>
      <Footer />
    </LandingContainer>
  );
};

export default LandingPage;
