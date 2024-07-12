import styled from "styled-components";


const BannerStyled = styled.div`
    background-image: url('/image/player.png');
    background-blend-mode: darken, luminosity;
    background-color: rgba(0, 18, 51, 0.56);
    background-size: 100% 105%;
    background-repeat: no-repeat;
    background-position-y: -80px;
    width: 1440px;
    max-width: 100vw;
    height: 744px;
    position: relative;  
`;

export default function Banner() {
    return (
        <BannerStyled>
        </BannerStyled>
    )
}