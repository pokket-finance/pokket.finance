import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

const Container = styled.div`
  display: flex;
  height: 550px;
  justify-content: space-between;
  align-items: center;
  padding-top: 5%;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.color.bodyfontColorLevel1};
  font-weight: bold;
  font-size: 36px;
`;

const PartnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10%;
`;

const PartnerCard = styled.div`
  width: 20%;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.theme.color.topPanelBackground};
  border-radius: 16px;
  border: 1px solid rgba(63, 109, 225, 0.2);
  margin: 2%;
`;

const Partners = () => {
  const { Partner1, Partner2, Partner3, Partner4, Partner5, Partner6 } =
    useThemeSVGUrl([
      'Partner1',
      'Partner2',
      'Partner3',
      'Partner4',
      'Partner5',
      'Partner6',
    ]);
  const partnerUrlArray = [
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    Partner6,
    Partner1,
    Partner2,
  ];
  return (
    <Container>
      <Title>Our Partners</Title>
      <PartnerContainer>
        {partnerUrlArray.map((item) => (
          <PartnerCard>
            <ReactSVG src={item} />
          </PartnerCard>
        ))}
      </PartnerContainer>
    </Container>
  );
};

export default Partners;
