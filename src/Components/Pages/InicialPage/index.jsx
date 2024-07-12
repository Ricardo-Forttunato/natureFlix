import Banner from "../../Banner";
import styled from "styled-components";

const ContainerContent = styled.div`
  	width: 1440px;
  	max-width: 100vw;
  	min-height: 100vh;
  	margin: 0 auto;
`;

const TextStyled = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
    margin-top: 5rem;
`;

export default function InicialPage() {
    return (
        <ContainerContent>
            <Banner />
            <TextStyled>Teste de conteudo</TextStyled>
        </ContainerContent>
    )
}