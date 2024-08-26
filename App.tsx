import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";

import { Loading } from "@components/Loading";
import { Routes } from './src/routes';

import { THEME } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
