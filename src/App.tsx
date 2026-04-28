import { RouterProvider } from "react-router";
import GlobalStyle from "./styles/GlobalStyle.ts";
import { AppRouter } from "./router/AppRouter.tsx";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { DarkTheme, LightTheme } from "./styles/theme.ts";
import { ThemeContext } from "./contexts/theme/ThemeContext.tsx";

// 환경설정
function App() {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const onClick = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    return (
        // ThemeProvider로 감싸진 자식 컴포넌트들 안에서 사용되는
        // styled-components들에게 해당 theme를 제공함
        <ThemeContext.Provider value={{theme, toggleTheme: onClick}} >
            <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
                <GlobalStyle />
                <RouterProvider router={AppRouter()} />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
