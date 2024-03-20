import { useState } from "react";
import SkillsTab from "./SkillsTab";
import SkillsList from "./SkillsList";

type SkillType = {
  category: string;
  skills: string[];
  numOfMedCols: string;
  numOfLargeCols: string;
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
      numOfMedCols: "3",
      numOfLargeCols: "6",
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
      numOfMedCols: "2",
      numOfLargeCols: "4",
    },
    {
      category: "databasing",
      skills: ["PostgreSQL", "MongoDB", "SQLite", "Hibernate"],
      numOfMedCols: "2",
      numOfLargeCols: "2",
    },
    {
      category: "cloud-hosting",
      skills: ["Azure", "AWS", "Docker", "Hostinger", "Vercel", "Shopify"],
      numOfMedCols: "2",
      numOfLargeCols: "3",
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
      numOfMedCols: "2",
      numOfLargeCols: "3",
    },
  ];

  return (
    <>
      <section
        id="skills"
        className="w-full max-w-screen-xl mx-auto p-4 pt-20 -mb-16 font-sofia"
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
            {skillIcons.map((icon) => (
              <SkillsTab
                key={icon.category}
                tabId={icon.category}
                tabName={
                  icon.category.charAt(0).toUpperCase() + icon.category.slice(1)
                }
                activeTab={activeTab}
                handleTabClick={handleTabClick}
              />
            ))}
          </ul>
          <div>
            {skillIcons.map((icon) => (
              <SkillsList
                key={icon.category}
                category={icon.category}
                skills={icon.skills}
                activeTab={activeTab}
                mdCols={icon.numOfMedCols}
                lgCols={icon.numOfLargeCols}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
