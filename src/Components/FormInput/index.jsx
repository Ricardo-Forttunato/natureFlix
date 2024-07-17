/* eslint-disable react/prop-types */
import styled from "styled-components"

const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function FormInput(props) {
  return (
    <ContainerStyled>
      <label htmlFor={`form_${props.name}`}>{props.name}</label>
      <input
        type={props.inputType}
        id={`form_${props.name}`}
        name={props.name}
        placeholder={props.placeHolder}
      />
    </ContainerStyled>
  );
}
