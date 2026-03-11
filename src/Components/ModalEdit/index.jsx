import styled from 'styled-components'
import FormInput from '../../Components/FormInput'
import FormSelect from '../../Components/FormSelect'
import FormBtn from '../../Components/FormBtn'
import FormtextArea from '../../Components/FormTextArea'
import { useRef } from 'react'

const Dialog = styled.dialog`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(3, 18, 47, 0.76);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 84px 84px;    
    border: 5px solid var(--color-natureza-selvagem);
    border-radius: 15px;
    background-color: #03122f;
      /* Teste de estlização input + label */
    && input {
        max-width: 573px;
        height: 52px; 
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        border: 3px solid var(--color-blue);
        background-color: #03122f;
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
        border: 3px solid var(--color-blue);
        background-color: #03122f;
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
        height: 142px; 
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        border: 3px solid var(--color-blue);
        background-color: #03122f;
        border-radius: 10px;
        &::placeholder{
        color: var(--color-light-gray);
        padding: 0 10px;
        }
        resize: none;
    }
    /* Teste de estlização input types submit + reset */
    && input[type="reset"],
    && input[type="submit"] {
        width: 180px;
        height: 54px;
        font-family: "Source Sans 3 SemiBold ", sans-serif;
        color: #fff;
        font-size: 20px;
        font-weight: 900;
        border: 3px solid var(--color-blue);
        background-color: #03122f;
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
`

const DivBtn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function ModalEdit () {

    const dialogRef = useRef(null);
    
    return (
        <Dialog 
            ref={dialogRef}
        >
            <Form method='dialog'>
                <FormInput
                    name="titulo"
                    inputType="text"
                    placeHolder="insira o titulo"
                />
                <FormSelect 
                    name="categoria"
                />
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
                <FormtextArea 
                    name="Descrição"
                    placeHolder="Sobre o que é esse vídeo?"
                />
                <DivBtn>
                    <FormBtn 
                        name="Guardar" 
                        inputType="submit" 
                        value="Guardar"
                    />
                    <FormBtn 
                        name="Limpar" 
                        inputType="reset" 
                        value="Limpar"
                    />
                </DivBtn>
            </Form>
        </Dialog>  
    )
}