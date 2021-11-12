import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

const Container = styled.div`
  max-width: 1280px;
  padding: 0 calc((100% - 1440px) / 2 + 80px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1280px) {
    padding: 0;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  /* color: ${(props) => props.theme.color.bodyfontColorLevel1}; */
  color: #3f6de1;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 5%;
`;

const PartnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

// const PartnerCard = styled.div`
//   width: 20%;
//   height: 150px;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   background: ${(props) => props.theme.color.topPanelBackground};
//   border-radius: 16px;
//   border: 1px solid rgba(63, 109, 225, 0.2);
//   margin: 1% 0;
// `;

const Partners = (props: { title: string; className?: string }) => {
  const { title, className } = props;
  const { BastionBanner } = useThemeSVGUrl([
    'BastionBanner',
    // 'Partner3',
    // 'Partner4',
    // 'Partner5',
    // 'Partner6',
  ]);
  const partnerUrlArray = [
    { key: 'BastionBanner', value: BastionBanner },
    // { key: 'Partner2', value: Partner2 },
    // { key: 'Partner3', value: Partner3 },
    // { key: 'Partner4', value: Partner4 },
    // { key: 'Partner5', value: Partner5 },
    // { key: 'Partner6', value: Partner6 },
    // { key: 'Partner7', value: Partner1 },
    // { key: 'Partner8', value: Partner2 },
  ];
  return (
    <Container className={className}>
      {title && <Title>{title}</Title>}
      <PartnerContainer>
        {partnerUrlArray.map((item) => (
          // <PartnerCard key={item.key}>
          <ReactSVG src={item.value} />
          // </PartnerCard>
        ))}
      </PartnerContainer>
    </Container>
  );
};

export default Partners;
