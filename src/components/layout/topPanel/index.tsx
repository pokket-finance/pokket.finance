import styled, { DefaultTheme, useTheme } from 'styled-components';

import darkTheme from '@/theme/dark';
import lightTheme from '@/theme/light';

const TopPanelContainer = styled.div`
  width: '100%';
  height: '68px';
  background-color: ${(props) => props.theme.color.background};
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 1em;
  margin: 1em;
  border-radius: 3px;
  color: ${(props) => props.theme.color.font};
  border: 2px solid ${(props) => props.theme.color.font};
`;

export default ({
  updateTheme,
}: {
  updateTheme: (prop: DefaultTheme) => void;
}) => {
  const theme = useTheme();
  const isDark = theme.name === 'dark';
  return (
    <TopPanelContainer>
      <Button
        onClick={() => {
          updateTheme(isDark ? lightTheme : darkTheme);
        }}
      >
        {isDark ? 'dark' : 'light'}
      </Button>
    </TopPanelContainer>
  );
};
