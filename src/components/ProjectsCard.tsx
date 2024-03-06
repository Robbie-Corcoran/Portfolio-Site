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
      <div className="max-w-sm bg-white border border-theme-primary rounded-lg shadow m-auto mb-4">
        <a href={projectURL} target="_blank">
          <img className="rounded-t-lg" src={previewPath} alt={previewAlt} />
        </a>
        <div className="p-5">
          <a href={projectURL} target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">{description}</p>
          <button>
            <a
              href={projectURL}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
