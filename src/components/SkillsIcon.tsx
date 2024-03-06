import { SVGProps } from "react";

interface SkillsIconProps extends SVGProps<SVGSVGElement> {
  category: string;
  fileName: string;
  folderName: string;
}

const SkillsIcon: React.FC<SkillsIconProps> = ({ fileName, folderName }) => {
  return (
    <>
      <img
        src={`../../public/skillIcons/${folderName}/${fileName}.svg`}
        alt={`${fileName}`}
        className="h-10 w-10"
      />
    </>
  );
};

export default SkillsIcon;
