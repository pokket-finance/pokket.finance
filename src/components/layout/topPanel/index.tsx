import React, { useState } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { ReactSVG } from 'react-svg';
import Switch from 'react-switch';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';
import DarkTheme from '@/theme/Dark';
import LightTheme from '@/theme/Light';

const TopPanelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 68px;
  opacity: 1;
  background-color: ${(props) => props.theme.color.topPanelBackground};
  padding: 0 5%;
`;

const ThemeSwitchContainer = styled.div`
  user-select: none;
  display: flex;
  height: 40px;
  align-items: center;
  .lightFont {
    margin: 0 14px 0 8px;
    font-weight: bold;
    font-size: 16px;
    color: ${(props) =>
      props.theme.name === 'Light' ? '#3f6de1' : 'rgba(255, 255, 255, 0.38);'};
  }
  .darkFont {
    margin: 0 8px 0 14px;
    font-style: normal;
    font-weight: normal;
    color: ${(props) =>
      props.theme.name === 'Light'
        ? 'rgba(63, 109, 225, 0.38)'
        : 'rgba(255, 255, 255, 0.87)'};
  };
  }
`;

const LinkGroup = styled.div`
  height: 40px;
  display: flex;
  backgroup-color: red;
  margin: 14px 0;
`;

const LinkItem = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 24px;
`;

const TopPanel = ({
  updateTheme,
}: {
  updateTheme: (prop: DefaultTheme) => void;
}) => {
  const { Sun, Moon } = useThemeSVGUrl(['Sun', 'Moon']);
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    updateTheme(nextChecked ? DarkTheme : LightTheme);
    setChecked(nextChecked);
  };

  return (
    <TopPanelContainer>
      <ThemeSwitchContainer>
        <ReactSVG src={Sun} />
        <div className="lightFont">Light</div>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
          offColor="#e2f5ea"
          onColor="#344947"
          offHandleColor="#17C267"
          onHandleColor="#17C267"
          checkedIcon={false}
          uncheckedIcon={false}
        />
        <div className="darkFont">Dark</div>
        <ReactSVG src={Moon} />
      </ThemeSwitchContainer>
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
    </TopPanelContainer>
  );
};

export default TopPanel;
