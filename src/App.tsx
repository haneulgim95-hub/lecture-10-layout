import GlobalStyle from "./GlobalStyle.ts";
import { RouterProvider} from "react-router";
import { AppRouter } from "./router/AppRouter.tsx";

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={AppRouter()}/>
        </>
    );
}

export default App;
