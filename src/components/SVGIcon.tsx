import { SVGProps } from "react";

interface SVGIconProps extends SVGProps<SVGSVGElement> {
  category?: string;
  fileName: string;
  filePath?: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({ fileName, filePath }) => {
  return (
    <>
      <img
        src={`${filePath}/${fileName}.svg`}
        alt={`${fileName}`}
        className="h-16 w-16 m-2 mx-auto hover:scale-110 duration-150"
      />
      <span className="sr-only">{fileName}</span>
    </>
  );
};

export default SVGIcon;
