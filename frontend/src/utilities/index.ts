import {
  AddressType,
  FooterNavTypes,
  NavItemsType,
  Partners,
  ProductPageCardType,
  ProductType,
} from "../types";
import iconsImages from "../assets";

const productCategories: ProductType[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/9f34fb413fc270189df1a627d00b45e200fe04d02e750effb5b479ff1614a336?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Printing Machine",
    title: "Printing Machines",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/9350efc242be86faf4ac4654aebbdfafd1cdbb64eb47089f651419539f48829f?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Laser Cutting Machine",
    title: "Laser Cutting Machines",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/a2ee0296962bc3030e536a99f62764c5a5dcc420ad0ba5f147877f8f6d619654?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "CNC Router",
    title: "CNC Routers",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/9350efc242be86faf4ac4654aebbdfafd1cdbb64eb47089f651419539f48829f?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Laser Cutting Machine",
    title: "Laser Cutting Machines",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/a2ee0296962bc3030e536a99f62764c5a5dcc420ad0ba5f147877f8f6d619654?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "CNC Router",
    title: "CNC Routers",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/9f34fb413fc270189df1a627d00b45e200fe04d02e750effb5b479ff1614a336?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Printing Machine",
    title: "Printing Machines",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/9f34fb413fc270189df1a627d00b45e200fe04d02e750effb5b479ff1614a336?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Printing Machine",
    title: "Printing Machines",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/a2ee0296962bc3030e536a99f62764c5a5dcc420ad0ba5f147877f8f6d619654?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "CNC Router",
    title: "CNC Routers",
  },
];
const brands: Partners[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/54351b9cf4337089076d764fd9394b55657ba25a1fc40bb6bedcae26d296f925?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Dobosen logo in green with stylized D letter",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/54351b9cf4337089076d764fd9394b55657ba25a1fc40bb6bedcae26d296f925?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Dobosen logo in green with stylized D letter",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/54351b9cf4337089076d764fd9394b55657ba25a1fc40bb6bedcae26d296f925?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Dobosen logo in green with stylized D letter",
  },

  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/6d2540d9c0cd0192b70732cfdacc37014abfc11a903b1b91efa4f6128a47c061?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Saga logo in blue with red symbol",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/6d2540d9c0cd0192b70732cfdacc37014abfc11a903b1b91efa4f6128a47c061?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Saga logo in blue with red symbol",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/54351b9cf4337089076d764fd9394b55657ba25a1fc40bb6bedcae26d296f925?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Dobosen logo in green with stylized D letter",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/54351b9cf4337089076d764fd9394b55657ba25a1fc40bb6bedcae26d296f925?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Dobosen logo in green with stylized D letter",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/6d2540d9c0cd0192b70732cfdacc37014abfc11a903b1b91efa4f6128a47c061?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Saga logo in blue with red symbol",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/54351b9cf4337089076d764fd9394b55657ba25a1fc40bb6bedcae26d296f925?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Dobosen logo in green with stylized D letter",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/54351b9cf4337089076d764fd9394b55657ba25a1fc40bb6bedcae26d296f925?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Dobosen logo in green with stylized D letter",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/6d2540d9c0cd0192b70732cfdacc37014abfc11a903b1b91efa4f6128a47c061?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    altText: "Saga logo in blue with red symbol",
  },
];
const nav_items: NavItemsType[] = [
  { path: "/", title: "Home" },
  // { path: "about", title: "About" },
  { path: "product", title: "Products" },
  // { path: "locations", title: "Locations" },
  // { path: "our-brands", title: "Our Brands" },
];
const footer_navitmes: FooterNavTypes[] = [
  {
    mainTitle: "Solutions",
    links: [
      { path: "products", title: "Printing Machines" },
      { path: "products", title: "Laser Cutting Machines" },
      { path: "products", title: "CNC Routers" },
      { path: "products", title: "Lamination Machines" },
      { path: "products", title: "Vinyl Cutting Machines" },
    ],
  },
  {
    mainTitle: "Products",
    links: [
      { path: "products", title: "Printing Machines" },
      { path: "products", title: "Laser Cutting Machines" },
      { path: "products", title: "CNC Routers" },
      { path: "products", title: "Lamination Machines" },
      { path: "products", title: "Vinyl Cutting Machines" },
    ],
  },
  {
    mainTitle: "Contact Us",
    links: [
      { path: "tel:+122339999", title: "+122339999" },
      { path: "tel:+122339999", title: "+122339999" },
      { path: "@mailto:support@gmail.com", title: "support@gmail.com" },
    ],
  },
];

