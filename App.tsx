import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";

import { Loading } from "@components/Loading";

import { THEME } from './src/theme';

import { Home } from '@screens/Home';
import { Dashboard } from '@screens/Dashboard';
import { Feedback } from '@components/Feedback';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Feedback type="FAIL" /> : <Loading />}
    </ThemeProvider>
  );
}
