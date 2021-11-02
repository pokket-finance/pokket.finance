import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

const BottomPanelContainer = styled.div`
  max-width: 1280px;
  padding: 0 calc((100% - 1280px) * 0.5) 0 calc((100% - 1280px) * 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  opacity: 1;
  background: #10141b;
`;

const Copyright = styled.div`
  text-align: right;
  width: calc(40% / 3);
  font-weight: normal;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
`;

const SVGButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LinkGroup = styled.div`
  height: 40px;
  display: flex;
  /* backgroup-color: red; */
  margin: 14px 0 14px 0;
  opacity: 0.5;
`;

const LinkItem = styled(SVGButton)`
  margin-right: 10px;
`;

const BottomPanel = () => {
  const { Discord, Git, Medium, Twitter, Youtube } = useThemeSVGUrl([
    'Discord',
    'Git',
    'Medium',
    'Twitter',
    'Youtube',
  ]);
  return (
    <BottomPanelContainer>
      <LinkGroup>
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
        >
          <LinkItem>
            <ReactSVG src={Youtube} />
          </LinkItem>
        </a>
        <a href="https://medium.com/pokketofficial" target="blank">
          <LinkItem>
            <ReactSVG src={Medium} />
          </LinkItem>
        </a>
      </LinkGroup>
      <Copyright>Copyright © 2021 Pokket.</Copyright>
    </BottomPanelContainer>
  );
};

export default BottomPanel;
