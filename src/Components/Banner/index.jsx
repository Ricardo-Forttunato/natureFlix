/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const BannerStyled = styled.div`
    background-blend-mode: darken, luminosity;
    background-color: rgba(0, 18, 51, 0.56);
    background-size: 100% 105%;
    background-repeat: no-repeat;
    background-position-y: -110px;
    height: 744px;
    position: relative;
`;

const TitleStyled = styled.h1`
    width: 362px;
    height: 92px;
    margin: 0;
    background-color: #6BD1FF;
    font-family: 'Roboto', sans-serif;
    color: #F5F5F5;
    font-size: 2rem;
    text-transform: uppercase;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(366px - 125px);
    left: 40px;
`;

const BannerPlayer = styled.div`
    position: absolute;
    top: calc(343px - 125px);
    right: 40px;
    margin: 0;
`
const BannerText = styled.h3`
    max-width: 640px;
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
    max-width: 640px;
    min-height: 110px;
    position: absolute;
    bottom: 161px;
    left: 43px;
`;

export default function Banner({ id, title, image, categories, deleteCard }) {

    const [player, setPlayer] = useState([]);

    const param = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Ricardo-Forttunato/natureFlix/cards/2`)
        .then(Response => Response.json())
        .then(data => setPlayer(data))
    }, []);

    return (
        <BannerStyled
            style={{backgroundImage: `url(${player.image})`}}
        >
            <TitleStyled
                style={
                    {backgroundColor: `var(--color-${player.categories})`}
            }
            >{player.categories}
            </TitleStyled>
            <BannerPlayer >
                <iframe
                    width="646px" 
                    height="333px" 
                    src={player.video} 
                    title={player.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
            </BannerPlayer>
            <BannerText>{player.title}</BannerText>
            <BannerParagraph>{player.description}</BannerParagraph>
        </BannerStyled>
    )
}