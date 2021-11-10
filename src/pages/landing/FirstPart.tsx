import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import Card from '@/components/card';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

const Container = styled.div`
  max-width: 1280px;
  padding: 0 calc((100% - 1440px) / 2 + 80px);
  display: flex;
  align-items: center;
  margin-bottom: 0;

  @media only screen and (max-width: 1280px) {
    padding: 0;
  }
`;

const RightContainer = styled.div`
  width: 60%;
  height: 680px;
  margin-top: 40px;
  margin-bottom: 0;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;
const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  margin-bottom: 0;
  padding: 160px 0 0 0;

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
  display: none;

  @media only screen and (max-width: 1280px) {
    padding: 0 0 0 16px;
    width: 100%;
    display: flex;
  }
`;

const SVGButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LinkItem = styled(SVGButton)`
  margin: 0 12px 0 0;
  padding: 35px 0 0 0;
`;

const FirstPart = () => {
  const { Discord, Git, Twitter } = useThemeSVGUrl([
    'Discord',
    'Git',
    'Twitter',
  ]);
  return (
    <Container>
      <LeftContainer>
        <Card
          title={
            <span>
              Pokket <CustomTitle>FINANCE</CustomTitle>
            </span>
          }
          message="Take advantage of token volatility and start earning
          yield on your HODLs"
        />
        <SocialContainer>
          <a href="" target="blank">
            <LinkItem>
              <ReactSVG src={Discord} />
            </LinkItem>
          </a>
          <a href="" target="blank">
            <LinkItem>
              <ReactSVG src={Git} />
            </LinkItem>
          </a>
          <a href="https://twitter.com/PokketOfficial" target="blank">
            <LinkItem>
              <ReactSVG src={Twitter} />
            </LinkItem>
          </a>
          <a
            href="https://www.youtube.com/channel/UC7gH6n5CuxlcBeDdd4sddMA"
            target="blank"
          />
        </SocialContainer>
      </LeftContainer>
      <RightContainer />
    </Container>
  );
};

export default FirstPart;
