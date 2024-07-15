import styled from "styled-components"
import GlobalStyles from "../../Components/GlobalStyles"
import NavBar from "../../Components/NavBar"
import Footer from "../../Components/Footer"
import { Outlet } from "react-router-dom"


const BackgroundStyled = styled.main`
  	background-color: rgba(0, 0,0 , 0.9);
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