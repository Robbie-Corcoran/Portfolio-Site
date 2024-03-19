const Intro = () => {
  return (
    <>
      <div className="font-sofia flex flex-col justify-center items-center p-4 h-screen w-screen bg-theme-black text-theme-text lg:flex lg:mx-auto lg:p-4">
        <div className="p-3 text-left">
          <h1 className="text-6xl">
            HELLO, I'M
            <br />
            <span className="text-8xl text-theme-primary font-bold hover:underline hover:decoration-theme-text hover:decoration-4">
              ROBBIE.
            </span>
          </h1>
          <h3 className="text-4xl font-light">
            A FULL STACK{" "}
            <span className="text-theme-primary font-bold">WEB DEVELOPER.</span>
          </h3>
        </div>
        <div className="flex flex-col gap-3 text-xl pt-6">
          <button className="border-2 bg-theme-primary rounded-lg border-theme-primary h-12 w-40 py-2 px-3 text-theme-text">
            <a href="#skills">SEE MY SKILLS</a>
          </button>
          <button className="rounded-lg bg-theme-text h-12 w-40 py-2 px-3 text-theme-black">
            <a href="#contact">CONTACT ME</a>
          </button>
        </div>
      </div>
    </>
  );
};

Intro.propTypes = {};

export default Intro;
