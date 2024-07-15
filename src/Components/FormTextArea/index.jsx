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

const TextAreaStyled = styled.input`
  width: 549px;
  max-width: 100%;
  height: 193px; 
  font-size: 20px;
  font-weight: 600;
  border: 3px solid var(--color-dark-gray);
  background-color: #191919;
  border-radius: 10px;
  &::placeholder{
    color: var(--color-light-gray);
    padding: 0 10px;
  }
  resize: none;
`

const LabelStyled = styled.label`
  width: 164px;
  max-width: 100%;
  height: 31px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
`
export default function FormTextArea(props) {
  return (
    <ContainerStyled>
      <LabelStyled htmlFor={`form_${props.name}`}>
        {props.name}
      </LabelStyled>
      <TextAreaStyled
        id={`fom_${props.name}`}
        name={props.name}
        rows="5"
        cols="50"
        placeholder={props.placeHolder}
      >
      </TextAreaStyled>
    </ContainerStyled>
  );
}
