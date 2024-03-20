import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
  return (
    <>
      <Intro />

      <Skills />

      <Projects />

      <Testimonials />

      <Contact />
    </>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
