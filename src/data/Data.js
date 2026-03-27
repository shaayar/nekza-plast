export const navbarItems = [
  {
    title: "Shop All",
    path: "/products",
  },
  {
    title: "Save With Sets",
    path: "/collections/sets",
    featured: true,
    dropdown: {
      columns: [
        {
          title: "",
          links: [
            { label: "Shop All Sets", path: "/collections/sets" },
            { label: "Complete Kitchen Set", path: "/products/the-stainless-sets/curated-kitchen" },
            { label: "Small Spaces Set", path: "/products/small-spaces-set/5-piece-stainless" },
            { label: "10-Piece Stainless Set", path: "/products/the-stainless-sets/10-piece" },
          ],
        },
        {
          title: "CATEGORIES",
          links: [
            { label: "Complete Kitchen Set", path: "/products/the-stainless-sets/curated-kitchen" },
            { label: "Cookware Sets", path: "/collections/cookware-sets" },
            { label: "Tabletop Sets", path: "/collections/tabletop" },
            { label: "Knife Sets", path: "/collections/knife-sets" },
            { label: "Bakeware Sets", path: "/collections/bakeware" },
          ],
        },
        {
          title: "MOST POPULAR",
          links: [
            { label: "Stainless Sets", path: "/products/the-stainless-sets/10-piece" },
            { label: "CeramiClad Sets", path: "/collections/ceramiclad" },
            { label: "Tabletop Set", path: "/products/tabletop-set/starter-white" },
            { label: "Japanese Knife Set", path: "/products/japanese-knife-set/3-piece-set" },
          ],
        },
      ],
      images: [
        {
          title: "Curated Kitchen Set",
          path: "/products/the-stainless-sets/curated-kitchen",
          image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Antique Brass Set",
          path: "/products/le-stainless-sets/10-piece-antique-brass-finish",
          image: "https://images.unsplash.com/photo-1584990347449-a1b0b6c1f2b7?q=80&w=1200&auto=format&fit=crop",
        },
      ],
    },
  },
  {
    title: "Cookware",
    path: "/collections/cookware",
    dropdown: {
      columns: [
        {
          title: "",
          links: [
            { label: "Shop All Cookware", path: "/collections/cookware" },
            { label: "Cookware Sets", path: "/collections/cookware-sets", tag: "BEST VALUE" },
            { label: "The Hardware Edit", path: "/collections/kitchen-hardware", tag: "NEW" },
            { label: "The Clean Cooking Collection", path: "/collections/clean-cooking" },
            { label: "The Griddle", path: "/products/carbon-steel-griddle-set/griddle-press-set", tag: "MOST SEARCHED" },
          ],
        },
        {
          title: "MATERIALS",
          links: [
            { label: "Stainless Clad", path: "/collections/stainless-clad", tag: "MOST POPULAR" },
            { label: "Carbon Steel", path: "/collections/carbon-steel" },
            { label: "CeramiClad™ Non Stick", path: "/collections/ceramiclad" },
            { label: "Enameled Cast Iron", path: "/collections/enameled-cast-iron" },
          ],
        },
        {
          title: "SHAPES",
          links: [
            { label: "Frying and Saute Pans", path: "/collections/frying-pans" },
            { label: "Saucepans and Sauciers", path: "/collections/saucepans-and-sauciers" },
            { label: "Griddles and Grill Pans", path: "/collections/grill-pans-and-griddles" },
            { label: "Stock Pots", path: "/collections/stock-pots" },
            { label: "Dutch Ovens and Braisers", path: "/collections/dutch-ovens-and-braisers" },
            { label: "Specialty Shapes", path: "/collections/cookware-specialty-shapes" },
          ],
        },
      ],
      images: [
        {
          title: "Shop - CeramiClad™",
          path: "/collections/ceramiclad",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Shop - Enameled Cast Iron",
          path: "/collections/enameled-cast-iron",
          image: "https://images.unsplash.com/photo-1583778176476-4a8b02a64c54?q=80&w=1200&auto=format&fit=crop",
        },
      ],
    },
  },
  {
    title: "Tabletop",
    path: "/collections/tabletop",
  },
  {
    title: "Knives",
    path: "/collections/knives",
  },
  {
    title: "Bakeware",
    path: "/collections/bakeware",
  },
  {
    title: "Accessories",
    path: "/collections/accessories",
  },
];

