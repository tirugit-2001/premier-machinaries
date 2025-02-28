import RawImg from "../../common/image/RawImage";

interface CategoryCardProps {
  image: string;
  altText: string;
  title: string;
}

const ProductCard: React.FC<CategoryCardProps> = ({
  image,
  altText,
  title,
}) => {
  return (
    <div className="flex flex-col flex-1 gap-4  min-w-[240px] max-[550px]:min-w-[180px] ">
      <RawImg
        image={image}
        altText={altText}
        className="object-cover w-full rounded-sm aspect-[1.36] shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
      />
      <div className="text-base font-semibold text-black">{title}</div>
    </div>
  );
};

export default ProductCard;