const addresses: AddressType[] = [
  {
    city: "Bengaluru Office",
    address: "123 Business Avenue Btm layout 235 9th main road 566020",
    number: +91123455559,
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.637675812506!2d77.60229031164256!3d12.913543113429203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fc91a93031%3A0xf0afe62576cbdc3f!2sBTM%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1740166043507!5m2!1sen!2sin",
  },
  {
    city: "Mangaluru Office",
    address: "123 Business Avenue Kavoor 235 9th main road 566020",
    number: +91123455559,
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.637675812506!2d77.60229031164256!3d12.913543113429203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fc91a93031%3A0xf0afe62576cbdc3f!2sBTM%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1740166043507!5m2!1sen!2sin",
  },
];

const productPageCards: ProductPageCardType[] = [
  {
    title: "Yueming Laser Cutting Machine",
    image: iconsImages.printer,
    altText: "High-efficiency solar panel",
    contact_link: "https://example.com/contact",
    subtitle: "CO2 Laser / Fiber Laser",
    features: ["Auto Focus", "Efficient cutting"],
  },
  {
    title: "Yueming Laser Cutting Machine",
    image: iconsImages.printer,
    altText: "High-efficiency solar panel",
    contact_link: "https://example.com/contact",
    subtitle: "CO2 Laser / Fiber Laser",
    features: ["Auto Focus", "Efficient cutting"],
  },
  {
    title: "Yueming Laser Cutting Machine",
    image: iconsImages.printer,
    altText: "High-efficiency solar panel",
    contact_link: "https://example.com/contact",
    subtitle: "CO2 Laser / Fiber Laser",
    features: ["Auto Focus", "Efficient cutting"],
  },
  {
    title: "Yueming Laser Cutting Machine",
    image: iconsImages.printer,
    altText: "High-efficiency solar panel",
    contact_link: "https://example.com/contact",
    subtitle: "CO2 Laser / Fiber Laser",
    features: ["Auto Focus", "Efficient cutting"],
  },
];

const bannerdata: ProductPageCardType[] = [
  {
    title: "Allwin UV Flatbed Printer",
    image: iconsImages.banneritemimg,
    altText: "Allwin UV Flatbed Printer",
    contact_link: "https://example.com/contact",
    features: [
      "Media Type: Rigid materials (Acrylic, Glass, Wood, Metal, etc.)",
      "Resolution: Up to 1440 dpi",
      "Fast drying, High durability.",
      "Multi-layer printing",
    ],
  },
  {
    title: "Allwin UV Flatbed Printer",
    image: iconsImages.banneritemimg,
    altText: "Allwin UV Flatbed Printer",
    contact_link: "https://example.com/contact",
    features: [
      "Media Type: Rigid materials (Acrylic, Glass, Wood, Metal, etc.)",
      "Resolution: Up to 1440 dpi",
      "Fast drying, High durability.",
      "Multi-layer printing",
    ],
  },
];

