import styled, { DefaultTheme } from 'styled-components';

import VOLAlpha from '@/components/volAlpha';
import Introducing from '@/components/introducing';
import BoosterDescriptionFirst from '@/components/scenarioFirst';
import BoosterDescriptionSecond from '@/components/scenarioSecond';
import CustomCollapse from '@/components/customCollapse';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const LandingContainer = styled.div`
  background-color: ${(props) => props.theme.color.bodyBG};
`;

const Padding = styled.div`
  padding: 0 5% 80px;
`;

const BodyContainer = styled.div`
  user-select: none;
  .introducing {
    margin-top: 5%;
  }
`;

const Title = styled.div`
  margin: 5% 0;
  color: ${(props) => props.theme.color.bodyfontColorLevel1};
  text-align: center;
  font-weight: bold;
  font-size: 48px;
`;

const VOL = ({
  updateTheme,
}: {
  updateTheme: (prop: DefaultTheme) => void;
}) => {
  return (
    <LandingContainer>
      <Header updateTheme={updateTheme} />
      <BodyContainer>
        <Padding>
          <VOLAlpha showMessage={false} />
          <Introducing
            title="Introducing Pokket HODL Booster"
            message="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            className="introducing"
          />
          <Title>What is NAV and how does it work?</Title>
          <BoosterDescriptionFirst
            title="Out-of-the-money at Expiry"
            message="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <BoosterDescriptionSecond
            title="In-of-the-money at Expiry"
            message="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </Padding>
        <CustomCollapse
          title="Frequently Asked Questions"
          array={[
            {
              header: 'Lorem ipsum Lorem ipsum Lorem ipsum',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            },
            {
              header: 'Lorem ipsum Lorem ipsum Lorem ipsum',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            },
            {
              header: 'Lorem ipsum Lorem ipsum Lorem ipsum',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            },
          ]}
        />
      </BodyContainer>
      <Footer />
    </LandingContainer>
  );
};

export default VOL;
