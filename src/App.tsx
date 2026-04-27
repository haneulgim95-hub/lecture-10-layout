import { RouterProvider } from "react-router";
import GlobalStyle from "./GlobalStyle.ts";
import { AppRouter } from "./router/AppRouter.tsx";

// 환경설정
function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={AppRouter()} />
        </>
    );
}

export default App;
