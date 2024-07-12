import styled from "styled-components";

const LogoStyled = styled.img`
  	width: 168px;
  	height: 40px;
`;

export default function LogoAlura() {
    return (
        <LogoStyled src="/image/LogoMain.png" alt="Logo Alura Azul" />
    );
}