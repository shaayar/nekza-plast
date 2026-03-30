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
            { label: "Steel Bottle", path: "/collections/insulated-water-bottle" },
          ],
        },
        {
          title: "CATEGORIES",
          links: [
            { label: "Plastic Water Bottle", path: "/collections/water-bottle" },
            { label: "Insulated Water Bottle", path: "/collections/insulated-water-bottle" },
            { label: "Kids Bottle", path: "/collections/kidzbee" },
            { label: "Steel Bottle", path: "/collections/insulated-water-bottle" },
            { label: "UBN Flask", path: "/collections/insulated-water-bottle" },
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
          image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Kids Water Bottle",
          path: "/collections/kidzbee",
          image: "https://images.unsplash.com/photo-1584990347449-a1b0b6c1f2b7?q=80&w=1200&auto=format&fit=crop",
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
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Kids Lunch Box",
          path: "/collections/kidzbee",
          image: "https://images.unsplash.com/photo-1583778176476-4a8b02a64c54?q=80&w=1200&auto=format&fit=crop",
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
  {
    title: "Accessories",
    path: "/collections/kitchen",
  },
];

export const footerSections = [
  {
    heading: "Support",
    links: [
      { label: "About Us", href: "/about", external: true },
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
      { label: "UBN Flask", href: "/collections/insulated-water-bottle" },
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
    img: "/images/products/stainless-steel-bottle-2.webp",
    hoverImage: "/images/products/stainless-steel-bottle.webp",
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
    img: "/images/products/kids-water-bottle-banner.webp",
    hoverImage: "/images/products/kids-water-bottle-2.webp",
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
    price: null,
    mrp: null,
    off: null,
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
    price: null,
    mrp: null,
    off: null,
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-bottle-2.webp",
    hoverImage: "/images/p-bottle-1.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-kids-bottle-1.webp",
    hoverImage: "/images/p-kids-bottle-2.webp",
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
    price: null,
    mrp: null,
    off: null,
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
    price: null,
    mrp: null,
    off: null,
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
    img: "/images/p-bottle-1.webp",
    hoverImage: "/images/p-bottle-2.webp",
    images: [],
    href: "/products/plastic-ubn-flask-600ml",
    category: "flask",
    vendor: "Nekza",
    tags: ["bestseller", "popular", "general"],
    collections: ["insulated-water-bottle"],
  },
  {
    id: "plastic-ubn-flask-800ml",
    title: "Plastic UBN Flask - 800ml",
    slug: "plastic-ubn-flask-800ml",
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-bottle-2.webp",
    hoverImage: "/images/p-bottle-1.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p2-bottle-1.webp",
    hoverImage: "/images/p2-bottle-2.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p2-bottle-2.webp",
    hoverImage: "/images/p2-bottle-3.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-bottle-1.webp",
    hoverImage: "/images/p2-bottle-1.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p2-bottle-3.webp",
    hoverImage: "/images/p2-bottle-1.webp",
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
    img: "/images/p-jug-1.webp",
    hoverImage: "/images/p-jug-2.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-jug-2.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-jug-1.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-jug-2.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-jug-1.webp",
    hoverImage: "/images/p-jug-2.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-jug-2.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-jug-1.webp",
    hoverImage: "/images/p-jug-2.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-jug-2.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-tiffin-2.webp",
    hoverImage: "/images/p-tiffin-1.webp",
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
    price: null,
    mrp: null,
    off: null,
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
    img: "/images/p-tiffin-2.webp",
    hoverImage: "/images/p-tiffin-1.webp",
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
    price: null,
    mrp: null,
    off: null,
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-tiffin-2.webp",
    hoverImage: "/images/p-tiffin-1.webp",
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
    price: null,
    mrp: null,
    off: null,
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-tiffin-2.webp",
    hoverImage: "/images/p-tiffin-1.webp",
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
    price: null,
    mrp: null,
    off: null,
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
    img: "/images/p-tiffin-2.webp",
    hoverImage: "/images/p-tiffin-1.webp",
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
    price: null,
    mrp: null,
    off: null,
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-casserol-1.webp",
    hoverImage: "/images/p-casserol-2.webp",
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
    price: null,
    mrp: null,
    off: null,
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-casserol-1.webp",
    hoverImage: "/images/p-casserol-2.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-combo-2.webp",
    hoverImage: "/images/p-combo-1.webp",
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
    price: null,
    mrp: null,
    off: null,
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
    price: null,
    mrp: null,
    off: null,
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
    price: null,
    mrp: null,
    off: null,
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
    price: null,
    mrp: null,
    off: null,
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
    img: "/images/p2-bottle-1.webp",
    hoverImage: "/images/p2-bottle-2.webp",
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
    price: null,
    mrp: null,
    off: null,
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-kids-bottle-1.webp",
    hoverImage: "/images/p-kids-bottle-2.webp",
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
    price: null,
    mrp: null,
    off: null,
    img: "/images/p-tiffin-2.webp",
    hoverImage: "/images/p-tiffin-1.webp",
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
    price: null,
    mrp: null,
    off: null,
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
        }
      ],
      [
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

    const mappedTag = labelToTag[collection];
    if (mappedTag) return tags.includes(mappedTag);

    return collections.includes(collection) || p?.category === collection;
  });

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
