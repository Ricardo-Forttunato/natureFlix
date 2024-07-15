import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoStyled = styled.img`
  	width: 168px;
  	height: 40px;
    cursor: pointer;
`;

export default function LogoAlura() {
    return (
        <Link to="/">
            <LogoStyled src="/image/LogoMain.png" alt="Logo Alura Azul" />
        </Link>
    );
}