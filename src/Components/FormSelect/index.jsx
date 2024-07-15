import { useState } from "react";
import styled from "styled-components";

/* eslint-disable react/prop-types */

const ContainerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `;

  const SelectStyled = styled.select`
    max-width: 573px;
    height: 62px;
    font-size: 20px;
    font-weight: 600;
    border: 3px solid var(--color-dark-gray);
    background-color: #191919;
    border-radius: 10px;
    color: var(--color-light-gray);
    padding: 0 10px;
  `;

  const LabelStyled = styled.label`
    width: 164px;
    max-width: 100%;
    height: 31px;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
  `;

  const OptionStyled = styled.option`
    color: var(--color-light-gray);
  `;  

export default function FormSelect(props) {
  const [categories, setCategories] = useState("Selecione uma categoria!");

  const categorias = [
    "Selecione uma categoria!",
    "Frontend",
    "Backend",
    "Mobile",
  ];

  return (
    <ContainerStyled>
      <LabelStyled htmlFor={`form_${props.name}`}>{props.name}</LabelStyled>
      <SelectStyled
        value={categories}
        onChange={(event) => setCategories(event.target.value)}
        id={`form_${props.name}`}
        name={props.name}
      >
        {categorias.map((categoria, index) => (
          <OptionStyled key={index} value={categoria}>
            {categoria}
          </OptionStyled>
        ))}
      </SelectStyled>
    </ContainerStyled>
  );
}
