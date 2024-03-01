import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="w-full">
        <div className="border border-theme-primary rounded-sm shadow m-2">
          <ul
            className="flex flex-wrap text-sm font-medium text-center text-gray-500 rounded-t-lg"
            id="defaultTab"
            data-tabs-toggle="#defaultTabContent"
            role="tablist"
          >
            <li className="me-2">
              <button
                id="frontend-tab"
                type="button"
                role="tab"
                aria-controls="frontend"
                aria-selected={activeTab === "frontend"}
                className={`inline-block p-4 ${
                  activeTab === "frontend"
                    ? "text-blue-600"
                    : "hover:text-gray-600 hover:bg-gray-100"
                } rounded-ss-lg`}
                onClick={() => handleTabClick("frontend")}
              >
                Frontend
              </button>
            </li>
            <li className="me-2">
              <button
                id="backend-tab"
                type="button"
                role="tab"
                aria-controls="backend"
                aria-selected={activeTab === "backend"}
                className={`inline-block p-4 ${
                  activeTab === "backend"
                    ? "text-blue-600"
                    : "hover:text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => handleTabClick("backend")}
              >
                Backend
              </button>
            </li>
            <li className="me-2">
              <button
                id="misc-tab"
                type="button"
                role="tab"
                aria-controls="misc"
                aria-selected={activeTab === "misc"}
                className={`inline-block p-4 ${
                  activeTab === "misc"
                    ? "text-blue-600"
                    : "hover:text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => handleTabClick("misc")}
              >
                Misc
              </button>
            </li>
          </ul>
          <div>
            <div
              className={`p-4 bg-white rounded-lg md:p-8 ${
                activeTab === "frontend" ? "block" : "hidden"
              }`}
              id="frontend"
              role="tabpanel"
              aria-labelledby="frontend-tab"
            >
              Frontend Tab
            </div>
            <div
              className={`p-4 bg-white rounded-lg md:p-8 ${
                activeTab === "backend" ? "block" : "hidden"
              }`}
              id="backend"
              role="tabpanel"
              aria-labelledby="backend-tab"
            >
              Backend Tab
            </div>
            <div
              className={`p-4 bg-white rounded-lg md:p-8 ${
                activeTab === "misc" ? "block" : "hidden"
              }`}
              id="misc"
              role="tabpanel"
              aria-labelledby="misc-tab"
            >
              Misc Tab
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Skills.propTypes = {};

export default Skills;
