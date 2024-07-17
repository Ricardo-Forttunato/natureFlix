import styled from "styled-components";
import FormInput from "../../Components/FormInput";
import FormSelect from "../../Components/FormSelect";
import FormTextArea from "../../Components/FormTextArea";
import FormBtn from "../../Components/FormBtn";

const SectionStyled = styled.section`
  width: 1360px;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 47px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 1172px;
  max-width: 100%;
  margin: 0 auto;
`;

const TitleStyled = styled.h1`
  font-family: "Roboto Regular", sans-serif;
  font-size: 60px;
  font-weight: 900;
  color: var(--color-white);
  margin: 0;
`;

const ParagraphStyled = styled.p`
  font-family: "Roboto Regular", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: var(--color-white);
  margin: 0;
  padding: 16px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 1192px;
  max-width: 100%;
  margin: 0 auto;
  /* Teste de estlização input + label */
  && input {
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
  }

  && label {
    width: 164px;
  max-width: 100%;
  height: 31px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
  }

  /* Teste de estlização select + option */
  && select {
    max-width: 573px;
    height: 62px;
    font-size: 20px;
    font-weight: 600;
    border: 3px solid var(--color-dark-gray);
    background-color: #191919;
    border-radius: 10px;
    color: var(--color-light-gray);
    padding: 0 10px;
  }

  && option {
    color: var(--color-light-gray);
  }

  /* Teste de estlização text-area */
  && textarea {
    width: 549px;
    max-width: 100%;
    height: 193px; 
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
    resize: none;
  }
  && input[type="reset"],
  && input[type="submit"] {
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
  }
`;

const TextFormContainer = styled.h3`
  width: 100%;
  font-size: 36px;
  font-weight: 600;
  color: var(--color-white);
  margin: 0;
  padding: 10px;
  text-transform: capitalize;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 108px;
  &::placeholder {
    color: var(--color-light-gray);
  }
`;

export default function NewVideo() {
  return (
	<SectionStyled>
		<TitleContainer>
			<TitleStyled>Novo vídeo</TitleStyled>
			<ParagraphStyled>
			complete o formulario para criar novos card de video.
			</ParagraphStyled>
		</TitleContainer>

		<FormContainer>
			<TextFormContainer>Criar Card</TextFormContainer>
			<InputContainer>
        <FormInput
          name="titulo"
          inputType="text"
          placeHolder="Insira o título"
        />
        <FormSelect name="categoria" />
			</InputContainer>
			<InputContainer>
        <FormInput
          name="imagem"
          inputType="url"
          placeHolder="Digite o link da imagem da capa"
        />
        <FormInput
          name="video"
          inputType="url"
          placeHolder="Digite o link do video"
        />
			</InputContainer>
        <FormTextArea
        name="Descrição"
        placeHolder="Sobre o que é esse vídeo?"
        />
			<InputContainer>
				<FormBtn name="Guardar" inputType="submit" value="Guardar" />
				<FormBtn name="Limpar" inputType="reset" value="Limpar" />
			</InputContainer>
		</FormContainer>
	</SectionStyled>
  );
}
