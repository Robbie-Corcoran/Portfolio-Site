import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <>
      <h2 className="text-xl p-2 mt-6">What have I built?</h2>
      <div className="w-full">
        <ProjectsCard
          title="FestiSounds"
          description="FestiSounds is a easy-to-use Web App that allows users find new artists at their favourite festivals. By logging in via Spotify, our powerful algorythms scan your listening history and recommend new artist that we know you'll love at your upcoming music events."
          previewPath="public/projects/festisounds/festisounds-preview.png"
          previewAlt="FestiSounds Preview"
          projectURL="https://festisounds.vercel.app/"
        />
        <ProjectsCard
          title="Trim Bounce"
          description="Trim Bounce is your one-stop-shop for bouncing castle in Co. Meath, Ireland. Whether you're looking for small compact fun, or gruling inflatable challenges, Trim Bounce can cater to every event and party size."
          previewPath="public/projects/trim-bounce/trim-bounce-preview.png"
          previewAlt="Trim Bounce Preview"
          projectURL="https://www.trimbounce.com/"
        />
      </div>
    </>
  );
};

Projects.propTypes = {};

export default Projects;
