const About = () => {
  return (
    <div>
      <section id="about" className="text-theme-primary text-center">
        <hr className="w-screen" />
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <p>
            I'm Full Stack Web Developer from Ireland, based in Amsterdam, NL.
          </p>
          <br />
          <p>
            After a decade in Sales, Marketing & Communications, I embraced my
            passion for programming in 2022, diving into Front-End Development.
            Since 2023, I've broadened my skill set to Back-End Development,
            mastering server-side activities, RESTful APIs, TDD, and business
            logic. Now, I'm a Full-Stack Developer, always pushing my limits and
            eager to learn new techs.
          </p>
          <br />
          <p>
            When I'm not coding, you'll find me outdoors, playing football,
            rock-climbing, surfing, or making music.
          </p>
          <br />
          <p>
            Im open to postions as a Frontend, Backend, or Full Stack developer,
            as well as projects and collabs. Just reach out!
          </p>
          <br />
          <p>
            In the meantime, please feel free to checkout my{" "}
            <a
              href="https://github.com/Robbie-Corcoran"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/robbie-corcoran/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
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
