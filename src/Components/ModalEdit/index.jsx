import styled from 'styled-components'
import FormInput from '../../Components/FormInput'
import FormSelect from '../../Components/FormSelect'
import FormBtn from '../../Components/FormBtn'
import FormtextArea from '../../Components/FormTextArea'
import { useState } from 'react'

export default function ModalEdit () {

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <dialog
            open={isOpen}
        >
            <form method='dialog'>
                <FormInput
                    name="titulo"
                    inputType="text"
                    placeHolder="insira o titulo"
                />
                <FormSelect name="categoria"/>
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
            </form>
        </dialog>  
  )
}