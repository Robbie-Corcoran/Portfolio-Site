import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <>
      <div>Projects</div>
      <div className="w-full">
        <ProjectsCard
          title="exampleTitle"
          subtitle="exampleSubtitle"
          description="exampleDescription"
          previewPath="examplePreviewPath"
          previewAlt="examplePreviewAlt"
        />
        <ProjectsCard
          title="exampleTitle"
          subtitle="exampleSubtitle"
          description="exampleDescription"
          previewPath="examplePreviewPath"
          previewAlt="examplePreviewAlt"
        />
      </div>
    </>
  );
};

Projects.propTypes = {};

export default Projects;
