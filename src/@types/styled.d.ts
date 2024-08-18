import 'styled-components';
import { THEME } from '../theme';

type ThemeType = typeof THEME;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
