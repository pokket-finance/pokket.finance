import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

const BottomPanelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 160px);
  height: 68px;
  opacity: 1;
  padding: 0 5%;
  background: #10141b;
`;

const Copyright = styled.div`
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
  backgroup-color: red;
  margin: 14px 56px 14px 0;
`;

const LinkItem = styled(SVGButton)`
  margin-right: 24px;
`;

const BottomPanel = () => {
  return (
    <BottomPanelContainer>
      <LinkGroup>
        <a href="" target="blank">
          <LinkItem>
            <ReactSVG src={`/assets/Discord.svg`} />
          </LinkItem>
        </a>
        <a href="" target="blank">
          <LinkItem>
            <ReactSVG src={`/assets/Git.svg`} />
          </LinkItem>
        </a>
        <a href="https://twitter.com/PokketOfficial" target="blank">
          <LinkItem>
            <ReactSVG src={`/assets/Twitter.svg`} />
          </LinkItem>
        </a>
        <a
          href="https://www.youtube.com/channel/UC7gH6n5CuxlcBeDdd4sddMA"
          target="blank"
        >
          <LinkItem>
            <ReactSVG src={`/assets/Youtube.svg`} />
          </LinkItem>
        </a>
        <a href="https://medium.com/pokketofficial" target="blank">
          <LinkItem>
            <ReactSVG src={`/assets/Medium.svg`} />
          </LinkItem>
        </a>
      </LinkGroup>
      <Copyright>Copyright © 2021 Pokket.</Copyright>
    </BottomPanelContainer>
  );
};

export default BottomPanel;
