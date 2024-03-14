import { useState } from "react";
import SkillsIcon from "./SVGIcon";
import SkillsTab from "./SkillsTab";

type SkillType = {
  category: string;
  skills: string[];
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>("frontend");
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const skillIcons: SkillType[] = [
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
        "Sass",
        "JQuery",
        "WordPress",
        "ExpressionEngine",
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
        "REST",
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
      <section
        id="skills"
        className="w-full max-w-screen-xl mx-auto p-4 font-sofia"
      >
        <h1 className="p-2 text-4xl text-theme-primary font-bold tracking-tight">
          What do I work best with?
        </h1>
        <div className="max-w-sm bg-white border-2 border-theme-border rounded-lg shadow m-auto md:max-w-md lg:max-w-none">
          <ul
            className="flex flex-wrap p-0 bg-theme-black text-theme-text shadow text-lg justify-center font-medium"
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
              className={`p-4 bg-white rounded-lg h-96 md:p-8 lg:h-fit overflow-auto overflow-x-scroll ${
                activeTab === "frontend" ? "block" : "hidden"
              }`}
              id="frontend"
              role="tabpanel"
              aria-labelledby="frontend-tab"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center text-center lg:grid-cols-6">
                {frontendSkills?.skills.map((iconName, index) => (
                  <div key={`frontend-${index}`}>
                    <SkillsIcon
                      category="frontend"
                      fileName={iconName.toLowerCase()}
                      filePath="skillIcons/frontend"
                      className=""
                    />
                    <h2 className="text-lg">{iconName}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`p-4 bg-white rounded-lg h-96 md:p-8 lg:h-fit overflow-auto overflow-x-scroll ${
                activeTab === "backend" ? "block" : "hidden"
              }`}
              id="backend"
              role="tabpanel"
              aria-labelledby="backend-tab"
            >
              <div className="grid grid-cols-2 gap-4 place-items-center text-center lg:grid-cols-4">
                {backendSkills?.skills.map((iconName, index) => (
                  <div key={`backend-${index}`}>
                    <SkillsIcon
                      key={index}
                      category="backend"
                      fileName={iconName.toLowerCase()}
                      filePath="skillIcons/backend"
                    />
                    <h2 className="text-lg">{iconName}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`p-4 bg-white rounded-lg h-96 md:p-8 lg:h-fit overflow-auto overflow-x-scroll ${
                activeTab === "databasing" ? "block" : "hidden"
              }`}
              id="databasing"
              role="tabpanel"
              aria-labelledby="databasing-tab"
            >
              <div className="grid grid-cols-2 gap-4 place-items-center text-center lg:grid-cols-2 lg:justify-center">
                {databasingSkills?.skills.map((iconName, index) => (
                  <div key={`databasing-${index}`}>
                    <SkillsIcon
                      key={index}
                      category="databasing"
                      fileName={iconName.toLowerCase()}
                      filePath="skillIcons/databasing"
                    />
                    <h2 className="text-lg">{iconName}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`p-4 bg-white rounded-lg h-96 md:p-8 lg:h-fit overflow-auto overflow-x-scroll ${
                activeTab === "cloud-hosting" ? "block" : "hidden"
              }`}
              id="cloud-hosting"
              role="tabpanel"
              aria-labelledby="cloud-hosting-tab"
            >
              <div className="grid grid-cols-2 gap-4 place-items-center text-center lg:grid-cols-3">
                {cloudHostingSkills?.skills.map((iconName, index) => (
                  <div key={`cloud-hosting-${index}`}>
                    <SkillsIcon
                      key={index}
                      category="cloud-hosting"
                      fileName={iconName.toLowerCase()}
                      filePath="skillIcons/cloud-hosting"
                    />
                    <h2 className="text-lg">{iconName}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`p-4 bg-white rounded-lg h-96 md:p-8 lg:h-fit overflow-auto overflow-x-scroll ${
                activeTab === "misc" ? "block" : "hidden"
              }`}
              id="misc"
              role="tabpanel"
              aria-labelledby="misc-tab"
            >
              <div className="grid grid-cols-2 gap-4 place-items-center text-center lg:grid-cols-3">
                {miscSkills?.skills.map((iconName, index) => (
                  <div key={`misc-${index}`}>
                    <SkillsIcon
                      key={index}
                      category="misc"
                      fileName={iconName.toLowerCase()}
                      filePath="skillIcons/misc"
                    />
                    <h2 className="text-lg">{iconName}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
