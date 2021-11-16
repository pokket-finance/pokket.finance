import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import useDarkMode from 'use-dark-mode';
import Switch from 'react-switch';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

const ThemeSwitchContainer = styled.div`
  user-select: none;
  display: flex;
  height: 40px;
  align-items: center;
  .lightFont {
    margin: 0 8px 0 8px;
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
    font-weight: normal;
    font-size: 14px;
    color: ${(props) =>
    props.theme.name === 'Light'
      ? 'rgba(63, 109, 225, 0.38)'
      : 'rgba(255, 255, 255, 0.87)'};
  };
  }
`;


const ThemeSwitch = () => {
  const { Sun, Moon } = useThemeSVGUrl([
    'Sun',
    'Moon',
  ]);
  const darkMode = useDarkMode();
  const [checked, setChecked] = useState(!darkMode.value);
  const handleChange = (nextChecked) => {
    darkMode.toggle();
    setChecked(nextChecked);
  };

  return (
    <ThemeSwitchContainer>
      <ReactSVG src={Sun} style={{ marginTop: '4px' }} />
      <div className="lightFont"></div>
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
      <div className="darkFont"></div>
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;
