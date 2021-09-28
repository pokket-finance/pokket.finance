import 'styled-components';
import { ThemeType } from '@/theme/light';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}