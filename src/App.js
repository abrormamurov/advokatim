import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<MainContent />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
