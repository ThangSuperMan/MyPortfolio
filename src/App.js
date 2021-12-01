import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Posts from "./components/Posts";
import Works from "./components/Works";
import Footer from "./components/Footer";
import CraftDog from "./components/CraftDog";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <CraftDog />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
