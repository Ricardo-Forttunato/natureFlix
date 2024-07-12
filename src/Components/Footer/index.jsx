import styled from "styled-components"
import LogoAlura from "../LogoAlura/LogoAlura"

const FooterStyled = styled.footer`
    width: 100vw;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    border-top: 4px solid #2271D1;
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.70);
`;

export default function Footer () {
    return (
        <FooterStyled>
            <LogoAlura />
        </FooterStyled>
    )
}