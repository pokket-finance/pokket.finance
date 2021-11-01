import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import useDarkMode from 'use-dark-mode';
import Switch from 'react-switch';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

const TopPanelContainer = styled.div`
  max-width: 1280px;
  padding: 0 calc((100% - 1440px) / 2 + 80px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  opacity: 1;
  background-color: ${(props) => props.theme.color.topPanelBackground};
`;

const ThemeSwitchContainer = styled.div`
  user-select: none;
  display: flex;
  height: 40px;
  align-items: center;
  .lightFont {
    margin: 0 14px 0 8px;
    font-weight: bold;
    font-size: 14px;
    color: ${(props) => {
      return props.theme.name === 'Light'
        ? '#3f6de1'
        : 'rgba(255, 255, 255, 0.38);';
    }};
  }
  .darkFont {
    margin: 0 8px 0 6px;
    font-style: normal;
    /* font-weight: bold; */
    font-weight: normal;
    font-size: 14px;
    color: ${(props) =>
      props.theme.name === 'Light'
        ? 'rgba(63, 109, 225, 0.38)'
        : 'rgba(255, 255, 255, 0.87)'};
  };
  }
`;

const LinkGroup = styled.div`
  /* height: 40px; */
  display: flex;
  /* background-color: red; */
  /* margin: 14px 0; */
`;

const LinkItem = styled.div`
  width: 16px;
  height: 24px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 24px;
`;

const TopPanel = () => {
  const { Sun, Moon, Discord, Git, Medium, Twitter, Youtube } = useThemeSVGUrl([
    'Sun',
    'Moon',
    'Discord',
    'Git',
    'Medium',
    'Twitter',
    'Youtube',
  ]);
  const darkMode = useDarkMode();
  const [checked, setChecked] = useState(!darkMode.value);
  const handleChange = (nextChecked) => {
    darkMode.toggle();
    setChecked(nextChecked);
  };

  return (
    <TopPanelContainer>
      <ThemeSwitchContainer>
        <ReactSVG src={Sun} style={{ marginTop: '5px' }} />
        <div className="lightFont">Light</div>
        <Switch
          onChange={handleChange}
          width={40}
          height={22}
          checked={checked}
          className="react-switch"
          offColor="#e2f5ea"
          onColor="#344947"
          offHandleColor="#17C267"
          onHandleColor="#17C267"
          checkedIcon={false}
          uncheckedIcon={false}
        />
        <ReactSVG src={Moon} style={{ marginTop: '5px', marginLeft: '16px' }} />
        <div className="darkFont">Dark</div>
      </ThemeSwitchContainer>
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
    </TopPanelContainer>
  );
};

export default TopPanel;
