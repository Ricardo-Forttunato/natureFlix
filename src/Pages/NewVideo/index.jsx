import styled from "styled-components";
import FormInput from "../../Components/FormInput";
import FormSelect from "../../Components/FormSelect";
import FormTextArea from "../../Components/FormTextArea";

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

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 60px;
	width: 1192px;
	max-width: 100%;
	margin: 0 auto;
`;

const InputContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 20px;
	width: 100%;
	height:108px;
	&::placeholder{
		color: var(--color-light-gray);
	}
`;

const TitleStyled = styled.h1`
	font-family: 'Roboto Regular', sans-serif;
	font-size: 60px;
	font-weight: 900;
	color: var(--color-white);
	margin: 0;
`;

const ParagraphStyled = styled.p`
	font-family: 'Roboto Regular', sans-serif;
	font-size: 20px;
	font-weight: 400;
	color: var(--color-white);
	margin: 0;
	padding: 16px;
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

export default function NewVideo() {

  return (
    <SectionStyled>
      <TitleContainer>
        <TitleStyled>Novo vídeo</TitleStyled>
        <ParagraphStyled>complete o formulario para criar novos card de video.</ParagraphStyled>
      </TitleContainer>
      <FormContainer>
        <TextFormContainer>Criar Card</TextFormContainer>
				<InputContainer>
          <FormInput 
						name="titulo" 
						inputType="text" 
						placeHolder="Insira o título" 
					/>
					<FormSelect 
						name="categoria"
					/>					
        </InputContainer> 
        <InputContainer>
          <FormInput 
					name="imagem" 
					inputType="url" 
					placeHolder="Digite o link da imagem" 
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

      </FormContainer>
    </SectionStyled>
  );
}
