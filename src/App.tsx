import { RouterProvider } from "react-router";
import GlobalStyle from "./styles/GlobalStyle.ts";
import { AppRouter } from "./router/AppRouter.tsx";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { DarkTheme, LightTheme } from "./styles/theme.ts";
import {ThemeContext} from "./contexts/theme/ThemeContext.tsx";

// 환경설정
function App() {
    // 1. 사용자가 이 프로그램을 껐다가 다시 켰을 떄, 그 localStorage의 theme 값을 가져와서
    // useState의 초기값으로 사용하는 것
    // 초기값 자리에 함수를 집어넣을 수도 있음. => useState가 state를 만들 떄 그 함수를 실행시키고
    // 그 결과를 초기값으로 사용함
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        // localStorage에서 가져오는 값은 무조건 string | null이다.
        // value는 사용자가 지워버릴수도 있는 값이여서 string | null이다.
        // 심지어 처음 실행했을때는 당연히, localstorage에는 아무런 값이 없다 (null)
        const savedTheme = localStorage.getItem("theme");
        // 가져온 값이 dark가 아니면, 무조건 light를 반환한다.
        return savedTheme === "dark" ? "dark" : "light";
    });

    // 2. 사용자가 state 값을 바꿨을 떄, 추가로 localStorage의값도 업데이트 해주도록 함
    // 의존성인 theme가 바뀌면 useEffect를 실행해라.
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const onClick = () => {
        // setState에도 매개변수로 함수를 작성해줄 수 있는데,
        // 이 때 함수의 매개변수 자리에는 "지금 현재 state 값"이 들어옴
        setTheme((prev) => prev === "dark" ? "light" : "dark");
    };


    // 2. Context 제공자로 묶어주기
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme: onClick}}>
            {/*// ThemeProvider로 감싸진 자식 컴포넌트들 안에서 사용되는 // styled-components들에게*/}
            {/*해당 theme를 제공함*/}
            <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
                <GlobalStyle />
                <RouterProvider router={AppRouter()} />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;


