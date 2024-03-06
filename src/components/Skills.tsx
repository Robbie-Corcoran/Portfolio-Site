import { useState } from "react";
import SkillsIcon from "./SkillsIcon";

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>("frontend");
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const skillIcons = [
    {
      category: "frontend",
      skills: [
        "javascript",
        "typescript",
        "react",
        "vue",
        "angular",
        "alpine-js",
        "tailwind",
        "bootstrap",
        "jquery",
        "wordpress",
      ],
    },
    {
      category: "backend",
      skills: ["java", "python", "spring", "django", "node-js", "maven"],
    },
    {
      category: "databasing",
      skills: ["postgresql", "mongodb", "sqlite", "hibernate"],
    },
    {
      category: "cloud-hosting",
      skills: ["azure", "aws", "docker", "hostinger", "vercel", "shopify"],
    },
    {
      category: "misc",
      skills: [
        "git",
        "github",
        "indesign",
        "photoshop",
        "premiere-pro",
        "jetbrains",
      ],
    },
  ];

  const frontendSkills = skillIcons.find(
    (category) => category.category === "frontend"
  );

  const backendSkills = skillIcons.find(
    (category) => category.category === "backend"
  );

  const databasingSkills = skillIcons.find(
    (category) => category.category === "databasing"
  );
  const cloudHostingSkills = skillIcons.find(
    (category) => category.category === "cloud-hosting"
  );
  const miscSkills = skillIcons.find(
    (category) => category.category === "misc"
  );

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
                id="databasing-tab"
                type="button"
                role="tab"
                aria-controls="databasing"
                aria-selected={activeTab === "databasing"}
                className={`inline-block p-4 ${
                  activeTab === "databasing"
                    ? "text-blue-600"
                    : "hover:text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => handleTabClick("databasing")}
              >
                Databasing
              </button>
            </li>
            <li className="me-2">
              <button
                id="cloud-hosting-tab"
                type="button"
                role="tab"
                aria-controls="cloud-hosting"
                aria-selected={activeTab === "cloud-hosting"}
                className={`inline-block p-4 ${
                  activeTab === "cloud-hosting"
                    ? "text-blue-600"
                    : "hover:text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => handleTabClick("cloud-hosting")}
              >
                Cloud & Hosting
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
              {frontendSkills?.skills.map((iconName, index) => (
                <SkillsIcon
                  key={index}
                  category="frontend"
                  fileName={iconName}
                  folderName="frontend"
                />
              ))}
            </div>
            <div
              className={`p-4 bg-white rounded-lg md:p-8 ${
                activeTab === "backend" ? "block" : "hidden"
              }`}
              id="backend"
              role="tabpanel"
              aria-labelledby="backend-tab"
            >
              {backendSkills?.skills.map((iconName, index) => (
                <SkillsIcon
                  key={index}
                  category="backend"
                  fileName={iconName}
                  folderName="backend"
                />
              ))}
            </div>
            <div
              className={`p-4 bg-white rounded-lg md:p-8 ${
                activeTab === "databasing" ? "block" : "hidden"
              }`}
              id="databasing"
              role="tabpanel"
              aria-labelledby="databasing-tab"
            >
              {databasingSkills?.skills.map((iconName, index) => (
                <SkillsIcon
                  key={index}
                  category="databasing"
                  fileName={iconName}
                  folderName="databasing"
                />
              ))}
            </div>
            <div
              className={`p-4 bg-white rounded-lg md:p-8 ${
                activeTab === "cloud-hosting" ? "block" : "hidden"
              }`}
              id="cloud-hosting"
              role="tabpanel"
              aria-labelledby="cloud-hosting-tab"
            >
              {cloudHostingSkills?.skills.map((iconName, index) => (
                <SkillsIcon
                  key={index}
                  category="cloud-hosting"
                  fileName={iconName}
                  folderName="cloud-hosting"
                />
              ))}
            </div>
            <div
              className={`p-4 bg-white rounded-lg md:p-8 ${
                activeTab === "misc" ? "block" : "hidden"
              }`}
              id="misc"
              role="tabpanel"
              aria-labelledby="misc-tab"
            >
              {miscSkills?.skills.map((iconName, index) => (
                <SkillsIcon
                  key={index}
                  category="misc"
                  fileName={iconName}
                  folderName="misc"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Skills.propTypes = {};

export default Skills;
