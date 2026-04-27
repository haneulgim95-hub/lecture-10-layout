import styled from "styled-components";
import { Link } from "react-router";

const Head = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: gray;
`;

const NavLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const NavRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Logo = styled.div`
    font-weight: 700;
    font-size: 20px;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;
`;

function Header() {
    return <Head>
        <NavLeft>
            <Logo>MyApp</Logo>
            <Nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
            </Nav>
        </NavLeft>
        <NavRight>
            <Link to={"/auth/login"}>로그인</Link>
        </NavRight>
    </Head>
}

export default Header;