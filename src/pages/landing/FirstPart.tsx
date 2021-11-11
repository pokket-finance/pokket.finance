import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import Card from '@/components/card';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 calc((100% - 1440px) / 2 + 80px);
  display: flex;
  align-items: center;
  background: props.theme.name === 'Light' ?
    linear-gradient(
      68.78deg,
      rgba(43, 93, 219, 0.22) 28.31%,
      rgba(99, 141, 248, 0) 100%
    );
  margin: -80px 200px 0 0;

  @media only screen and (max-width: 1280px) {
    padding: 0;
  }
`;

// const RightContainer = styled.div`
//   position: relative;
//   overflow: visible;
//   width: 1200px;
//   height: 700px;
//   margin: 100px 0 0 0;
//   padding: 0 250px 0 0;

//   @media only screen and (max-width: 1280px) {
//     display: none;
//   }
// `;

const LeftContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  padding: 100px 0 0 0;

  @media only screen and (max-width: 1280px) {
    flex-direction: column;
    padding: 400px 0 200px 0;
    width: 90%;
  }
`;

const CustomTitle = styled.span`
  color: ${(props) => {
    return props.theme.name === 'Light' ? '#3f6de1' : '#FFFFFF';
  }};
  font-weight: 900;
`;

const SocialContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 1280px) {
    padding: 0 0 0 16px;
    width: 100%;
    display: flex;
  }
`;

const SVGButton = styled.div`
  width: 32px;
  height: 32px;
  display: flex;

  @media only screen and (max-width: 1280px) {
    width: 24px;
    height: 24px;
    display: flex;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const LinkItem = styled(SVGButton)`
  width: 32px;
  height: 32px;
  margin: 0 12px 0 0;
  padding: 35px 0 0 0;
  color: white;
`;

const FirstPart = () => {
  const { Discord, Git, Twitter, WebImage } = useThemeSVGUrl([
    'Discord',
    'Git',
    'Twitter',
    'WebImage',
  ]);
  return (
    <Container>
      <LeftContainer>
        <Card
          title={
            <span style={{ whiteSpace: 'nowrap' }}>
              Pokket <CustomTitle>FINANCE</CustomTitle>
            </span>
          }
          message="Take advantage of token volatility and start earning
          yield on your HODLs"
        />
        <SocialContainer>
          <a href="" target="blank">
            <LinkItem>
              <ReactSVG src={Discord} style={{ color: 'white' }} />
            </LinkItem>
          </a>
          <a href="" target="blank">
            <LinkItem>
              <ReactSVG src={Git} style={{ color: 'white' }} />
            </LinkItem>
          </a>
          <a href="https://twitter.com/PokketOfficial" target="blank">
            <LinkItem>
              <ReactSVG src={Twitter} style={{ color: 'white' }} />
            </LinkItem>
          </a>
        </SocialContainer>
      </LeftContainer>
      <ReactSVG
        src={WebImage}
        style={{
          marginTop: '100px',
          marginLeft: 'calc((100vw/2) - 475px)',
        }}
      />
    </Container>
  );
};

export default FirstPart;
