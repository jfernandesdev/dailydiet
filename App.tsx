import { ThemeProvider } from 'styled-components';

import { THEME } from './src/theme';

import { Home } from '@screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Home />
    </ThemeProvider>
  );
}
