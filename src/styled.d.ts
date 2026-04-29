import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            primary: string;
            text: string;
            background: string;
            muted: string;
        }
    }
}