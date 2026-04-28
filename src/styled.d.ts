import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            background: string;
            muted: string;
            text: string;
        }
    }
}