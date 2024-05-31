import NavBar from "./components/NavBar";
import "./App.css";
import TopMove from "./components/TopMoveAlways";
import Home from "./components/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <TopMove />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
