import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <>
      <div>Projects</div>
      <div className="w-full">
        <div className="border border-theme-primary rounded-sm shadow m-2">
          <ProjectsCard
            title="exampleTitle"
            subtitle="exampleSubtitle"
            description="exampleDescription"
            previewPath="examplePreviewPath"
            previewAlt="examplePreviewAlt"
          />
        </div>
      </div>
    </>
  );
};

Projects.propTypes = {};

export default Projects;
