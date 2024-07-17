/* eslint-disable react/prop-types */
import styled from "styled-components"

const ContainerStyled = styled.div`
  display: flex;
`;

const InputStyled = styled.input`
  width: 180px;
  height: 54px;
  font-family: "Source Sans 3 SemiBold ", sans-serif;
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  border: 3px solid var(--color-dark-gray);
  background-color: #191919;
  border-radius: 10px;
  &::placeholder{
    color: var(--color-light-gray);
    padding: 0 10px;
  }
  &:hover {
    border: 3px solid var(--color-blue);
  }
  cursor: pointer;
`;

export default function FormBtn(props) {
    return (
      <ContainerStyled>
        <InputStyled
          type={props.inputType}
          id={`form_${props.name}`}
          name={props.name}
          value={props.value}
        />
      </ContainerStyled>
    );
  }
  