import { useState } from "react";
import SkillsIcon from "./SkillsIcon";
import SkillsTab from "./SkillsTab";

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
        <h1 className="p-2">Skills</h1>
        <div className="border border-theme-primary rounded-sm shadow m-2">
          <ul
            className="flex flex-wrap text-sm font-medium text-center text-gray-500 rounded-t-lg"
            id="defaultTab"
            data-tabs-toggle="#defaultTabContent"
            role="tablist"
          >
            <SkillsTab
              tabId="frontend"
              tabName="Frontend"
              activeTab={activeTab}
              handleTabClick={handleTabClick}
            />
            <SkillsTab
              tabId="backend"
              tabName="Backend"
              activeTab={activeTab}
              handleTabClick={handleTabClick}
            />
            <SkillsTab
              tabId="databasing"
              tabName="Databasing"
              activeTab={activeTab}
              handleTabClick={handleTabClick}
            />
            <SkillsTab
              tabId="cloud-hosting"
              tabName="Cloud & Hosting"
              activeTab={activeTab}
              handleTabClick={handleTabClick}
            />
            <SkillsTab
              tabId="misc"
              tabName="Misc"
              activeTab={activeTab}
              handleTabClick={handleTabClick}
            />
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
