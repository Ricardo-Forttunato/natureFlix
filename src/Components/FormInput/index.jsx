/* eslint-disable react/prop-types */
import styled from "styled-components"

const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputStyled = styled.input`
  max-width: 573px;
  height: 62px; 
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  border: 3px solid var(--color-dark-gray);
  background-color: #191919;
  border-radius: 10px;
  &::placeholder{
    color: var(--color-light-gray);
    padding: 0 10px;
  }
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

export default function FormInput(props) {
  return (
    <ContainerStyled>
      <LabelStyled htmlFor={`form_${props.name}`}>{props.name}</LabelStyled>
      <InputStyled
        type={props.inputType}
        id={`form_${props.name}`}
        name={props.name}
        placeholder={props.placeHolder}
      />
    </ContainerStyled>
  );
}
