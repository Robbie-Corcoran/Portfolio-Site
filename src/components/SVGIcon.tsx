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
        src={`../../public/${filePath}/${fileName}.svg`}
        alt={`${fileName}`}
        className="h-16 w-16 m-2"
      />
      <span className="sr-only">{fileName}</span>
    </>
  );
};

export default SVGIcon;
