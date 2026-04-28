import styled from "styled-components";
import Header from "../components/Header.tsx";
import { Outlet } from "react-router";
import Footer from "../components/Footer.tsx";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    // props : 매개변수 자리에는 styled-components에서 데이터를 전달해준다.
    // props.theme 프로퍼티에 우리가 ThemeProvider에서 넣은 theme값(여기서는 LightTheme)이 존재 
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
`;

const Main = styled.main`
    flex: 1;
`

// MainLayout은 컴포넌트 O
// 얘는 Props로 전달 받음
function MainLayout({onClick} : { onClick: VoidFunction }) {
    return (
        <Wrap>
            <Header onClick={onClick}/>
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Wrap>
    );
}

export default MainLayout;