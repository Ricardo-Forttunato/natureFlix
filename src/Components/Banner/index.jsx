import styled from "styled-components";

const BannerStyled = styled.div`
    background-image: url('/image/player.png');
    background-blend-mode: darken, luminosity;
    background-color: rgba(0, 18, 51, 0.56);
    background-size: 100% 105%;
    background-repeat: no-repeat;
    background-position-y: -110px;
    width: 1440px;
    max-width: 100vw;
    height: 744px;
    position: relative;  
`;

const TitleStyled = styled.h1`
    width: 297px;
    height: 92px;
    margin: 0;
    background-color: #6BD1FF;
    font-family: 'Roboto', sans-serif;
    color: #F5F5F5;
    font-size: 3rem;
    text-transform: uppercase;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(366px - 125px);
    left: 40px;
`;

const BannerImg = styled.img`
    position: absolute;
    top: calc(343px - 125px);
    right: 40px;
   
`
const BannerText = styled.h3`
    margin: 0;
    font-size: 2.8rem;
    font-family: 'Roboto Regular', sans-serif;
    color: #F5F5F5;
    position: absolute;
    bottom: 280px;
    left: 40px;
`;

const BannerParagraph = styled.p`
    margin: 0;
    font-family: 'Roboto Regular', sans-serif;
    font-size: 1.1rem;
    font-weight: 300;
    color: #F5F5F5;
    text-align: justify;
    max-width: 663px;
    min-height: 110px;
    position: absolute;
    bottom: 161px;
    left: 43px;
`;

export default function Banner() {
    return (
        <BannerStyled>
            <TitleStyled>FrontEnd</TitleStyled>
            <BannerImg src="/image/player.png" alt="Imagem de um player de video"/>
            <BannerText>SEO com React</BannerText>
            <BannerParagraph>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma &quot;Pokedex&quot;! </BannerParagraph>
        </BannerStyled>
    )
}