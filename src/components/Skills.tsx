const Skills = () => {
  return (
    <>
      <div className="w-fit border border-theme-primary rounded-sm shadow m-2 ">
        <ul
          className="flex flex-wrap text-sm font-medium text-center text-gray-500 rounded-t-lg"
          id="defaultTab"
          data-tabs-toggle="#defaultTabContent"
          role="tablist"
        >
          <li className="me-2">
            <button
              id="frontend-tab"
              data-tabs-target="#frontend"
              type="button"
              role="tab"
              aria-controls="frontend"
              aria-selected="true"
              className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100"
            >
              Frontend
            </button>
          </li>
          <li className="me-2">
            <button
              id="backend-tab"
              data-tabs-target="#backend"
              type="button"
              role="tab"
              aria-controls="backend"
              aria-selected="false"
              className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100"
            >
              Backend
            </button>
          </li>
          <li className="me-2">
            <button
              id="misc-tab"
              data-tabs-target="#misc"
              type="button"
              role="tab"
              aria-controls="misc"
              aria-selected="false"
              className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100"
            >
              Misc
            </button>
          </li>
        </ul>
        <div id="defaultTabContent">
          <div
            className="p-4 bg-white rounded-lg md:p-8"
            id="about"
            role="tabpanel"
            aria-labelledby="about-tab"
          >
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">
              Powering innovation & trust at 200,000+ companies worldwide
            </h2>
            <p className="mb-3 text-gray-500">
              Empower Developers, IT Ops, and business teams to collaborate at
              high velocity. Respond to changes and deliver great customer and
              employee service experiences fast.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
            >
              Learn more
              <svg
                className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </div>
          <div
            className="hidden p-4 bg-white rounded-lg md:p-8"
            id="services"
            role="tabpanel"
            aria-labelledby="services-tab"
          >
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900">
              We invest in the world’s potential
            </h2>
            {/* List */}
            <ul
              role="list"
              className="space-y-4 text-gray-500 dark:text-gray-400"
            >
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">
                  Dynamic reports and dashboards
                </span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">Templates for everyone</span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">Development workflow</span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">
                  Limitless business automation
                </span>
              </li>
            </ul>
          </div>
          <div
            className="hidden p-4 bg-white rounded-lg md:p-8"
            id="statistics"
            role="tabpanel"
            aria-labelledby="statistics-tab"
          >
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                <dd className="text-gray-500">Developers</dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                <dd className="text-gray-500">Public repositories</dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                <dd className="text-gray-500">Open source projects</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

Skills.propTypes = {};

export default Skills;
