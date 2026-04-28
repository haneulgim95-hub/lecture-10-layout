import styled from "styled-components";
import { Outlet } from "react-router";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
`;

const Main = styled.main`
    flex: 1;
`;

function MainLayout() {
    return (
        <Wrap>
            <Header></Header>
            <Main><Outlet/></Main>
            <Footer></Footer>
        </Wrap>
    );
}

export default MainLayout;
