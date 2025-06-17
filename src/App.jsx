import "./App.css";
import Navbar from "./section/navbar";
import Home from "./section/home";
import Intro from "./section/intro";
import FormMets from "./section/form";
import Footer from "./section/footer.jsx";
import Mets from "./section/mets.jsx";
import NoMets from "./section/noMets.jsx";
function App() {
  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>
      <section id="home">
        <Home />
      </section>
      <section id="intro">
        <Intro />
      </section>
      <section id="cek">
        <FormMets />
      </section>
      <section id="footer">
        <Footer />
      </section>
      {/* <section id="mets">
        <Mets />
      </section>
      <section id="no-mets">
        <NoMets />
      </section> */}
    </>
  );
}

export default App;
