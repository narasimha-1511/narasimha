import NavBar from "./components/NavBar";
import "./App.css";
import TopMove from "./components/TopMoveAlways";
import Home from "./components/Home";
import FooterCustom from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
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
    </div>
  );
}

export default App;
