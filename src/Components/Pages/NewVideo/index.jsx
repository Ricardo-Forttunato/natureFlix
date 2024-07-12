import styled from "styled-components"

const NewVideoStyled = styled.div`
    width: 1440px;
    max-width: 100%;
  	min-height: 100vh;
  	margin: 0 auto;
`

export default function NewVideo() {
    return (
        <NewVideoStyled>
            <h1>New Video</h1>
        </NewVideoStyled>
    )
}