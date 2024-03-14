import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <div className="lg:flex lg:w-full lg:max-w-screen-xl lg:mx-auto lg:p-4 lg:justify-center">
        <Intro />

        <About />
      </div>

      <Skills />

      <Projects />

      <Testimonials />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
