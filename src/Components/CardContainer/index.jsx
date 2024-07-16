/* eslint-disable react/prop-types */
import styled from "styled-components";
import Card from "../Card";
import { useEffect, useState } from "react";

const TextStyled = styled.h1`
    color: var(--color-white);
    font-family: 'Roboto Regular', sans-serif;
    font-size: 32px;
    font-weight: 800;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    margin: 0 0 40px 0;
    padding: 0;
    width: 432px;
    height: 70px;
    border-radius: 15px;
`;

const DivCard = styled.div`
    width: 100%;
    display: inline-flex;
    gap: 25px;
    margin-bottom: 93px;
    overflow-x: auto;
`;

export default function CardContainer() {

    const [cardList, setCardList] = useState([]);

    const ListaCategories = [{id: 1, title: 'front-end'}, {id: 2, title: 'back-end'}, {id: 3, title: 'mobile'}];

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Ricardo-Forttunato/natureFlix/cards')
        .then(Response => Response.json())
        .then(data => setCardList(data))
    }, []);

    return (
        <>
            {ListaCategories.map((item, index) => {
                return(
                <>
                    <TextStyled 
                        key={index}
                        style={{backgroundColor: `var(--color-${item.title})`}}
                    >{item.title}</TextStyled>
                    <DivCard>
                        {cardList.filter((card) => card.categories === item.title && card.id > 0).map((card) => {
                            return(
                                <Card
                                    key={card.id}
                                    title={card.title}
                                    image={card.image}
                                    categories={card.categories}
                                />
                            )
                        })}
                    </DivCard>
                </>
                )
            })}
        </>
    )
}