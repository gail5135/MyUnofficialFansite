import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import Discography from "./pages/Discography/Discography";
import Album from "./pages/AlbumDetail/AlbumDetail";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Nav />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="profile" element={<Profile />} />
					<Route path="/discography" element={<Discography />} />
					<Route path="/discography/detail/:albumType/:albumCode" element={<Album />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
