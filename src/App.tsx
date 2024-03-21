import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="about" element={<AboutPage />} />
        <Route index path="/" element={<LandingPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
