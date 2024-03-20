import React from "react";
import SkillsIcon from "./SVGIcon";

type SkillsListType = {
  category: string;
  skills: string[];
  mdCols: string;
  lgCols: string;
  activeTab: string;
};

const SkillsList: React.FC<SkillsListType> = ({
  category,
  skills,
  mdCols,
  lgCols,
  activeTab,
}) => {
  return (
    <div
      className={`bg-white rounded-lg h-96 px-4 py-2 place-content-center lg:h-fit overflow-auto overflow-x-scroll ${
        activeTab === category ? "block" : "hidden"
      }`}
      id={category}
      role="tabpanel"
      aria-labelledby={`${category}-tab`}
    >
      <div
        className={`grid grid-cols-2 gap-4 gap-x-16 w-fit mx-auto text-center md:grid-cols-${mdCols} lg:grid-cols-${lgCols}`}
      >
        {skills.map((iconName, index) => (
          <div key={`${category}-${index}`}>
            <SkillsIcon
              key={index}
              category={category}
              fileName={iconName.toLowerCase()}
              filePath={`skillIcons/${category}`}
              className="justify-evenly"
            />
            <h2 className="text-lg">{iconName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
