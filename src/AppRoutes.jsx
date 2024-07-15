import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalPages from "./Pages/GlobalPages";
import InicialPage from "./Pages/InicialPage";
import NewVideo from "./Pages/NewVideo";
import NotFoundPage from "./Pages/NotFoundPage";

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