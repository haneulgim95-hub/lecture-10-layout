import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            text: string;
            primary: string;
            background: string;
            muted: string;
        }
    }
}