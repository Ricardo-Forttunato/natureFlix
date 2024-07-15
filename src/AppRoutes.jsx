import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicialPage from "./Components/Pages/InicialPage";
import NewVideo from "./Components/Pages/NewVideo";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import GlobalPages from "./Components/Pages/GlobalPages";

function AppRoutes() {
  return (

	<BrowserRouter>
			<Routes>
				<Route path="/" element={<GlobalPages />} >
					<Route index element={<InicialPage />} />
					<Route path="newvideo" element={<NewVideo />}/>
					<Route path="*" element={<NotFoundPage/>}/>
				</Route>
			</Routes>
	</BrowserRouter>
  );
}

export default AppRoutes;