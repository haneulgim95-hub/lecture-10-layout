import GlobalStyle from "./styles/GlobalStyle.ts";
import { RouterProvider } from "react-router";
import { AppRouter } from "./router/AppRouter.tsx";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme.ts";
import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts/theme/ThemeContext.ts";

function App() {
    const [theme, setTeme] = useState<"light" | "dark">(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? "dark" : "light";
    });

    const onClick = () => {
        setTeme(prev => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
            <ThemeContext.Provider value={{theme, toggleTheme: onClick}}>
                <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
                    <GlobalStyle />
                    <RouterProvider router={AppRouter()} />
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
