export const navbarItems = [
  {
    title: "Shop All",
    path: "/products",
  },
  {
    title: "Water Bottles",
    path: "/collections/water-bottle",
    featured: true,
    dropdown: {
      columns: [
        {
          title: "",
          links: [
            { label: "Shop All Water Bottles", path: "/collections/water-bottle" },
            { label: "Insulated Water Bottle", path: "/collections/insulated-water-bottle" },
            { label: "Kids Water Bottle", path: "/collections/kidzbee" },
            { label: "Steel Bottle", path: "/collections/steel-bottle" },
          ],
        },
        {
          title: "CATEGORIES",
          links: [
            { label: "Plastic Water Bottle", path: "/collections/water-bottle" },
            { label: "Insulated Water Bottle", path: "/collections/insulated-water-bottle" },
            { label: "Kids Bottle", path: "/collections/kidzbee" },
            { label: "Steel Bottle", path: "/collections/steel-bottle" },
            { label: "UBN Flask", path: "/collections/ubn-flask" },
          ],
        },
        {
          title: "MOST POPULAR",
          links: [
            { label: "NEKZA Insulated Plastic Water Bottle", path: "/products/nekza-insulated-plastic-water-bottle" },
            { label: "Bullet Water Bottle", path: "/products/bullet-water-bottle" },
            { label: "Paris Water Bottle", path: "/products/paris-water-bottle" },
            { label: "Kids Water Bottle", path: "/products/kids-water-bottle" },
          ],
        },
      ],
      images: [
        {
          title: "Insulated Water Bottle",
          path: "/collections/insulated-water-bottle",
          image: "/images/products/bullet-water-bottle.webp",
        },
        {
          title: "Kids Water Bottle",
          path: "/collections/kidzbee",
          image: "/images/products/kids-water-bottle-banner.webp",
        },
      ],
    },
  },
  {
    title: "Lunch Boxes",
    path: "/collections/tiffin-boxes",
    dropdown: {
      columns: [
        {
          title: "",
          links: [
            { label: "Shop All Lunch Boxes", path: "/collections/tiffin-boxes" },
            { label: "Plastic Lunch Box", path: "/collections/tiffin-boxes" },
            { label: "Insulated Tiffin Box", path: "/collections/insulated-tiffin-boxes", tag: "BEST VALUE" },
            { label: "Steel Lunch Box", path: "/collections/insulated-tiffin-boxes" },
            { label: "Kids Lunch Box", path: "/collections/kidzbee", tag: "MOST SEARCHED" },
          ],
        },
        {
          title: "CATEGORIES",
          links: [
            { label: "Kids Lunch Box", path: "/collections/kidzbee", tag: "MOST POPULAR" },
            { label: "Square Tiffin Box", path: "/collections/insulated-tiffin-boxes" },
            { label: "3 Compartment Lunch Box", path: "/collections/insulated-tiffin-boxes" },
            { label: "Steel Lunch Box", path: "/collections/insulated-tiffin-boxes" },
          ],
        },
        {
          title: "POPULAR PICKS",
          links: [
            { label: "Square Tiffin Box", path: "/products/square-tiffin-box" },
            { label: "Kids Lunch Box", path: "/products/kids-lunch-box" },
            { label: "Stainless Steel Lunch Box", path: "/products/stainless-steel-lunch-box" },
            { label: "Insulated Steel Lunchbox", path: "/products/insulated-steel-lunchbox" },
          ],
        },
      ],
      images: [
        {
          title: "Insulated Tiffin Box",
          path: "/collections/insulated-tiffin-boxes",
          image: "/images/products/p-tiffin-4.webp",
        },
        {
          title: "Kids Lunch Box",
          path: "/collections/kidzbee",
          image: "/images/p-tiffin-3.webp",
        },
      ],
    },
  },
  {
    title: "Kitchen",
    path: "/collections/kitchen",
    
  },
  {
    title: "Combosets",
    path: "/collections/combosets",
  },
  {
    title: "Pencil Box",
    path: "/collections/pencil-box",
  },
];

export const footerSections = [
  {
    heading: "Support",
    links: [
      { label: "About Us", href: "/about", external: true },
      { label: "Get In Touch", href: "/contact", external: true },
      { label: "FAQs", href: "/pages/faq", external: true },
    ],
  },
  {
    heading: "Products",
    twoCol: true,
    col1: [
      { label: "Water Bottle", href: "/collections/water-bottle" },
      { label: "Insulated Water Bottle", href: "/collections/insulated-water-bottle" },
      { label: "Kitchen", href: "/collections/kitchen" },
      { label: "Tiffin Boxes", href: "/collections/tiffin-boxes" },
      { label: "Insulated Tiffin Boxes", href: "/collections/insulated-tiffin-boxes" },
      { label: "Casseroles", href: "/collections/casseroles" },
      { label: "Water Jug", href: "/collections/water-jug" },
    ],
    col2: [
      { label: "Cleaning Essential", href: "/collections/kitchen" },
      { label: "Kidzbee", href: "/collections/kidzbee" },
      { label: "Combosets", href: "/collections/combosets" },
      { label: "UBN Flask", href: "/collections/ubn-flask" },
      { label: "Combos", href: "/collections/combosets" },
      { label: "Pencil Box", href: "/collections/pencil-box" },
    ],
  },
  {
    heading: "Help & Info",
    links: [
      { label: "Terms & Conditions", href: "/pages/terms-and-conditions" },
      { label: "Privacy Policy", href: "/pages/privacy-policy" },
    ],
  },
  {
    heading: "Corporate",
    external: true,
    links: [
      { label: "Why Nekza", href: "/whyus" },
      { label: "Media", href: "https://www.youtube.com/@NEKZANEKZAPLAST" },
    ],
  }
];

