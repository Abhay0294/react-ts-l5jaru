import * as React from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext('light');

export function ThemeButton() {
  const theme = React.useContext(ThemeContext);
  return <button className={theme}>Click me!</button>;
}
