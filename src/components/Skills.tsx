const Skills = () => {
  return (
    <>
      <div className="w-fit border border-theme-primary rounded-sm shadow m-auto">
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
            id="frontend"
            role="tabpanel"
            aria-labelledby="frontend-tab"
          >
            Frontend Tab
          </div>
          <div
            className="p-4 bg-white rounded-lg md:p-8"
            id="backend"
            role="tabpanel"
            aria-labelledby="backend-tab"
          >
            Backend Tab
          </div>
          <div
            className="p-4 bg-white rounded-lg md:p-8"
            id="misc"
            role="tabpanel"
            aria-labelledby="misc-tab"
          >
            Misc Tab
          </div>
        </div>
      </div>
    </>
  );
};

Skills.propTypes = {};

export default Skills;
