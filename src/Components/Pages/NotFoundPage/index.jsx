import styled from "styled-components"

const NotFoundStyled= styled.main`
    background-color: rgba(0, 0,0 , 0.9);
  	width: 100vw;
  	min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TextStyled = styled.h1`
    color: #fff;
    font-size: 3rem;
    text-align: center;
`

export default function NotFoundPage() {
    return (
        <NotFoundStyled>
            <TextStyled>*** Page Not Found ***</TextStyled>
        </ NotFoundStyled>
    )
}