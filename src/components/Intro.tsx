const Intro = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-theme-primary text-center items-center pb-4 lg:p-4 lg:w-fit">
        <img
          className="rounded-full w-40 h-40 border-theme-primary border-2"
          src="portrait.jpg"
          alt="robbie corcoran's portrait"
        ></img>
        <div className="p-3">
          <h1 className="text-2xl">
            Hi, I'm <span className="text-4xl font-bold">Robbie</span>.
          </h1>
          <h3 className="text-2xl">Welcome to my portfolio.</h3>
        </div>
      </div>
    </>
  );
};

Intro.propTypes = {};

export default Intro;
