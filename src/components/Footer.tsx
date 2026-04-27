import styled from "styled-components";

const Foot = styled.footer`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid gray;
`;

function Footer() {
    return <Foot>Copyright 2026 Practice</Foot>
}

export default Footer;