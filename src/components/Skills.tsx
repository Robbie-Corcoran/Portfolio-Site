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
        "JavaScript",
        "TypeScript",
        "React",
        "Vue",
        "Angular",
        "Alpine",
        "Tailwind",
        "Bootstrap",
        "JQuery",
        "WordPress",
      ],
    },
    {
      category: "backend",
      skills: [
        "Java",
        "Python",
        "Spring",
        "Django",
        "Node",
        "Maven",
        "JUnit5",
        "RESTful API",
      ],
    },
    {
      category: "databasing",
      skills: ["PostgreSQL", "MongoDB", "SQLite", "Hibernate"],
    },
    {
      category: "cloud-hosting",
      skills: ["Azure", "AWS", "Docker", "Hostinger", "Vercel", "Shopify"],
    },
    {
      category: "misc",
      skills: [
        "Git",
        "GitHub",
        "InDesign",
        "PhotoShop",
        "Premiere Pro",
        "JetBrains",
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
      <div>
        <h1 className="p-2 text-xl mt-6">What do I like to use?</h1>
        <div className="max-w-sm bg-white border border-theme-primary rounded-lg shadow m-auto">
          <ul
            className="flex flex-wrap border-bottom border-theme-primary rounded-sm shadow text-sm justify-center font-medium text-center text-gray-500 rounded-t-lg"
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
              <div className="grid grid-cols-2 gap-4 place-items-center text-center">
                {frontendSkills?.skills.map((iconName, index) => (
                  <div>
                    <SkillsIcon
                      key={index}
                      category="frontend"
                      fileName={iconName}
                      folderName="frontend"
                      className=""
                    />
                    <h2 className="text-xl">{iconName}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`p-4 bg-white rounded-lg md:p-8 ${
                activeTab === "backend" ? "block" : "hidden"
              }`}
              id="backend"
              role="tabpanel"
              aria-labelledby="backend-tab"
            >
              <div className="grid grid-cols-2 gap-4 place-items-center text-center">
                {backendSkills?.skills.map((iconName, index) => (
                  <div>
                    <SkillsIcon
                      key={index}
                      category="backend"
                      fileName={iconName}
                      folderName="backend"
                    />
                    <h2 className="text-xl">{iconName}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`p-4 bg-white rounded-lg md:p-8 ${
                activeTab === "databasing" ? "block" : "hidden"
              }`}
              id="databasing"
              role="tabpanel"
              aria-labelledby="databasing-tab"
            >
              <div className="grid grid-cols-2 gap-4 place-items-center text-center">
                {databasingSkills?.skills.map((iconName, index) => (
                  <div>
                    <SkillsIcon
                      key={index}
                      category="databasing"
                      fileName={iconName}
                      folderName="databasing"
                    />
                    <h2 className="text-xl">{iconName}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`p-4 bg-white rounded-lg md:p-8 ${
                activeTab === "cloud-hosting" ? "block" : "hidden"
              }`}
              id="cloud-hosting"
              role="tabpanel"
              aria-labelledby="cloud-hosting-tab"
            >
              <div className="grid grid-cols-2 gap-4 place-items-center text-center">
                {cloudHostingSkills?.skills.map((iconName, index) => (
                  <div>
                    <SkillsIcon
                      key={index}
                      category="cloud-hosting"
                      fileName={iconName}
                      folderName="cloud-hosting"
                    />
                    <h2 className="text-xl">{iconName}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`p-4 bg-white rounded-lg md:p-8 ${
                activeTab === "misc" ? "block" : "hidden"
              }`}
              id="misc"
              role="tabpanel"
              aria-labelledby="misc-tab"
            >
              <div className="grid grid-cols-2 gap-4 place-items-center text-center">
                {miscSkills?.skills.map((iconName, index) => (
                  <div>
                    <SkillsIcon
                      key={index}
                      category="misc"
                      fileName={iconName}
                      folderName="misc"
                    />
                    <h2 className="text-xl">{iconName}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
