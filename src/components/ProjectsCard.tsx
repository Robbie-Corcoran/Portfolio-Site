type ProjectsCard = {
  title: string;
  subtitle: string;
  description: string;
  previewPath: string;
  previewAlt: string;
};

const ProjectsCard = ({
  title,
  subtitle,
  description,
  previewPath,
  previewAlt,
}: ProjectsCard) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
      <img src={previewPath} alt={previewAlt} />
    </div>
  );
};

export default ProjectsCard;
