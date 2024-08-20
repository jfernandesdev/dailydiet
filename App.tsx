import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native'

import { THEME } from './src/theme';

import { Home } from '@screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <Home />
    </ThemeProvider>
  );
}