export const productDetail = {
  title: "NEKZA Insulated Plastic Water Bottle",
  price: 1199,
  mrp: 1299,
  sizes: ["750ml", "900ml", "1200ml", "1500ml", "1800ml", "2200ml", "2400ml"],
  images: [
    "/images/p-bottle-1.webp",
    "/images/p-bottle-2.webp",
    "/images/p-bottle-3.webp",
    "/images/p2-bottle-1.webp",
    "/images/p2-bottle-2.webp",
  ],
  tabs: {
    About: {
      heading: "About This Bottle",
      bullets: [
        "The insulated body helps maintain beverage temperature for longer daily use windows.",
        "Designed for office, school, and travel routines with a practical, easy-carry profile.",
        "Leak-resistant cap and durable body make it suitable for regular commute handling.",
        "Available in multiple capacities so users can pick based on hydration needs.",
        "Part of Nekza's hydration range built around utility-first design.",
      ],
    },
    Specs: {
      heading: "Specifications",
      bullets: [
        "Material: Insulated plastic body",
        "Available capacities: 750ml to 2400ml",
        "Product category: Water Bottle",
        "Usage: Everyday / Travel / Office / School / Gym",
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
        "★★★★★ — Useful and sturdy bottle for daily use. — G. Prasad",
        "★★★★☆ — Good quality and practical design. — Parth",
        "★★★★☆ — Nice product for regular family use. — Banki Koolwal",
      ],
    },
    "Additional Info": {
      heading: "Additional Information",
      bullets: [
        "Country of Origin: India",
        "Manufacturer: Nekza Plast",
        "Product Type: Insulated Plastic Water Bottle",
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

// Centralized Product Data
export const ALL_PRODUCTS = [
  {
    id: "nekza-insulated-plastic-water-bottle",
    title: "NEKZA Insulated Plastic Water Bottle",
    slug: "nekza-insulated-plastic-water-bottle",
    price: 1199,
    mrp: 1299,
    off: 8,
    img: "/images/p-bottle-1.webp",
    hoverImage: "/images/p-bottle-2.webp",
    images: [
      "/images/p-bottle-3.webp",
    ],
    href: "/products/nekza-insulated-plastic-water-bottle",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["bestseller", "popular", "general"],
    collections: ["water-bottle", "insulated-water-bottle"],
    variants: [
      { size: "750ml", price: 799, mrp: 999, off: 20 },
      { size: "900ml", price: 899, mrp: 1149, off: 22 },
      { size: "1200ml", price: 999, mrp: 1299, off: 23 },
      { size: "1500ml", price: 1099, mrp: 1399, off: 21 },
    ],
  },
  {
    id: "bullet-water-bottle",
    title: "Bullet Water Bottle",
    slug: "bullet-water-bottle",
    price: 329,
    mrp: 528,
    off: 38,
    img: "/images/products/bullet-water-bottle-2.webp",
    hoverImage: "/images/products/bullet-water-bottle.webp",
    images: [
      // "/images/p-kids-bottle-2.webp",
    ],

    href: "/products/bullet-water-bottle",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["bestseller", "popular", "general"],
    collections: ["water-bottle", "insulated-water-bottle"],
  },
  {
    id: "stainless-steel-bottle",
    title: "Stainless Steel Bottle",
    slug: "stainless-steel-bottle",
    price: 599,
    mrp: 799,
    off: 25,
    img: "/images/products/stainless-steel-bottle.webp",
    hoverImage: "/images/products/stainless-steel-bottle-2.webp",
    images: [],
    href: "/products/stainless-steel-bottle",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["bestseller", "popular", "general"],
    collections: ["water-bottle", "insulated-water-bottle"],
  },
  {
    id: "kids-water-bottle",
    title: "Kids Water Bottle",
    slug: "kids-water-bottle",
    price: 329,
    mrp: 479,
    off: 31,
    img: "/images/products/kids-water-bottle-2.webp",
    hoverImage: "/images/products/kids-water-bottle-banner.webp",
    images: [
      "/images/p-kids-bottle-1.webp",
      "/images/p-kids-bottle-2.webp",
    ],
    href: "/products/kids-water-bottle",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["bestseller", "popular", "general"],
    collections: ["water-bottle", "kidzbee"],
  },
  {
    id: "kids-school-water-bottle",
    title: "Kids School Water Bottle",
    slug: "kids-school-water-bottle",
    price: 59,
    mrp: 120,
    off: 51,
    img: "/images/products/kids-school-water-bottle.webp",
    hoverImage: "/images/products/kids-school-water-bottle-2.webp",
    images: [],
    href: "/products/kids-school-water-bottle",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["water-bottle", "kidzbee"],
  },
  {
    id: "paris-water-bottle",
    title: "Paris Water Bottle",
    slug: "paris-water-bottle",
    price: 129,
    mrp: 200,
    off: 35,
    img: "/images/p2-bottle-1.webp",
    hoverImage: "/images/p2-bottle-2.webp",
    images: [],
    href: "/products/paris-water-bottle",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["water-bottle", "insulated-water-bottle"],
  },
  {
    id: "cool-campash-water-bottle",
    title: "Cool Campash Water Bottle",
    slug: "cool-campash-water-bottle",
    price: 129,
    mrp: 200,
    off: 35,
    img: "/images/p2-bottle-2.webp",
    hoverImage: "/images/p2-bottle-3.webp",
    images: [],
    href: "/products/cool-campash-water-bottle",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["water-bottle", "insulated-water-bottle"],
  },
  {
    id: "straw-with-belt-water-bottle",
    title: "Straw With Belt Water Bottle",
    slug: "straw-with-belt-water-bottle",
    price: 149,
    mrp: 210,
    off: 29,
    img: "/images/p2-bottle-3.webp",
    hoverImage: "/images/p2-bottle-2.webp",
    images: [],
    href: "/products/straw-with-belt-water-bottle",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["water-bottle", "kidzbee"],
  },
  {
    id: "slim-water-bottle",
    title: "Slim Water Bottle",
    slug: "slim-water-bottle",
    price: 179,
    mrp: 250,
    off: 28,
    img: "/images/p2-bottle-3.webp",
    hoverImage: "/images/p2-bottle-1.webp",
    images: [],
    href: "/products/slim-water-bottle",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["water-bottle"],
  },
  {
    id: "slim-belt-and-straw-bottle",
    title: "Slim Belt And Straw Bottle",
    slug: "slim-belt-and-straw-bottle",
    price: 199,
    mrp: 270,
    off: 26,
    img: "/images/p-bottle-1.webp",
    hoverImage: "/images/p-bottle-2.webp",
    images: [],
    href: "/products/slim-belt-and-straw-bottle",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["water-bottle", "kidzbee"],
  },
  {
    id: "baby-doll-water-bottle",
    title: "Baby Doll Water Bottle",
    slug: "baby-doll-water-bottle",
    price: 229,
    mrp: 310,
    off: 26,
    img: "/images/p-kids-bottle-2.webp",
    hoverImage: "/images/p-kids-bottle-1.webp",
    images: [],
    href: "/products/baby-doll-water-bottle",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["water-bottle", "kidzbee"],
  },
  {
    id: "premium-steel-bottle",
    title: "Premium Steel Bottle",
    slug: "premium-steel-bottle",
    price: 249,
    mrp: 340,
    off: 27,
    img: "/images/p2-bottle-3.webp",
    hoverImage: "/images/p2-bottle-1.webp",
    images: [],
    href: "/products/premium-steel-bottle",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["water-bottle", "insulated-water-bottle"],
  },
  {
    id: "premium-steel-bottles",
    title: "Premium Steel Bottles",
    slug: "premium-steel-bottles",
    price: 279,
    mrp: 380,
    off: 27,
    img: "/images/p2-bottle-1.webp",
    hoverImage: "/images/p2-bottle-3.webp",
    images: [],
    href: "/products/premium-steel-bottles",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["water-bottle", "insulated-water-bottle"],
  },
  {
    id: "plastic-ubn-flask-600ml",
    title: "Plastic UBN Flask - 600ml",
    slug: "plastic-ubn-flask-600ml",
    price: 765,
    mrp: 949,
    off: 19,
    img: "/images/products/flask.webp",
    hoverImage: "/images/products/flask.webp",
    images: [],
    href: "/products/plastic-ubn-flask-600ml",
    category: "flask",
    vendor: "Nekza",
    tags: ["bestseller", "popular", "general"],
    collections: ["insulated-water-bottle"],
    variants: [
      { size: "600ml", price: 765, mrp: 949, off: 19 },
      { size: "800ml", price: 899, mrp: 1129, off: 20 },
      { size: "1700ml", price: 1299, mrp: 1649, off: 21 },
    ],
  },
  {
    id: "plastic-ubn-flask-800ml",
    title: "Plastic UBN Flask - 800ml",
    slug: "plastic-ubn-flask-800ml",
    price: 349,
    mrp: 480,
    off: 27,
    img: "/images/products/flask.webp",
    hoverImage: "/images/products/flask.webp",
    images: [],
    href: "/products/plastic-ubn-flask-800ml",
    category: "flask",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["insulated-water-bottle"],
  },
  {
    id: "plastic-ubn-flask-1700ml",
    title: "Plastic UBN Flask - 1700ml",
    slug: "plastic-ubn-flask-1700ml",
    price: 399,
    mrp: 540,
    off: 26,
    img: "/images/products/flask.webp",
    hoverImage: "/images/products/flask.webp",
    images: [],
    href: "/products/plastic-ubn-flask-1700ml",
    category: "flask",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["insulated-water-bottle"],
  },
  {
    id: "nekza-unbreakable-flask-600ml",
    title: "NEKZA Unbreakable Flask 600ml",
    slug: "nekza-unbreakable-flask-600ml",
    price: 449,
    mrp: 610,
    off: 26,
    img: "/images/products/flask.webp",
    hoverImage: "/images/products/flask.webp",
    images: [],
    href: "/products/nekza-unbreakable-flask-600ml",
    category: "flask",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["insulated-water-bottle"],
  },
  {
    id: "nekza-unbreakable-flask-800ml",
    title: "NEKZA Unbreakable Flask 800ml",
    slug: "nekza-unbreakable-flask-800ml",
    price: 499,
    mrp: 680,
    off: 27,
    img: "/images/products/flask.webp",
    hoverImage: "/images/products/flask.webp",
    images: [],
    href: "/products/nekza-unbreakable-flask-800ml",
    category: "flask",
    vendor: "Nekza",
    tags: ["popular", "general"],
    collections: ["insulated-water-bottle"],
  },
  {
    id: "nekza-unbreakable-flask-1700ml",
    title: "NEKZA Unbreakable Flask 1700ml",
    slug: "nekza-unbreakable-flask-1700ml",
    price: 549,
    mrp: 750,
    off: 27,
    img: "/images/products/flask.webp",
    hoverImage: "/images/products/flask.webp",
    images: [],
    href: "/products/nekza-unbreakable-flask-1700ml",
    category: "flask",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["insulated-water-bottle"],
  },
  {
    id: "plastic-water-jug",
    title: "Plastic Water Jug",
    slug: "plastic-water-jug",
    price: 799,
    mrp: 999,
    off: 20,
    img: "/images/products/p-jug-2.webp",
    hoverImage: "/images/p-jug-1.webp",
    images: [],
    href: "/products/plastic-water-jug",
    category: "water-jug",
    vendor: "Nekza",
    tags: ["bestseller", "popular", "general"],
    collections: ["water-jug"],
  },
  {
    id: "water-jug-with-glass",
    title: "Water Jug With Glass",
    slug: "water-jug-with-glass",
    price: 299,
    mrp: 410,
    off: 27,
    img: "/images/products/p-jug-2.webp",
    hoverImage: "/images/p-jug-1.webp",
    images: [],
    href: "/products/water-jug-with-glass",
    category: "water-jug",
    vendor: "Nekza",
    tags: ["popular", "general"],
    collections: ["water-jug"],
  },
  {
    id: "nekza-insulated-water-jug",
    title: "NEKZA Insulated Water Jug",
    slug: "nekza-insulated-water-jug",
    price: 349,
    mrp: 480,
    off: 27,
    img: "/images/products/p-jug-2.webp",
    hoverImage: "/images/p-jug-2.webp",
    images: [],
    href: "/products/nekza-insulated-water-jug",
    category: "water-jug",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["water-jug"],
  },
  {
    id: "nekza-insulated-plastic-water-jug-5-ltr",
    title: "NEKZA Insulated Plastic Water Jug 5 ltr",
    slug: "nekza-insulated-plastic-water-jug-5-ltr",
    price: 399,
    mrp: 540,
    off: 26,
    img: "/images/products/p-jug-2.webp",
    hoverImage: "/images/p-jug-1.webp",
    images: [],
    href: "/products/nekza-insulated-plastic-water-jug-5-ltr",
    category: "water-jug",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["water-jug"],
  },
  {
    id: "fridge-jug",
    title: "Fridge Jug",
    slug: "fridge-jug",
    price: 449,
    mrp: 610,
    off: 26,
    img: "/images/products/p-jug-2.webp",
    hoverImage: "/images/p-jug-1.webp",
    images: [],
    href: "/products/fridge-jug",
    category: "water-jug",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["water-jug"],
  },
  {
    id: "falcon-fridge-jug",
    title: "Falcon Fridge Jug",
    slug: "falcon-fridge-jug",
    price: 499,
    mrp: 680,
    off: 27,
    img: "/images/products/p-jug-2.webp",
    hoverImage: "/images/p-jug-1.webp",
    images: [],
    href: "/products/falcon-fridge-jug",
    category: "water-jug",
    vendor: "Nekza",
    tags: ["new-arrival", "general"],
    collections: ["water-jug"],
  },
  {
    id: "20-liters-water-camper",
    title: "20 Liters Water Camper",
    slug: "20-liters-water-camper",
    price: 299,
    mrp: 410,
    off: 27,
    img: "/images/products/p-jug-2.webp",
    hoverImage: "/images/p-jug-1.webp",
    images: [],
    href: "/products/20-liters-water-camper",
    category: "water-jug",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["water-jug"],
  },
  {
    id: "plastic-jug-and-6pcs-glass-set",
    title: "Plastic Jug & 6pcs Glass Set",
    slug: "plastic-jug-and-6pcs-glass-set",
    price: 349,
    mrp: 480,
    off: 27,
    img: "/images/products/p-jug-2.webp",
    hoverImage: "/images/p-jug-1.webp",
    images: [],
    href: "/products/plastic-jug-and-6pcs-glass-set",
    category: "water-jug",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["water-jug"],
  },
  {
    id: "kids-lunch-box",
    title: "Kids Lunch Box",
    slug: "kids-lunch-box",
    price: 849,
    mrp: 999,
    off: 15,
    img: "/images/p-tiffin-1.webp",
    hoverImage: "/images/p-tiffin-2.webp",
    images: [],
    href: "/products/kids-lunch-box",
    category: "lunch-box",
    vendor: "Nekza",
    tags: ["bestseller", "popular", "general"],
    collections: ["tiffin-boxes", "kidzbee"],
  },
  {
    id: "kids-school-lunch-box",
    title: "Kids School Lunch Box",
    slug: "kids-school-lunch-box",
    price: 169,
    mrp: 230,
    off: 27,
    img: "/images/p-tiffin-1.webp",
    hoverImage: "/images/p-tiffin-2.webp",
    images: [],
    href: "/products/kids-school-lunch-box",
    category: "lunch-box",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["tiffin-boxes", "kidzbee"],
  },
  {
    id: "kids-plastic-lunch-box",
    title: "Kids Plastic Lunch Box",
    slug: "kids-plastic-lunch-box",
    price: 199,
    mrp: 270,
    off: 26,
    img: "/images/p-tiffin-1.webp",
    hoverImage: "/images/p-tiffin-2.webp",
    images: [],
    href: "/products/kids-plastic-lunch-box",
    category: "lunch-box",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["tiffin-boxes", "kidzbee"],
  },
  {
    id: "square-tiffin-box",
    title: "Square Tiffin Box",
    slug: "square-tiffin-box",
    price: 699,
    mrp: 899,
    off: 22,
    img: "/images/p-tiffin-1.webp",
    hoverImage: "/images/p-tiffin-2.webp",
    images: [],
    href: "/products/square-tiffin-box",
    category: "lunch-box",
    vendor: "Nekza",
    tags: ["bestseller", "general"],
    collections: ["tiffin-boxes", "insulated-tiffin-boxes"],
  },
  {
    id: "square-lunch-box",
    title: "Square Lunch Box",
    slug: "square-lunch-box",
    price: 229,
    mrp: 310,
    off: 26,
    img: "/images/p-tiffin-1.webp",
    hoverImage: "/images/p-tiffin-2.webp",
    images: [],
    href: "/products/square-lunch-box",
    category: "lunch-box",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["tiffin-boxes", "insulated-tiffin-boxes"],
  },
  {
    id: "3-compartment-lunch-box",
    title: "3 Compartment Lunch Box",
    slug: "3-compartment-lunch-box",
    price: 259,
    mrp: 350,
    off: 26,
    img: "/images/p-tiffin-1.webp",
    hoverImage: "/images/p-tiffin-2.webp",
    images: [],
    href: "/products/3-compartment-lunch-box",
    category: "lunch-box",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["tiffin-boxes", "insulated-tiffin-boxes"],
  },
  {
    id: "stainless-steel-lunch-box",
    title: "Stainless Steel Lunch Box",
    slug: "stainless-steel-lunch-box",
    price: 299,
    mrp: 410,
    off: 27,
    img: "/images/p-tiffin-1.webp",
    hoverImage: "/images/p-tiffin-2.webp",
    images: [],
    href: "/products/stainless-steel-lunch-box",
    category: "lunch-box",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["tiffin-boxes", "insulated-tiffin-boxes"],
  },
  {
    id: "stainless-steel-lunchboxes-for-kids",
    title: "Stainless Steel Lunchboxes For Kids",
    slug: "stainless-steel-lunchboxes-for-kids",
    price: 329,
    mrp: 450,
    off: 27,
    img: "/images/p-tiffin-1.webp",
    hoverImage: "/images/p-tiffin-2.webp",
    images: [],
    href: "/products/stainless-steel-lunchboxes-for-kids",
    category: "lunch-box",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["tiffin-boxes", "kidzbee"],
  },
  {
    id: "stainless-steel-bento-lunch-box",
    title: "Stainless Steel Bento Lunch Box",
    slug: "stainless-steel-bento-lunch-box",
    price: 169,
    mrp: 230,
    off: 27,
    img: "/images/p-tiffin-1.webp",
    hoverImage: "/images/p-tiffin-2.webp",
    images: [],
    href: "/products/stainless-steel-bento-lunch-box",
    category: "lunch-box",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["tiffin-boxes", "insulated-tiffin-boxes"],
  },
  {
    id: "insulated-steel-lunchbox",
    title: "Insulated Steel Lunchbox",
    slug: "insulated-steel-lunchbox",
    vendor: "Nekza",
    price: 1635,
    mrp: 1990,
    off: 18,
    img: "/images/p-tiffin-1.webp",
    hoverImage: "/images/p-tiffin-2.webp",
    images: [],
    href: "/products/insulated-steel-lunchbox",
    category: "lunch-box",
    tags: ["new-arrival", "general"],
    collections: ["insulated-tiffin-boxes", "tiffin-boxes"],
  },
  {
    id: "plastic-lunchbox",
    title: "Plastic Lunchbox",
    slug: "plastic-lunchbox",
    price: 199,
    mrp: 270,
    off: 26,
    img: "/images/p-tiffin-1.webp",
    hoverImage: "/images/p-tiffin-2.webp",
    images: [],
    href: "/products/plastic-lunchbox",
    category: "lunch-box",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["tiffin-boxes"],
  },
  {
    id: "nekza-insulated-hot-pot-3200-ml",
    title: "NEKZA Insulated Hot Pot 3200 ml",
    slug: "nekza-insulated-hot-pot-3200-ml",
    price: 429,
    mrp: 580,
    off: 26,
    img: "/images/p-casserol-2.webp",
    hoverImage: "/images/p-casserol-1.webp",
    images: [],
    href: "/products/nekza-insulated-hot-pot-3200-ml",
    category: "casserole",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["casseroles"],
  },
  {
    id: "nekza-insulated-hot-pot-2200-ml",
    title: "NEKZA Insulated Hot Pot 2200 ml",
    slug: "nekza-insulated-hot-pot-2200-ml",
    price: 499,
    mrp: 680,
    off: 27,
    img: "/images/p-casserol-2.webp",
    hoverImage: "/images/p-casserol-1.webp",
    images: [],
    href: "/products/nekza-insulated-hot-pot-2200-ml",
    category: "casserole",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["casseroles"],
  },
  {
    id: "plastic-insulated-casserole",
    title: "Plastic Insulated Casserole",
    slug: "plastic-insulated-casserole",
    price: 569,
    mrp: 770,
    off: 26,
    img: "/images/p-casserol-2.webp",
    hoverImage: "/images/p-casserol-1.webp",
    images: [],
    href: "/products/plastic-insulated-casserole",
    category: "casserole",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["casseroles"],
  },
  {
    id: "gift-and-combo-set",
    title: "Gift And Combo Set",
    slug: "gift-and-combo-set",
    vendor: "Nekza",
    price: 1116,
    mrp: 1395,
    off: 20,
    img: "/images/p-combo-1.webp",
    hoverImage: "/images/p-combo-2.webp",
    images: [],
    href: "/products/gift-and-combo-set",
    category: "combo-set",
    tags: ["new-arrival", "general"],
    collections: ["combosets"],
  },
  {
    id: "tiffin-and-jug-combo",
    title: "Tiffin And Jug Combo",
    slug: "tiffin-and-jug-combo",
    vendor: "Nekza",
    price: 499,
    mrp: 680,
    off: 27,
    img: "/images/p-combo-1.webp",
    hoverImage: "/images/p-combo-2.webp",
    images: [],
    href: "/products/tiffin-and-jug-combo",
    category: "combo-set",
    tags: ["general"],
    collections: ["combosets", "tiffin-boxes", "water-jug"],
  },
  {
    id: "apple-box-3-piece",
    title: "Apple Box (3 Piece)",
    slug: "apple-box-3-piece",
    vendor: "Nekza",
    price: 599,
    mrp: 810,
    off: 26,
    img: "/images/p-combo-1.webp",
    hoverImage: "/images/p-combo-2.webp",
    images: [],
    href: "/products/apple-box-3-piece",
    category: "combo-set",
    tags: ["general"],
    collections: ["combosets"],
  },
  {
    id: "nekza-kids-pencil-box",
    title: "NEKZA Kids Pencil Box",
    slug: "nekza-kids-pencil-box",
    price: 99,
    mrp: 140,
    off: 29,
    img: "/images/products/NEKZA-Kids-Pencil-Box.webp",
    hoverImage: "/images/p-pbox-2.webp",
    images: [],
    href: "/products/nekza-kids-pencil-box",
    category: "pencil-box",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["pencil-box", "kidzbee"],
  },
  {
    id: "smart-pencil-box",
    title: "Smart Pencil Box",
    slug: "smart-pencil-box",
    price: 119,
    mrp: 170,
    off: 30,
    img: "/images/products/smart-pencil-box.webp",
    hoverImage: "/images/products/smart-pencil-box-2.webp",
    images: [],
    href: "/products/smart-pencil-box",
    category: "pencil-box",
    vendor: "Nekza",
    tags: ["new-arrival", "general"],
    collections: ["pencil-box", "kidzbee"],
  },
  {
    id: "plastic-pencil-box",
    title: "Plastic Pencil Box",
    slug: "plastic-pencil-box",
    price: 149,
    mrp: 210,
    off: 29,
    img: "/images/products/plastic-pencil-box.webp",
    hoverImage: "/images/products/plastic-pencil-box-2.webp",
    images: [],
    href: "/products/plastic-pencil-box",
    category: "pencil-box",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["pencil-box"],
  },
  {
    id: "kitchen-products-salt-and-pepper-set",
    title: "Kitchen Products Salt And Pepper Set",
    slug: "kitchen-products-salt-and-pepper-set",
    price: 499,
    mrp: 649,
    off: 23,
    img: "/images/products/kitchen-products-salt-and-pepper-set.webp",
    hoverImage: "/images/products/kitchen-products-salt-and-pepper-set-2.webp",
    images: [],
    href: "/products/kitchen-products-salt-and-pepper-set",
    category: "kitchen-product",
    vendor: "Nekza",
    tags: ["bestseller", "popular", "general"],
    collections: ["kitchen"],
  },
  {
    id: "quick-glass-6-pcs-set",
    title: "Quick Glass 6 Pcs Set",
    slug: "quick-glass-6-pcs-set",
    price: 199,
    mrp: 270,
    off: 26,
    img: "/images/p2-bottle-2.webp",
    hoverImage: "/images/p2-bottle-1.webp",
    images: [],
    href: "/products/quick-glass-6-pcs-set",
    category: "kitchen-product",
    vendor: "Nekza",
    tags: ["new-arrival", "general"],
    collections: ["kitchen"],
  },
  {
    id: "insulated-kids-water-bottle",
    title: "Insulated Kids Water Bottle",
    slug: "insulated-kids-water-bottle",
    price: 299,
    mrp: 410,
    off: 27,
    img: "/images/p-kids-bottle-2.webp",
    hoverImage: "/images/p-kids-bottle-1.webp",
    images: [],
    href: "/products/insulated-kids-water-bottle",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["kidzbee", "insulated-water-bottle"],
  },
  {
    id: "stainless-steel-lunch-box-for-kids",
    title: "Stainless Steel Lunch Box For Kids",
    slug: "stainless-steel-lunch-box-for-kids",
    price: 229,
    mrp: 310,
    off: 26,
    img: "/images/p-tiffin-1.webp",
    hoverImage: "/images/p-tiffin-2.webp",
    images: [],
    href: "/products/stainless-steel-lunch-box-for-kids",
    category: "lunch-box",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["kidzbee", "tiffin-boxes"],
  },
  {
    id: "plastic-insulated-water-bottle",
    title: "Plastic Insulated Water Bottle",
    slug: "plastic-insulated-water-bottle",
    price: 149,
    mrp: 210,
    off: 29,
    img: "/images/p-bottle-1.webp",
    hoverImage: "/images/p-bottle-2.webp",
    images: [],
    href: "/products/plastic-insulated-water-bottle",
    category: "water-bottle",
    vendor: "Nekza",
    tags: ["general"],
    collections: ["insulated-water-bottle", "water-bottle"],
  },
];

export const getRelatedProducts = (currentSlug, category, limit = 4) => {
  return ALL_PRODUCTS
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit)
    .map((p) => ({
      title: p.title,
      price: p.price,
      mrp: p.mrp,
      off: p.off,
      colours: 3,
      img: p.img,
    }));
};

// Backward-compatible default related list for existing product detail page.
export const relatedProducts = getRelatedProducts(
  "nekza-insulated-plastic-water-bottle",
  "water-bottle"
);

// ProductGrid Tiles Data
export const GRID_TILES = {
  mobile: {
    rows: [
      [
        {
          href: "/collections/water-bottle",
          label: "Shop Now",
          title: "Hydration",
          animate: "slideLeft",
          images: {
            mobile: ["/images/p2-bottle-1.webp", "/images/p2-bottle-1.webp"],
            desktop: ["/images/p2-bottle-1.webp", "/images/p2-bottle-1.webp"]
          }
        },
        {
          href: "/collections/combosets",
          label: "Explore",
          title: "Combos",
          animate: "slideRight",
          images: {
            mobile: ["/images/products/tiffin-jug-combo-green-2.webp", "/images/products/tiffin-jug-combo-green-2.webp"],
            desktop: ["/images/p-combo-2.webp", "/images/p-combo-2.webp"]
          }
        }
      ],
      [
        {
          href: "/collections/pencil-box",
          label: "Browse",
          title: "Pencil Boxes",
          animate: "slideLeft",
          images: {
            mobile: ["/images/products/NEKZA-Kids-Pencil-Box.webp", "/images/products/NEKZA-Kids-Pencil-Box.webp"],
            desktop: ["/images/p-pbox-2.webp", "/images/p-pbox-2.webp"]
          }
        },
        {
          href: "/collections/tiffin-boxes",
          label: "Discover",
          title: "Tiffin Boxes",
          animate: "slideRight",
          images: {
            mobile: ["/images/p-tiffin-1.webp", "/images/p-tiffin-1.webp"],
            desktop: ["/images/p-tiffin-1.webp", "/images/p-tiffin-1.webp"]
          }
        }
      ],
      [
        {
          href: "/collections/kitchen",
          label: "Everyday Use",
          title: "Kitchen",
          animate: "slideRight",
          tall: true,
          images: {
            mobile: ["/images/p-casserol-1.webp ", "/images/p-casserol-2.webp"],
            desktop: ["/images/p-casserol-1.webp", "/images/p-casserol-1.webp"]
          }
        },
        {
          href: "/collections/water-jug",
          label: "Essentials",
          title: "Water Jugs",
          animate: "slideUp",
          images: {
            mobile: ["/images/p-jug-1.webp", "/images/p-jug-1.webp"],
            desktop: ["/images/p-jug-1.webp", "/images/p-jug-1.webp"]
          }
        },
        {
          href: "/collections/kidzbee",
          label: "For Kids",
          title: "Kidz",
          animate: "slideLeft",
          images: {
            mobile: ["/images/products/kids-school-water-bottle.webp", "/images/products/kids-school-water-bottle.webp"],
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
          href: "/collections/water-bottle",
          label: "Shop Now",
          title: "Hydration",
          animate: "slideLeft",
          images: {
            mobile: ["/images/c-bottle-mobile.webp", "/images/c-bottle-mobile.webp"],
            desktop: ["/images/p2-bottle-1.webp", "/images/p2-bottle-1.webp"]
          }
        },
        {
          href: "/collections/combosets",
          label: "Explore",
          title: "Combos",
          animate: "slideRight",
          images: {
            mobile: ["/images/c-cookware-mobile.webp", "/images/c-cookware-mobile.webp"],
            desktop: ["/images/p-combo-2.webp", "/images/p-combo-2.webp"]
          }
        },
        {
          href: "/collections/pencil-box",
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
          href: "/collections/kitchen",
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
          href: "/collections/water-jug",
          label: "Essentials",
          title: "Water Jugs",
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

// Product helpers for schema migration support
const hasTag = (product, tag) => {
  const tags = Array.isArray(product?.tags) ? product.tags : [];
  return tags.includes(tag);
};

export const getBestsellers = () => ALL_PRODUCTS.filter((p) => hasTag(p, "bestseller"));
export const getPopularProducts = () => ALL_PRODUCTS.filter((p) => hasTag(p, "popular"));
export const getNewArrivals = () => ALL_PRODUCTS.filter((p) => hasTag(p, "new-arrival"));
export const getGeneralProducts = () => ALL_PRODUCTS.filter((p) => hasTag(p, "general"));

export const getProductsByCategory = (category) =>
  ALL_PRODUCTS.filter((p) => p?.category === category);

export const getProductsByCollection = (collection) =>
  ALL_PRODUCTS.filter((p) => {
    if (!collection) return false;

    const tags = Array.isArray(p?.tags) ? p.tags : [];
    const collections = Array.isArray(p?.collections) ? p.collections : [];

    const labelToTag = {
      "popular-products": "popular",
      popular: "popular",
      "new-arrivals": "new-arrival",
      "new-arrival": "new-arrival",
      bestseller: "bestseller",
      bestsellers: "bestseller",
    };

    const collectionPredicates = {
      "steel-bottle": (product) => {
        const title = (product?.title || "").toLowerCase();
        const slug = (product?.slug || "").toLowerCase();
        return title.includes("steel") || slug.includes("steel");
      },
      "ubn-flask": (product) => {
        const title = (product?.title || "").toLowerCase();
        const slug = (product?.slug || "").toLowerCase();
        return title.includes("ubn flask") || slug.includes("ubn-flask");
      },
    };

    const mappedTag = labelToTag[collection];
    if (mappedTag) return tags.includes(mappedTag);

    const mappedCollectionPredicate = collectionPredicates[collection];
    if (mappedCollectionPredicate) return mappedCollectionPredicate(p);

    return collections.includes(collection) || p?.category === collection;
  });

export const PRODUCT_LISTING_TITLE_MAP = {
  kitchen: "Kitchen Essentials",
  combosets: "Combo Sets",
  kidzbee: "Kids Section",
};

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

// Company Information
export const COMPANY_INFO = {
  name: "Nekza Plast",
  contactPerson: "Ketan Desai (CEO)",
  location: "Survey No. 407, Plot No. 12, Jay Balaji Industrial Area, Sanganva, Tal. Lodhika, Sanganva, Rajkot - 360035, Gujarat, India",
  phone: "+91 7942836070",
  gst: "24AARFN6224C1ZE",
  trustBadge: "TrustSEAL Verified / IndiaMART style badge",
  established: 2013
};

// About timeline
export const COMPANY_TIMELINE = [
  {
    year: "2013",
    title: "Nekza Was Founded",
    description:
      "Nekza Plast started with a clear goal: practical, durable home and hydration products families can trust.",
    type: "milestone",
  },
  {
    year: "2015",
    title: "Core Hydration Range Expanded",
    description:
      "Water bottles and utility hydration products became the foundation of the Nekza catalog.",
    type: "growth",
  },
  {
    year: "2018",
    title: "Lunch & Kitchen Categories Added",
    description:
      "The portfolio expanded into lunch boxes, casseroles, and daily kitchen-use essentials.",
    type: "growth",
  },
  {
    year: "2021",
    title: "Retail Network Strengthened",
    description:
      "Nekza widened distribution and deepened retailer partnerships across key markets.",
    type: "milestone",
  },
  {
    year: "2023",
    title: "Customer-First Product Focus",
    description:
      "Design and quality improvements were aligned with real everyday use cases from families and students.",
    type: "achievement",
  },
  {
    year: "2025",
    title: "Modern Catalog, Same Trusted Promise",
    description:
      "Nekza continues building utility-led products under the 'Kuch Naya Sochte Hain' mindset.",
    type: "achievement",
  },
];

// Website Information
export const WEBSITE_INFO = {
  mainCategory: "Insulated Water Bottles And Lunch Boxes",
  supportingText: "We are offering Insulated Water Bottles, Lunch Boxes, Insulated Water Jugs, Insulated Casseroles etc."
};

// Reviews and Ratings
export const REVIEWS_INFO = {
  overallRating: 4.2,
  totalReviews: 72,
  ratingBreakdown: {
    fiveStar: 53,
    fourStar: 5,
    threeStar: 10,
    twoStar: 6,
    oneStar: 26
  },
  userSatisfaction: {
    response: 61
  }
};

export const FAQ_DATA = [
  {
    category: "Products",
    items: [
      {
        q: "What kind of products does Nekza offer?",
        a: "Nekza focuses on everyday utility products like water bottles, lunch boxes, casseroles, flasks, and kitchen essentials designed for durability, convenience, and daily use.",
      },
      {
        q: "Are your products safe for daily use?",
        a: "Yes. Our products are designed keeping everyday usability and safety in mind. Always refer to product-specific details for materials and usage instructions.",
      },
      {
        q: "Do product colors or designs vary?",
        a: "Slight variations may occur due to display settings or manufacturing updates, but overall functionality and quality remain consistent.",
      },
    ],
  },
  {
    category: "Orders & Availability",
    items: [
      {
        q: "How do I place an order?",
        a: "You can explore products on the website and follow the available purchase or inquiry flow depending on the product and availability.",
      },
      {
        q: "Are all products always in stock?",
        a: "Availability may vary. Some products may be temporarily out of stock or available only in specific regions.",
      },
      {
        q: "Can I track my order?",
        a: "If tracking is applicable, relevant updates will be shared after confirmation or dispatch.",
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    items: [
      {
        q: "How long does delivery take?",
        a: "Delivery timelines depend on your location, product availability, and logistics. Estimated timelines are usually shared during confirmation.",
      },
      {
        q: "Do you deliver everywhere?",
        a: "Delivery coverage may vary. Please check availability for your location during the order or inquiry process.",
      },
    ],
  },
  {
    category: "Returns & Support",
    items: [
      {
        q: "What if I receive a damaged product?",
        a: "Please report the issue within the support window with proper details. Our team will assist you with resolution steps.",
      },
      {
        q: "Do you offer returns or replacements?",
        a: "Returns or replacements depend on product condition, eligibility, and policy guidelines. Please refer to our support process.",
      },
      {
        q: "How can I contact support?",
        a: "You can reach out through the contact details provided on the website. Our team will assist you with queries or issues.",
      },
    ],
  },
];

// Discovery chips for product filtering
export const DISCOVERY_CHIPS = {
  bestsellers: [
    { id: "for-you", label: "For You" },
    { id: "trending", label: "Trending" },
    { id: "under-500", label: "Under ₹500" },
  ],
  newArrivals: [
    { id: "fresh", label: "Just Dropped" },
    { id: "deals", label: "Top Deals" },
    { id: "premium", label: "Premium New" },
  ],
  popular: [
    { id: "community", label: "Community Picks" },
    { id: "value", label: "Best Value" },
    { id: "premium", label: "Premium Picks" },
  ],
};

// Testimonials data
export const TESTIMONIALS = [
  {
    text: "The bottle quality is premium and keeps water cool for hours. Exactly what I needed for office and travel.",
    name: "Priya Sharma",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=20",
  },
  {
    text: "Loved finish and durability. Nekza products feel sturdy and designs are very practical for daily use.",
    name: "Raveena Verma",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=32",
  },
  {
    text: "My kids use lunch box every day. Great build quality and easy to clean.",
    name: "Ananya Patel",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=44",
  },
  {
    text: "Delivery was quick and packaging was neat. Product looked exactly like the photos.",
    name: "Karan Mehta",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=56",
  },
  {
    text: "Best value for money in this range. The insulation works really well.",
    name: "Sneha Iyer",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=47",
  },
  {
    text: "The design is sleek and modern. It fits perfectly in my car cup holder too.",
    name: "Arjun Nair",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=15",
  },
  {
    text: "Keeps my drinks hot for hours! The build quality feels premium and durable.",
    name: "Ritika Sharma",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=32",
  },
  {
    text: "Lightweight, easy to carry, and completely leak-proof. Perfect for daily use.",
    name: "Karan Bhatra",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=68",
  }
];

// Why Us reasons
export const WHY_US_REASONS = [
  {
    title: "Built For Everyday Use",
    description:
      "From office commutes to travel days, our products are made to stay durable, practical, and easy to carry.",
    icon: (`
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 5h10M8 5v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 10h4M10 14h4" />
      </svg>`
    ),
  },
  {
    title: "Modern + Functional Design",
    description:
      "We combine clean aesthetics with thoughtful details so every item looks premium and works better in daily life.",
    icon: (`
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 13 12 4l8 9-8 7-8-7Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
      </svg>`
    ),
  },
  {
    title: "Trusted By Real Customers",
    description:
      "Thousands of buyers choose Nekza for reliable quality, value-for-money products, and consistent experiences.",
    icon: (`
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m12 17 5.2 3-1.4-5.8L20 9.8l-5.9-.5L12 4 9.9 9.3 4 9.8l4.2 4.4L6.8 20z" />
      </svg>`
    ),
  },
  {
    title: "Fast Support & Delivery",
    description:
      "Quick order processing, neat packaging, and responsive help whenever you need assistance with your purchase.",
    icon: (`
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h11m0 0-3-3m3 3-3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 6v12" />
      </svg>`
    ),
  },
];

// Life with Nekza video cards
export const LIFE_WITH_NEKZA_CARDS = [
  {
    video: "/images/p-bottle-1.mp4",
    href: "/products/insulated-water-bottle/nekza-insulated-plastic-water-bottle",
  },
  {
    video: "/images/p-jug.mp4",
    href: "/products/nekza-insulated-plastic-water-jug-5-ltr",
  },
  {
    video: "/images/p-combo.mp4",
    href: "/products/combosets/gift-and-combo-set",
  },
  {
    video: "/images/p-jug-2.mp4",
    href: "/products/plastic-water-jug",
  },
];

// Home hero slides
export const HERO_SLIDES = [
  {
    tag: "Smart Kitchen Organization",
    title: "Discover Premium Water Companions",
    titleItalic: [],
    bg: "/images/slide-1.webp",
  },
  {
    tag: "Hydration Essentials",
    title: "Elegant Storage Solutions for Contemporary Living",
    titleItalic: [],
    bg: "/images/slide-2.webp",
  },
  {
    tag: "Fresh Food Preservation",
    title: "Modern Serving Solutions",
    titleItalic: [],
    bg: "/images/slide-3.webp",
  },
  {
    tag: "Meal Prep Solutions",
    title: "Innovative Food Storage for Today's Households",
    titleItalic: [],
    bg: "/images/slide-4.webp",
  },
];

// About page values
export const ABOUT_VALUES = [
  {
    title: "Innovation",
    iconKey: "lightbulb",
    description:
      "At the heart of Nekza lies a relentless drive to innovate. Our philosophy 'Kuch Naya Sochte Hai' pushes us to reimagine everyday solutions that make life simpler and more enjoyable.",
  },
  {
    title: "Quality",
    iconKey: "hand-heart",
    description:
      "Excellence is non-negotiable at Nekza. We uphold the highest standards of craftsmanship and consistency, continuously raising the bar for quality in the homeware industry.",
  },
  {
    title: "Durability",
    iconKey: "shield",
    description:
      "Every Nekza product is engineered to last. From busy morning routines to daily adventures, our products are designed to withstand the rigors of real-world use.",
  },
  {
    title: "Customer Service",
    iconKey: "users",
    description:
      "Our commitment to customers extends beyond purchase. We provide responsive support and assistance, ensuring every Nekza owner enjoys a seamless experience.",
  },
];

// Terms page sections
export const TERMS_SECTIONS = [
  {
    iconKey: "file-text",
    title: "1. Introduction",
    content: `Welcome to Nekza. By accessing or using this website, you agree to be bound by these Terms and Conditions. These terms govern your use of our website, product browsing, inquiries, and any interaction you make with our platform.`,
  },
  {
    iconKey: "shield-check",
    title: "2. Product Information",
    content: `We aim to ensure that all product descriptions, visuals, and details displayed on the website are accurate and up to date. However, slight variations in color, finish, size, packaging, or product appearance may occur depending on display settings or manufacturing updates.`,
  },
  {
    iconKey: "scale",
    title: "3. Intellectual Property",
    content: `All content on this website, including text, product descriptions, branding elements, graphics, icons, and layout design, is the property of Nekza unless otherwise stated. Unauthorized use, reproduction, or redistribution of any website material is prohibited without prior written consent.`,
  },
  {
    iconKey: "truck",
    title: "4. Orders, Availability & Delivery",
    content: `Product availability may vary and is subject to stock status. Submission of an inquiry, order request, or purchase intent does not guarantee availability until confirmed. Delivery timelines, dispatch information, and fulfillment details may vary based on region, logistics, and product category.`,
  },
  {
    iconKey: "rotate-ccw",
    title: "5. Returns & Replacements",
    content: `Any return, replacement, or product concern will be handled in accordance with our return and support policy. Customers are encouraged to inspect products upon delivery and report issues within the applicable support window. Eligibility may depend on product condition and proof of purchase.`,
  },
  {
    iconKey: "alert-triangle",
    title: "6. Limitation of Liability",
    content: `Nekza shall not be held liable for any indirect, incidental, or consequential damages arising from the use of this website, product misuse, delayed availability, third-party logistics issues, or technical interruptions. Users are expected to use the website and products responsibly.`,
  },
];

// Privacy policy sections
export const PRIVACY_POLICY_SECTIONS = [
  {
    iconKey: "shield-check",
    title: "1. Introduction",
    content: `At Nekza, we value your privacy and are committed to handling your information responsibly. This Privacy Policy explains how we collect, use, store, and protect any information you share while interacting with our website, product pages, contact forms, or inquiries.`,
  },
  {
    iconKey: "database",
    title: "2. Information We Collect",
    content: `We may collect personal details such as your name, email address, phone number, delivery details, or inquiry information when you contact us, submit a form, or interact with our services. We may also collect limited non-personal information such as browser type, device data, and website usage behavior for analytics and performance purposes.`,
  },
  {
    iconKey: "eye",
    title: "3. How We Use Your Information",
    content: `The information collected may be used to respond to inquiries, process requests, improve website performance, communicate product or service information, enhance customer experience, and maintain the security and reliability of our website.`,
  },
  {
    iconKey: "lock-keyhole",
    title: "4. Data Protection & Security",
    content: `We take reasonable technical and organizational measures to protect your personal information from unauthorized access, misuse, disclosure, or loss. While no digital platform can guarantee absolute security, we make every reasonable effort to safeguard the information shared with us.`,
  },
  {
    iconKey: "cookie",
    title: "5. Cookies & Website Analytics",
    content: `Our website may use cookies or similar technologies to improve browsing experience, understand user behavior, and optimize site performance. These tools help us understand which pages are useful, how users interact with content, and how we can improve the overall website experience.`,
  },
  {
    iconKey: "mail",
    title: "6. Third-Party Sharing",
    content: `We do not sell your personal information. Information may only be shared with trusted service providers, technical partners, logistics support, or operational tools when reasonably required to run our website, fulfill requests, or support legitimate business operations.`,
  },
];

/*
========================================================
SOURCE NOTES (NON-PRODUCT REFERENCE)
========================================================

COMPANY INFO
- Company Name: Nekza Plast
- Contact Person: Ketan Desai (CEO)
- Location: Survey No. 407, Plot No. 12, Jay Balaji Industrial Area, Sanganva, Tal. Lodhika, Sanganva, Rajkot - 360035, Gujarat, India
- Phone: 07942836070
- GST No.: 24AARFN6224C1ZE
- Trust Badge Visible: TrustSEAL Verified / IndiaMART style badge
- Established: 2013

WEBSITE MAIN CATEGORY / HERO TEXT
- Heading: Insulated Water Bottles And Lunch Boxes
- Supporting Text: We are offering Insulated Water Bottles, Lunch Boxes, Insulated Water Jugs, Insulated Casseroles etc.

REVIEWS / RATINGS SECTION
- Overall Rating: 4/5
- Total Reviews: 72 Reviews
- Rating Breakdown:
  - 5 Star: 53%
  - 4 Star: 5%
  - 3 Star: 10%
  - 2 Star: 6%
  - 1 Star: 26%
- User Satisfaction:
  - Response: 61%
  - Quality: 70%
  - Delivery: 66%

VISIBLE REVIEWERS
- G. Prasad — Hyderabad, Telangana
- Parth — Bhilwara, Rajasthan
- Banki Koolwal — Jaipur, Rajasthan

PRODUCT VIDEOS SEEN
- NEKZA Insulated Plastic Water Bottle
- Plastic Water Jug
- NEKZA Unbreakable Flask - 800 ml
*/
