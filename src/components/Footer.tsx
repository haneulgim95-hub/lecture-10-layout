import styled from "styled-components";

const Foot = styled.footer`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #d0cfcf;
`;

function Footer() {
    return <Foot>
        Copyright 2026 Practice
    </Foot>
}

export default Footer;