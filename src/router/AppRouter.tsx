import  { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import Login from "../pages/Login.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";


// 실제 라우팅 처리
// AppRouter는 컴포넌트 x, 함수 O

// 매개변수 자리에 onClick이 들어오는데, 얘는 매개변수니깐
// 타입스크립트에 의거하여 타입을 명시해줘야 함

// () => void       ====>  VoidFunction
// 너무 많이쓰니깐 VoidFunction이라는 기본타입으로 제공해주고 있따.
export const AppRouter = () => {
    const routes: RouteObject[] = [
        {
            element: <MainLayout />,
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