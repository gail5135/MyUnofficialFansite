// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/profile";
import Discography from "./components/Discography/discography";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav/>
        <Routes>
          <Route path="/" element={<Profile/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/discography" element={<Discography/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
