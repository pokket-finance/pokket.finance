import React, { useState, useEffect } from 'react';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';
import lightTheme from '@/theme/Light';
import darkTheme from '@/theme/Dark';

export default ({ children }: any) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? lightTheme : darkTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const body = (
    <ThemeProvider theme={theme}>{isMounted && children}</ThemeProvider>
  );

  return body;
};
