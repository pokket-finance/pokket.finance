import styled from 'styled-components';

import HODLBooster from '@/components/hodlBooster';
import Introducing from '@/components/introducing';
import BoosterDescriptionFirst from '@/components/scenarioFirst';
import BoosterDescriptionSecond from '@/components/scenarioSecond';
import CustomCollapse from '@/components/customCollapse';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const Container = styled.div`
  background-color: ${(props) => props.theme.color.bodyBG};
`;

const Padding = styled.div`
  .hodl {
    margin-top: 80px;
  }
`;

const BodyContainer = styled.div`
  max-width: 1280px;
  padding: 0 calc((100% - 1440px) / 2 + 80px);
  user-select: none;
  .introducing {
    margin-top: 5%;
  }

  @media only screen and (max-width: 1280px) {
    padding: 0;
  }
`;

const Title = styled.div`
  margin: 5% 0;
  color: ${(props) => props.theme.color.bodyfontColorLevel1};
  text-align: center;
  font-weight: bold;
  font-size: 48px;
`;

const HODL = () => {
  return (
    <Container>
      <Header />
      <BodyContainer>
        <Padding>
          <HODLBooster className="hodl" showMessage={false} />
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
      </BodyContainer>
      <CustomCollapse
        title="Frequently Asked Questions"
        array={[
          {
            id: 1,
            header: 'Lorem ipsum Lorem ipsum Lorem ipsum',
            content:
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          },
          {
            id: 2,
            header: 'Lorem ipsum Lorem ipsum Lorem ipsum',
            content:
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          },
          {
            id: 3,
            header: 'Lorem ipsum Lorem ipsum Lorem ipsum',
            content:
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          },
        ]}
      />
      <Footer />
    </Container>
  );
};

export default HODL;
