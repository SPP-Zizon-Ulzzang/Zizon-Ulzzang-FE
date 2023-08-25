import React, { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import useTheme from '../hooks/useTheme';
import { dark, light } from './theme';

type Props = {
  children: ReactNode;
};

const defaultValue = {
  theme: 'light',
  onChangeTheme: () => {},
};

export const ThemeContext = React.createContext(defaultValue);

function ThemeProvider({ children }: Props) {
  const themeProps = useTheme();

  return (
    <ThemeContext.Provider value={themeProps}>
      <StyledThemeProvider theme={themeProps.theme === 'light' ? light : dark}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
