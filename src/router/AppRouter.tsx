import  { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import Login from "../pages/Login.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";


// 실제 라우팅 처리
export const AppRouter = () => {
    const routes: RouteObject[] = [
        {
            element: <MainLayout/>,
            path: "/",
            children: [
                // index: true란, 부모의 주소로 걸렸을때, 해당 컴포넌트에 걸린다
                { index: true, element: <Home/>},
                // /about으로 걸렸을때는, <About/> 컴포넌트가 실행된다.
                { path: "about", element: <About/>}
            ]
        },
        {
           path: "/auth/login",
           element: <Login />

        }
    ];

    return createBrowserRouter(routes);
}