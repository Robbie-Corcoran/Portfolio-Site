const About = () => {
  return (
    <div className="my-auto">
      <section
        id="about"
        className="w-full max-w-screen-xl mx-auto p-4 pt-20 -mb-16 font-sofia"
      >
        <h1 className="p-2 text-4xl text-theme-primary font-bold tracking-tight">
          Want to know more about me?
        </h1>
        <div className="max-w-sm bg-white m-auto md:max-w-md lg:max-w-none">
          <p>
            I use passion to bring together design, development, and
            functionality.
          </p>
          <br />
          <p>
            Dedicated to crafting beautiful user experiences while maintaining
            all the power under the hood.
          </p>
          <br />
          <p>
            I'm currently open to postions as a Frontend, Backend, or Full Stack
            Developer, as well as projects and collabs.
            <p>
              <a href="#contact" className="hover:underline font-bold">
                Just reach out
              </a>
              !
            </p>
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
