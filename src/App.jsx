import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicialPage from "./Components/Pages/InicialPage";
import NewVideo from "./Components/Pages/NewVideo";
import GlobalStyles from "./Components/GlobalStyles";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import styled from "styled-components";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

const BackgroundStyled = styled.main`
  	background-color: rgba(0, 0,0 , 0.9);
  	width: 100vw;
  	min-height: 100vh;
`


function App() {
  return (

	<BrowserRouter>
		<BackgroundStyled>
			<GlobalStyles />
			<NavBar />
			<Routes>
				<Route path="/" element={<InicialPage />} />
				<Route path="/newvideo" element={<NewVideo />}/>
				<Route path="*" element={<NotFoundPage/>}/>
			</Routes>
			<Footer />
		</BackgroundStyled>
	</BrowserRouter>
  );
}

export default App;