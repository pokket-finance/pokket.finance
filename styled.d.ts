import 'styled-components';
import { ThemeType } from '@/theme/Light';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}