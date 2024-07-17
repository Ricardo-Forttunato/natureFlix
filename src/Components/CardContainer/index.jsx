/* eslint-disable react/prop-types */
import styled from "styled-components";
import Card from "../Card";
import { useEffect, useState } from "react";
import ModalEdit from "../ModalEdit";

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
    max-width: 432px;
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
    const ListaCategories = [{id: 1, title: 'natureza-selvagem'}, {id: 2, title: 'natureza-cidade'}, {id: 3, title: 'resgate'}];

    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Ricardo-Forttunato/natureFlix/cards')
        .then(Response => Response.json())
        .then(data => setCardList(data))
    }, []);

    return (
        <>
            {ListaCategories.map((item) => {
                return(
                <>
                    <TextStyled 
                        key={item.id}
                        style={{backgroundColor: `var(--color-${item.title})`}}
                    >
                        {item.title}
                    </TextStyled>
                    <DivCard>
                        {cardList.filter((card) => card.categories === item.title && card.id > 0).map((card, index) => {
                            const deleteCard = () => {
                                const newCardList = cardList.filter((cardItem) => cardItem.id !== card.id);
                                setCardList(newCardList);
                            }
                            return(
                                <Card
                                    key={index}
                                    title={card.title}
                                    image={card.image}
                                    categories={card.categories}
                                    cardDelete={deleteCard}
                                />
                            )
                        })}
                    </DivCard>
                    <ModalEdit />
                </>
                )
            })}
        </>
    )
}