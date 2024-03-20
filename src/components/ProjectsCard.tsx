type ProjectsCardType = {
  title: string;
  description: string;
  previewPath: string;
  previewAlt: string;
  projectURL: string;
};

const ProjectsCard = ({
  title,
  description,
  previewPath,
  previewAlt,
  projectURL,
}: ProjectsCardType) => {
  return (
    <>
      <div className="max-w-sm border-2 border-theme-border border-t-0 hover:scale-[101%] duration-200 rounded-lg shadow m-auto mb-4 md:max-w-md">
        <a href={projectURL} target="_blank">
          <img className="rounded-t-md" src={previewPath} alt={previewAlt} />
        </a>
        <div className="p-5">
          <a href={projectURL} target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-theme-black">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal h-48 overflow-auto overflow-x-scroll text-theme-black">
            {description}
          </p>
          <button className="border rounded-lg bg-theme-primary text-theme-text ">
            <a
              href={projectURL}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg hover:ring-2 focus:outline-none hover:ring-theme-secondary hover:bg-theme-text hover:text-theme-primary"
            >
              Visit Site
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
