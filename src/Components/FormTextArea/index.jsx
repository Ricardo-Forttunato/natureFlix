/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export default function FormTextArea(props) {
  return (
    <ContainerStyled>
      <label htmlFor={`form_${props.name}`}>
        {props.name}
      </label>
      <textarea
        id={`fom_${props.name}`}
        name={props.name}
        placeholder={props.placeHolder}
      >
      </textarea>
    </ContainerStyled>
  );
}
