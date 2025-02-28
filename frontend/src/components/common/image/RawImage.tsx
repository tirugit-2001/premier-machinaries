import { RawImgProps } from "../../../types";

const RawImg: React.FC<RawImgProps> = ({ image, altText, className }) => {
  return <img src={image} alt={altText} className={className} />;
};

export default RawImg;
