const Intro = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full ">
        <section className="text-theme-primary text-center">
          <h1 className="text-2xl">
            Hi, I'm <span className="text-4xl font-bold">Robbie</span>.
          </h1>
          <h3 className="text-2xl">Welcome to my portfolio.</h3>
          <hr className="w-screen" />
          <h3>
            {" "}
            This site is currently under heavy construction and will be updated
            shortly.
          </h3>
          <h3>
            In the meantime, please feel free to checkout my{" "}
            <a href="https://github.com/Robbie-Corcoran" className="underline">
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/robbie-corcoran/"
              className="underline"
            >
              LinkedIn
            </a>
            .
          </h3>
        </section>
      </div>
    </>
  );
};

Intro.propTypes = {};

export default Intro;