const productPageCardCategory: Record<string, ProductPageCardType[]> = {
  printers: [
    {
      title: "Allwin Solvent Printer 512i",
      image: iconsImages.allwintPrinter,
      subtitle: "Solvent-based ink / High-resolution output",
      altText: "Allwin Solvent Printer 512i",
      contact_link: "https://example.com/contact",
      features: ["Efficient printing", "medium to large-scale projects"],
    },
    {
      title: "Allwin UV Roll to Roll Printer",
      image: iconsImages.allwinuvRoll,
      subtitle: "UV-curable ink / High-resolution",
      altText: "Allwin UV Roll to Roll Printer",
      contact_link: "https://example.com/contact",
      features: [
        "LED UV cold light source technology",
        "high-quality backlit banner printing",
      ],
    },
    {
      title: "Allwin Solvent Printer 1024i",
      image: iconsImages.allwin1024i,
      subtitle: "Solvent-based ink / High-resolution output",
      altText: "Allwin Solvent Printer 1024i",
      contact_link: "https://example.com/contact",
      features: [" large-scale prints with robust performance"],
    },

    {
      title: "Allwin Roller UV Printer",
      image: iconsImages.allwinrolleruvp,
      subtitle: "UV-curable ink / High-definition printing",
      altText: "Allwin Roller UV Printer",
      contact_link: "https://example.com/contact",
      features: ["Specialized for 360-degree printing on cylindrical items"],
    },
    {
      title: "Allwin Eco Solvent Printer",
      image: iconsImages.allwinecosolvent,
      subtitle: "Eco-solvent ink / High-definition printing",
      altText: "Allwin UV Roll to Roll Printer",
      contact_link: "https://example.com/contact",
      features: ["Low chemical emissions,suitable for indoor use"],
    },
    {
      title: "Rayt UV Hybrid Printer",
      image: iconsImages.raytuvhybrindp,
      subtitle: "UV-curable ink / High-definition printing",
      altText: "Rayt UV Hybrid Printer",
      contact_link: "https://example.com/contact",
      features: [
        "Combines flatbed and roll-to-roll capabilities",
        "versatility in printing",
      ],
    },
  ],

  cuttingandroutingmachinges: [
    {
      title: "TigerTec Fiber Laser Cutter",
      image: iconsImages.tigerfiberlaserc,
      subtitle: "High-precision cutting",
      altText: "TigerTec Fiber Laser Cutter",
      contact_link: "https://example.com/contact",
      features: ["Metals and hard materials", "intricate design capabilities"],
    },
    {
      title: "TigerTec CNC Router",
      image: iconsImages.tigerteccnrouter,
      subtitle: "high accuracy/ precision cutting ",
      altText: "TigerTec CNC Router",
      contact_link: "https://example.com/contact",
      features: ["cutting, carving", "and engraving with high accuracy"],
    },
    {
      title: "Saga Vinyl Cutting Plotter",
      image: iconsImages.sagavinyl,
      subtitle: "Precise cuts / creating signage",
      altText: "Saga Vinyl Cutting Plotter",
      contact_link: "https://example.com/contact",
      features: [
        "Perfect for creating signage",
        "decals",
        "and stickers with precise cuts",
      ],
    },
    {
      title: "Mimaki Vinyl Cutting Plotter",
      image: iconsImages.mimakivinyl,
      subtitle: "Advanced control /  vinyl cutting",
      altText: "Mimaki Vinyl Cutting Plotter",
      contact_link: "https://example.com/contact",
      features: [
        "Advanced control for detailed and intricate vinyl cutting tasks",
      ],
    },
  ],
  laminationmachines: [
    {
      title: "Mefu Lamination Machine",
      image: iconsImages.mefulamination,
      subtitle: "lamination / safeguard prints",
      altText: "Mefu Lamination Machine",
      contact_link: "https://example.com/contact",
      features: [
        "Provides lamination to safeguard prints from wear and environmental factors",
      ],
    },
    {
      title: "Fayon Lamination Machine",
      image: iconsImages.fayonlamination,
      subtitle: "enhanced durability / Lamination",
      altText: "Mefu Lamination Machine",
      contact_link: "https://example.com/contact",
      features: [
        "Ensures enhanced durability and longevity of printed materials",
      ],
    },
  ],
  bendingmachines: [
    {
      title: "Dobosen Aluminium A130 Bending",
      image: iconsImages.dobosenaluminium,
      altText: "Dobosen Aluminium A130 Bending",
      subtitle: "Creating signboards / Bending Machine",
      contact_link: "https://example.com/contact",
      features: [
        "Designed for creating signboards and metal frames with precision bends",
      ],
    },
    {
      title: "Dobosen Stainless Steel Bending ",
      image: iconsImages.dobosenstainless,
      altText: "dobosen Stainless Steel Bending",
      subtitle: "high-durability  / Bending Machine",
      contact_link: "https://example.com/contact",
      features: [
        "Suitable for high-durability signage and construction components",
      ],
    },
    {
      title: "Aecfun Acrylic Bending",
      image: iconsImages.aecfun,
      altText: "Aecfun Acrylic Bending",
      subtitle: "3D sign letters / Bending Machine",
      contact_link: "https://example.com/contact",
      features: [
        " Ideal for crafting 3D sign letters and creative acrylic designs",
      ],
    },
  ],
  lasercuttingmachines: [
    {
      title: "Yueming Laser Cutting",
      image: iconsImages.yueminglaser,
      altText: "Yueming Laser Cutting",
      subtitle: "Precise cuts / Laser Cutting",
      contact_link: "https://example.com/contact",
      features: [
        "Offers high-speed and high-precision laser cutting for various applications",
      ],
    },
    {
      title: "Rayt Laser Cutting Machine",
      image: iconsImages.raytlasercuttingm,
      altText: "Rayt Laser Cutting Machine",
      subtitle: "Precise cuts / Laser Cutting",
      contact_link: "https://example.com/contact",
      features: [
        "Tailored for precise and efficient cutting tasks in signage production",
      ],
    },
  ],
};

const productPageNavitems = [
  { path: "printers", title: "Printing Machines" },
  {
    path: "cuttingandroutingmachinges",
    title: "Cutting and routing machines",
  },
  { path: "laminationmachines", title: "Lamination machines" },
  { path: "bendingmachines", title: "Bending machines" },
  { path: "lasercuttingmachines", title: "Laser cutting machines" },
];

export {
  productCategories,
  brands,
  nav_items,
  footer_navitmes,
  addresses,
  productPageCards,
  bannerdata,
  productPageCardCategory,
  productPageNavitems,
};
