const About = () => {
  return (
    <div className="my-auto">
      <section
        id="about"
        className="text-theme-primary text-center lg:text-left"
      >
        <hr className="w-screen lg:hidden" />
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 lg:max-w-screen-sm">
          <p>
            I use passion to bring together design, development, and
            functionality.
          </p>
          <br />
          <p>
            Dedicated to craft beautiful user expereince while maintaining power
            under the hood.
          </p>
          <br />
          <p>
            Im open to postions as a Frontend, Backend, or Full Stack developer,
            as well as projects and collabs.{" "}
            <a href="#contact" className="hover:underline font-bold">
              Just reach out
            </a>
            !
          </p>
          <br />
          <p>
            In the meantime, please feel free to checkout my{" "}
            <a
              href="https://github.com/Robbie-Corcoran"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/robbie-corcoran/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
