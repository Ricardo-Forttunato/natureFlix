import { useState } from "react";
import styled from "styled-components";

/* eslint-disable react/prop-types */

const ContainerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `; 

export default function FormSelect(props) {
  const [categories, setCategories] = useState("Selecione uma categoria!");

  const categorias = [
    "Selecione uma categoria!",
    "Natureza Selvagem",
    "Natureza Cidade",
    "Resgate",
  ];

  return (
    <ContainerStyled>
      <label htmlFor={`form_${props.name}`}>{props.name}</label>
      <select
        value={categories}
        onChange={(event) => setCategories(event.target.value)}
        id={`form_${props.name}`}
        name={props.name}
      >
        {categorias.map((categoria, index) => (
          <option key={index} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </ContainerStyled>
  );
}
