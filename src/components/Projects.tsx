import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <>
      <h2 className="text-xl p-2">What have I built?</h2>
      <div className="w-full">
        <ProjectsCard
          title="FestiSounds"
          description="exampleDescription"
          previewPath="examplePreviewPath"
          previewAlt="examplePreviewAlt"
          projectURL="exampleURL"
          // projectGitHub="exampleGitHub"
        />
        <ProjectsCard
          title="exampleTitle"
          description="exampleDescription"
          previewPath="examplePreviewPath"
          previewAlt="examplePreviewAlt"
          projectURL="exampleURL"
          // projectGitHub="exampleGitHub"
        />
      </div>
    </>
  );
};

Projects.propTypes = {};

export default Projects;
