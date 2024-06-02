import NavBar from "./components/NavBar";
import "./App.css";
import TopMove from "./components/TopMoveAlways";
import Home from "./components/Home";
import FooterCustom from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import nightsky from "./Lottie/nightsky.json";
import Lottie from "lottie-react";

function App() {
  return (
    <BrowserRouter>
      <Lottie className="bg" animationData={nightsky} loop={true} />
      <Lottie className="bgtwo" animationData={nightsky} loop={true} />
      <Lottie className="bgtemp" animationData={nightsky} loop={true} />

      <NavBar />
      <TopMove />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/resume" element={<h1>Contact</h1>} />
      </Routes>
      <FooterCustom />
    </BrowserRouter>
  );
}

export default App;
