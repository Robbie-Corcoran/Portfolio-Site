import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="w-full max-w-screen-xl mx-auto p-4 pt-20 -mb-16 font-sofia"
      >
        <h2 className="p-2 text-4xl text-theme-primary font-bold tracking-tight">
          What have I built?
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 ">
          <ProjectsCard
            title="FestiSounds"
            description="FestiSounds is a easy-to-use Web App that allows users find new artists at their favourite festivals. By logging in via Spotify, our powerful algorythms scan your listening history and recommend new artist that we know you'll love at your upcoming music events."
            previewPath="projects/festisounds/festisounds-preview.png"
            previewAlt="FestiSounds Preview"
            projectURL="https://festisounds.vercel.app/"
          />
          <ProjectsCard
            title="Trim Bounce"
            description="Trim Bounce is your one-stop-shop for bouncing castle in Co. Meath, Ireland. Whether you're looking for small compact fun, or gruling inflatable challenges, Trim Bounce can cater to every event and party size."
            previewPath="projects/trim-bounce/trim-bounce-preview.png"
            previewAlt="Trim Bounce Preview"
            projectURL="https://www.trimbounce.com/"
          />
          <ProjectsCard
            title="Cocktail Compass"
            description="Cocktail Compass is an all-in-one bartender's best friend. With the ability to search by name, ingredient and flavour profiles, you'll never be left speachless when the customer doesnt know what they like or want! NB: The full app is currently under re-design & re-construction and may not work as intended."
            previewPath="projects/cocktail-compass/cocktail-compass-preview.png"
            previewAlt="Cocktail Compass Preview"
            projectURL="https://cocktail-compass-frontend.vercel.app/"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
