import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        mobileBreakPoint: string,
        textColor: string,
        backgroundColor: string,
        boxBackgroundColor: string,
        placeholderColor: string,
        dangerColor: string,
        successColor: string,
        transitionDuration: string
    }
}