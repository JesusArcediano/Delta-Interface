import { Routes, Route } from "react-router-dom";
import { Home, PricingPage, SignupPage } from "./pages";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="pricing" element={<PricingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
