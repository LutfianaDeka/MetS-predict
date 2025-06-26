import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./section/navbar";
import Home from "./section/home";
import Intro from "./section/intro";
import FormMets from "./section/form";
import Footer from "./section/footer.jsx";
import Mets from "./section/mets.jsx";
import NoMets from "./section/noMets.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Home />
              </section>
              <section id="intro">
                <Intro />
              </section>
              <section id="cek">
                {" "}
                <FormMets />
              </section>
            </>
          }
        />
        <Route path="/mets" element={<Mets />} />
        <Route path="/nomets" element={<NoMets />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
