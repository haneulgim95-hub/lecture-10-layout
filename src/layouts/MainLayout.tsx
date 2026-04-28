import styled from "styled-components";
import Header from "../components/Header.tsx";
import { Outlet } from "react-router";
import Footer from "../components/Footer.tsx";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text}
`;

const Main = styled.main`
    flex: 1;
`

function MainLayout() {
    return (
        <Wrap>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Wrap>
    );
}

export default MainLayout;