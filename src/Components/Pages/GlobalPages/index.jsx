import styled from "styled-components"
import GlobalStyles from "../../GlobalStyles"
import NavBar from "../../NavBar"
import Footer from "../../Footer"
import { Outlet } from "react-router-dom"


const BackgroundStyled = styled.main`
  	background-color: rgba(0, 0,0 , 0.9);
  	width: 100vw;
  	min-height: 100vh;
`

export default function GlobalPages() {
    return (
        <main>
            <BackgroundStyled>
                <GlobalStyles />
                <NavBar />
                <Outlet />
                <Footer />
            </BackgroundStyled>
        </main>
    )
}