import  { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import Login from "../pages/Login.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";


// 실제 라우팅 처리
export const AppRouter = (onClick: VoidFunction) => {
    const routes: RouteObject[] = [
        {
            element: <MainLayout onClick={onClick}/>,
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
//     비유 하나로 끝낸다
//     createBrowserRouter 👉 지도(설계도)
//     RouterProvider 👉 네비게이션 앱 (실행기)
//
// 👉 지도만 있으면 뭐해, 실행을 해야 길 안내가 되지

//     최소 이해 포인트 (이건 꼭 기억해라)
//
//     1️⃣ createBrowserRouter(routes)
// → 라우팅 정의 만든다
//
//     2️⃣ <RouterProvider router={...} />
// → 그 라우터를 앱에 연결한다
//
// 👉 이 2개만 이해하면 끝
    return createBrowserRouter(routes);
}