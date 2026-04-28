import { RouterProvider } from "react-router";
import GlobalStyle from "./styles/GlobalStyle.ts";
import { AppRouter } from "./router/AppRouter.tsx";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { DarkTheme, LightTheme } from "./styles/theme.ts";

// 환경설정
function App() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const onClick = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        // ThemeProvider로 감싸진 자식 컴포넌트들 안에서 사용되는
        // styled-components들에게 해당 theme를 제공함
        <ThemeProvider theme={theme ==="light" ? LightTheme : DarkTheme}>
            <GlobalStyle />
            <RouterProvider router={AppRouter(onClick)} />
        </ThemeProvider>
    );
}

export default App;
