interface ProductType {
  image: string;
  altText: string;
  title: string;
}
interface RawImgProps {
  image: string;
  altText: string;
  className?: string;
}
interface Partners {
  image: string;
  altText: string;
}

interface NavItemsType {
  path: string;
  title: string;
}
interface FooterNavTypes {
  mainTitle: string;
  links: NavItemsType[];
}
interface ProductCard {
  title: string;
  image: string;
  altText: string;
  desc: string;
  contact_link: string;
}
interface AddressType {
  city: string;
  address: string;
  number: string[];
  iframe: string;
}
interface ProductPageCardType extends Omit<ProductCard, "desc"> {
  features: string[];
  subtitle?: string;
}
export type {
  ProductCard,
  RawImgProps,
  ProductType,
  Partners,
  NavItemsType,
  FooterNavTypes,
  AddressType,
  ProductPageCardType,
};