export const footerSections = [
  {
    heading: "Support",
    links: [
      { label: "About Us", href: "/about", external: true },
      // { label: "Track Your Order", href: "https://cello-world.shiprocket.co/", external: true },
      // { label: "Return/Exchange", href: "https://apps.returnprime.co/f3eba2.myshopify.com", external: true },
      { label: "Get In Touch", href: "/contact", external: true },
      { label: "FAQs", href: "/pages/faqs" },

    ],
  },
  {
    heading: "Products",
    twoCol: true,
    col1: [
      { label: "Water Bottle", href: "/collections/water-bottle" },
      { label: "Insulated Water Bottle", href: "/collections/insulated-water-bottle" },
      // { label: "Tableware", href: "/collections/tableware" },
      { label: "Kitchen", href: "/collections/kitchen" },
      { label: "Tiffin Boxes", href: "/collections/tiffin-boxes" },
      { label: "Insulated Tiffin Boxes", href: "/collections/insulated-tiffin-boxes" },
      { label: "Casseroles", href: "/collections/casseroles" },
      { label: "Water Jug", href: "/collections/water-jug" },
    ],
    col2: [
      { label: "Cleaning Essential", href: "/collections/cleaning-essential" },
      { label: "Kidzbee", href: "/collections/kidzbee" },
      { label: "Combosets", href: "/collections/combosets" },
      { label: "UBN Flask", href: "/collections/ubn-flask" },
      { label: "Combos", href: "/collections/combos" },
      { label: "Pencil Box", href: "/collections/pencil-box" },
    ],
  },
  {
    heading: "Help & Info",
    links: [
      { label: "Terms & Conditions", href: "/pages/terms-and-conditions" },
      { label: "Privacy Policy", href: "/pages/privacy-policy" },
      // { label: "Cookies Policy", href: "/pages/cookies-policy" },
      // { label: "Returns Policy", href: "/pages/return-policy" },
    ],
  },
  {
    heading: "Corporate",
    external: true,
    links: [
      { label: "Corporate", href: "#" },
      { label: "Why Nekza", href: "#" },
      { label: "Media", href: "#" },
    ],
  },
];

export const productDetail = {
  title: "Quench Pro Insulated Travel Tumbler With Handle, Lid & Straw",
  price: 1199,
  mrp: 1299,
  sizes: ["900ml"],
  images: [
    "/images/p-bottle-1.webp",
    "/images/p-bottle-2.webp",
    "/images/p-bottle-1.webp",
    "/images/p-bottle-2.webp",
    "/images/p-bottle-1.webp",
  ],
  tabs: {
    About: {
      heading: "Quench Pro Insulated Travel Tumbler with Handle, Lid & Straw",
      bullets: [
        "Premium Stainless Steel Build: Made with high-quality stainless steel for long-lasting durability and everyday use.",
        "Double-Wall Insulated Design: Keeps beverages hot or cold for hours, ideal for office, travel, workouts, and outdoor activities.",
        "Scratch-Resistant Finish: Designed with a strong exterior coating that stays smooth and intact even with regular handling.",
        "Lid & Straw Convenience: Comes with a leak-resistant lid and reusable straw for comfortable sipping while commuting or working.",
        "Car Cup Holder Compatible: Designed with a tapered base that fits standard car cup holders for safe and easy travel.",
      ],
    },
    Specs: {
      heading: "Specifications",
      bullets: ["Material: Stainless Steel", "Capacity: 900ml", "Height: 24cm", "Weight: 480g", "BPA Free: Yes"],
    },
    "Return Policy": {
      heading: "Return Policy",
      bullets: [
        "Returns accepted within 7 days of delivery.",
        "Item must be unused and in original packaging.",
        "Personalized products cannot be returned or refunded.",
      ],
    },
    Reviews: {
      heading: "Customer Reviews",
      bullets: [
        "★★★★★ — Great tumbler, keeps coffee hot all morning! — Priya S.",
        "★★★★☆ — Solid build, looks premium. — Rahul M.",
        "★★★★★ — Perfect for gym and office both. — Sneha K.",
      ],
    },
    "Additional Info": {
      heading: "Additional Information",
      bullets: ["Country of Origin: India", "Brand: Cello", "Warranty: 1 Year", "SKU: CL-QP-900-WH"],
    },
  },
  terms: [
    "Personalized Products are prepaid only",
    "Personalized products cannot be returned or refunded",
    "Personalization on the product may slightly vary from the preview",
  ],
};

export const relatedProducts = [
  {
    title: "Puro Steel-X Neo 900 Insulated Water Bottle, 720ml",
    price: 329,
    mrp: 528,
    off: 38,
    colours: 6,
    img: "/images/p2-bottle-1.webp",
  },
  {
    title: "Nebula 3D Design Kids Lunch Box",
    price: 849,
    mrp: 1199,
    off: 29,
    colours: 5,
    img: "/images/p-tiffin-1.webp",
  },
  {
    title: "Era 3D Design Insulated Kids Water Bottle, 400ml",
    price: 329,
    mrp: 479,
    off: 31,
    colours: 6,
    img: "/images/p2-bottle-2.webp",
  },
  {
    title: "Expando Donut 600 Kids Silo Ml",
    price: null,
    mrp: 599,
    off: null,
    colours: 2,
    img: "/images/p-tiffin-2.webp",
  },
];
