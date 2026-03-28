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
  title: "NEKZA Insulated Plastic Water Bottle",
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
      heading: "About NEKZA",
      bullets: [
        "Nekza Plast Manufacturing is a partnership-based company known for producing high-quality and reliable plastic household products.",
        "The brand offers a wide range of everyday essentials including water bottles, transparent bottles, lunch boxes, insulated casseroles, coffee mugs, and more.",
        "Each product is designed to meet diverse customer needs with a focus on functionality, convenience, and durability.",
        "NEKZA products are widely appreciated for their practical design, dependable quality, and value for daily use.",
        "With a customer-first approach, the brand continues to deliver products that blend utility with modern lifestyle needs.",
      ],
    },
    Specs: {
      heading: "Specifications",
      bullets: [
        "Material: Plastic",
        "Capacity: 2400ml",
        "Category: Water Bottle",
        "Usage: Everyday / Travel / Office",
        "Brand: NEKZA",
      ],
    },
    "Return Policy": {
      heading: "Return Policy",
      bullets: [
        "Returns accepted within 7 days of delivery.",
        "Item must be unused and in original packaging.",
        "Damaged or defective items must be reported upon delivery.",
      ],
    },
    Reviews: {
      heading: "Customer Reviews",
      bullets: [
        "★★★★★ — Very practical and lightweight for daily use! — Priya S.",
        "★★★★☆ — Good quality bottle, nice finish. — Rahul M.",
        "★★★★★ — Useful for office and travel both. — Sneha K.",
      ],
    },
    "Additional Info": {
      heading: "Additional Information",
      bullets: [
        "Country of Origin: India",
        "Manufacturer: Nekza Plast Manufacturing",
        "Product Type: Plastic Water Bottle",
        "Storage Friendly: Yes",
      ],
    },
  },
  terms: [
    "Products are subject to availability",
    "Color and finish may slightly vary from product images",
    "Please check product details before placing the order",
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

// Centralized Product Data
export const ALL_PRODUCTS = [
  {
    id: 'duro-kent-flask',
    title: "Duro Kent Thermosteel Flask",
    slug: "duro-kent-flask",
    price: 765,
    mrp: 949,
    off: 19,
    img: `/images/p-bottle-1.webp`,
    hoverImage: `/images/p-bottle-2.webp`,
    href: "/products/duro-kent-flask-nw",
    category: "bestseller",
    vendor: "Nekza",
    tags: ["bestseller", "popular"]
  },
  {
    id: 'puro-steel-x-neo',
    title: "Puro Steel-X Neo 900 Insulated Water Bottle, 720ml",
    slug: "puro-steel-x-neo",
    price: 329,
    mrp: 528,
    off: 38,
    img: `/images/p2-bottle-3.webp`,
    hoverImage: `/images/p2-bottle-1.webp`,
    href: "/products/puro-steel-x-neo-900-nw",
    category: "bestseller",
    vendor: "Nekza",
    tags: ["bestseller", "popular"]
  },
  {
    id: 'nomad-travel-mug',
    title: "Nomad Vacuum Insulated Travel Mug",
    slug: "nomad-travel-mug",
    price: 1099,
    mrp: 1599,
    off: 31,
    img: `/images/p2-bottle-1.webp`,
    hoverImage: `/images/p2-bottle-2.webp`,
    href: "/products/nomad-travel-flask-nw",
    category: "bestseller",
    vendor: "Nekza",
    tags: ["bestseller", "popular"]
  },
  {
    id: 'era-kids-bottle',
    title: "Era 3D Design Insulated Kids Water Bottle, 400ml",
    slug: "era-kids-bottle",
    price: 329,
    mrp: 479,
    off: 31,
    img: `/images/p2-bottle-2.webp`,
    hoverImage: `/images/p2-bottle-3.webp`,
    href: "/products/era-kids-water-bottle-kidzbee-nw",
    category: "bestseller",
    vendor: "Nekza",
    tags: ["bestseller", "popular"]
  },
  {
    id: 'snackie-mate-tiffin-set',
    title: "Snackie Mate Tiffin Set",
    slug: "snackie-mate-tiffin-set",
    vendor: "Nekza",
    price: 1116,
    mrp: 1395,
    off: 20,
    img: "/images/p-tiffin-1.webp",
    hoverImage: "/images/p-tiffin-2.webp",
    href: "/products/snackie-mate-tiffin-set",
    category: "new-arrival",
    tags: ["new-arrival"]
  },
  {
    id: 'malmo-thermosteel-tumbler',
    title: "Malmo Thermosteel Tumbler",
    slug: "malmo-thermosteel-tumbler",
    vendor: "Nekza",
    price: 1635,
    mrp: 1990,
    off: 18,
    img: "/images/p2-bottle-1.webp",
    hoverImage: "/images/p2-bottle-2.webp",
    href: "/products/malmo-thermosteel-tumbler",
    category: "new-arrival",
    tags: ["new-arrival"]
  },
  {
    id: 'nekza-plastic-bottle',
    title: "NEKZA Insulated Plastic Water Bottle",
    slug: "nekza-insulated-plastic-water-bottle", 
    price: 1199,
    mrp: 1299,
    off: 8,
    img: "/images/p-bottle-1.webp", 
    hoverImage: "/images/p-bottle-2.webp",
    href: "/products/all/nekza-insulated-plastic-water-bottle",
    category: "general",
    vendor: "Nekza",
    tags: ["general"]
  },
  {
    id: 'steel-water-bottle',
    title: "Steel Water Bottle",
    slug: "steel-water-bottle", 
    price: 329,
    mrp: 528,
    off: 38,
    img: "/images/p-bottle-2.webp",
    hoverImage: "/images/p-bottle-3.webp", 
    href: "/products/all/steel-water-bottle",
    category: "general",
    vendor: "Nekza",
    tags: ["general"]
  },
  {
    id: 'kids-lunch-box',
    title: "Kids Lunch Box",
    slug: "kids-lunch-box", 
    price: 849,
    mrp: 999,
    off: 15,
    img: "/images/p-bottle-1.webp",
    hoverImage: "/images/p-bottle-2.webp", 
    href: "/products/all/kids-lunch-box",
    category: "general",
    vendor: "Nekza",
    tags: ["general"]
  },
  {
    id: 'cookware-set',
    title: "Cookware Set",
    slug: "cookware-set", 
    price: 4999,
    mrp: 5999,
    off: 17,
    img: "/images/p-bottle-2.webp",
    hoverImage: "/images/p-bottle-3.webp", 
    href: "/products/all/cookware-set",
    category: "general",
    vendor: "Nekza",
    tags: ["general"]
  }
];

// ProductGrid Tiles Data
export const GRID_TILES = {
  mobile: {
    rows: [
      [
        {
          href: "/collections/hydration",
          label: "Shop Now",
          title: "Hydration",
          animate: "slideLeft",
          images: {
            mobile: ["/images/c-bottle-mobile.webp", "/images/c-bottle-mobile.webp"],
            desktop: ["/images/p2-bottle-1.webp", "/images/p2-bottle-1.webp"]
          }
        },
        {
          href: "/collections/kitchen",
          label: "Explore",
          title: "Combos",
          animate: "slideRight",
          images: {
            mobile: ["/images/c-cookware-mobile.webp", "/images/c-cookware-mobile.webp"],
            desktop: ["/images/p-combo-2.webp", "/images/p-combo-2.webp"]
          }
        }
      ],
      [
        {
          href: "/collections/tableware",
          label: "Browse",
          title: "Pencil Boxes",
          animate: "slideLeft",
          images: {
            mobile: ["/images/c-tableware-mobile.webp", "/images/c-tableware-mobile.webp"],
            desktop: ["/images/p-pbox-2.webp", "/images/p-pbox-2.webp"]
          }
        },
        {
          href: "/collections/tiffin-boxes",
          label: "Discover",
          title: "Tiffin Boxes",
          animate: "slideRight",
          images: {
            mobile: ["/images/c-cookware-mobile-1.webp", "/images/c-cookware-mobile-1.webp"],
            desktop: ["/images/p-tiffin-1.webp", "/images/p-tiffin-1.webp"]
          }
        }
      ],
      [
        {
          href: "/collections/kidzbee",
          label: "Everyday Use",
          title: "Kitchen",
          animate: "slideRight",
          tall: true,
          images: {
            mobile: ["/images/c-kids-mobile.webp", "/images/c-kids-mobile.webp"],
            desktop: ["/images/p-casserol-1.webp", "/images/p-casserol-1.webp"]
          }
        },
        {
          href: "/collections/appliances",
          label: "Essentials",
          title: "Appliances",
          animate: "slideUp",
          images: {
            mobile: ["/images/c-tiffin-mobile.webp", "/images/c-tiffin-mobile.webp"],
            desktop: ["/images/p-jug-1.webp", "/images/p-jug-1.webp"]
          }
        },
        {
          href: "/collections/kidzbee",
          label: "For Kids",
          title: "Kidzbee",
          animate: "slideLeft",
          images: {
            mobile: ["/images/c-apps-mobile.webp", "/images/c-apps-mobile.webp"],
            desktop: ["/images/p-kids-bottle-2.webp", "/images/p-kids-bottle-2.webp"]
          }
        }
      ]
    ]
  },
  desktop: {
    rows: [
      [
        {
          href: "/collections/hydration",
          label: "Shop Now",
          title: "Hydration",
          animate: "slideLeft",
          images: {
            mobile: ["/images/c-bottle-mobile.webp", "/images/c-bottle-mobile.webp"],
            desktop: ["/images/p2-bottle-1.webp", "/images/p2-bottle-1.webp"]
          }
        },
        {
          href: "/collections/kitchen",
          label: "Explore",
          title: "Combos",
          animate: "slideRight",
          images: {
            mobile: ["/images/c-cookware-mobile.webp", "/images/c-cookware-mobile.webp"],
            desktop: ["/images/p-combo-2.webp", "/images/p-combo-2.webp"]
          }
        },
        {
          href: "/collections/tableware",
          label: "Browse",
          title: "Pencil Boxes",
          animate: "slideLeft",
          images: {
            mobile: ["/images/c-tableware-mobile.webp", "/images/c-tableware-mobile.webp"],
            desktop: ["/images/p-pbox-2.webp", "/images/p-pbox-2.webp"]
          }
        },
        {
          href: "/collections/tiffin-boxes",
          label: "Discover",
          title: "Tiffin Boxes",
          animate: "slideRight",
          images: {
            mobile: ["/images/c-cookware-mobile-1.webp", "/images/c-cookware-mobile-1.webp"],
            desktop: ["/images/p-tiffin-1.webp", "/images/p-tiffin-1.webp"]
          }
        }
      ],
      [
        {
          href: "/collections/kidzbee",
          label: "Everyday Use",
          title: "Kitchen",
          animate: "slideRight",
          tall: true,
          images: {
            mobile: ["/images/c-kids-mobile.webp", "/images/c-kids-mobile.webp"],
            desktop: ["/images/p-casserol-1.webp", "/images/p-casserol-1.webp"]
          }
        },
        {
          href: "/collections/appliances",
          label: "Essentials",
          title: "Appliances",
          animate: "slideUp",
          images: {
            mobile: ["/images/c-tiffin-mobile.webp", "/images/c-tiffin-mobile.webp"],
            desktop: ["/images/p-jug-1.webp", "/images/p-jug-1.webp"]
          }
        },
        {
          href: "/collections/kidzbee",
          label: "For Kids",
          title: "Kidzbee",
          animate: "slideLeft",
          images: {
            mobile: ["/images/c-apps-mobile.webp", "/images/c-apps-mobile.webp"],
            desktop: ["/images/p-kids-bottle-2.webp", "/images/p-kids-bottle-2.webp"]
          }
        }
      ]
    ]
  }
};

// Helper functions for getting products by category
export const getBestsellers = () => ALL_PRODUCTS.filter(p => p.tags.includes('bestseller'));
export const getPopularProducts = () => ALL_PRODUCTS.filter(p => p.tags.includes('popular'));
export const getNewArrivals = () => ALL_PRODUCTS.filter(p => p.tags.includes('new-arrival'));
export const getGeneralProducts = () => ALL_PRODUCTS.filter(p => p.tags.includes('general'));

// Helper functions for grid tiles
export const getTileRows = (device) => GRID_TILES[device].rows;
export const getTileByIndex = (device, rowIndex, tileIndex) => {
  return GRID_TILES[device].rows[rowIndex][tileIndex];
};

// Validation helpers
export const validateTile = (tile) => {
  const required = ['href', 'images', 'animate'];
  return required.every(prop => tile[prop]);
};

export const validateAllTiles = () => {
  const allTiles = [...GRID_TILES.mobile.rows.flat(), ...GRID_TILES.desktop.rows.flat()];
  return allTiles.every(validateTile);
};