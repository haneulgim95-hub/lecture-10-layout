import { Link } from "react-router";
import styled from "styled-components";

const Head = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    background-color: #d0cfcf;
`;

const NavLeft = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const NavRight = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Logo = styled.div`
    font-weight: 700;
    font-size: 20px;
`;

function Header() {
    return (
        <Head>
            <NavLeft>
                <Logo>MyApp</Logo>
                <Nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                </Nav>
            </NavLeft>
            <NavRight>
                <Link to={"/auth/login"}>Login</Link>
            </NavRight>
        </Head>
    );
}

export default Header;
