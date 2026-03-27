import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  User,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [desktopDropdown, setDesktopDropdown] = useState(null);

  const navItems = [
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
              { label: "Complete Kitchen Set", path: "/products/the-stainless-sets/curated-kitchen", tag: "BEST VALUE" },
              { label: "Small Spaces Set", path: "/products/small-spaces-set/5-piece-stainless" },
              { label: "10-Piece Stainless Set", path: "/products/the-stainless-sets/10-piece", tag: "MOST POPULAR" },
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
            image:
              "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
          },
          {
            title: "Antique Brass Set",
            path: "/products/le-stainless-sets/10-piece-antique-brass-finish",
            image:
              "https://images.unsplash.com/photo-1584990347449-a1b0b6c1f2b7?q=80&w=1200&auto=format&fit=crop",
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
            image:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
          },
          {
            title: "Shop - Enameled Cast Iron",
            path: "/collections/enameled-cast-iron",
            image:
              "https://images.unsplash.com/photo-1583778176476-4a8b02a64c54?q=80&w=1200&auto=format&fit=crop",
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

  const toggleMobileDropdown = (index) => {
    setMobileDropdown(mobileDropdown === index ? null : index);
  };

  return (
    <header className="bg-white text-black border-b border-black/20 sticky top-0 z-50">
      {/* TOP ROW */}
      <div className="flex items-center justify-between px-4 md:px-8 py-5 border-b border-black/20">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-[42px] font-light tracking-[0.22em] whitespace-nowrap"
          >
          <img src="/images/logo.png" className="h-9 md:h-10" alt="Logo" />
          </Link>
        </div>

        {/* DESKTOP SEARCH */}
        <div className="hidden lg:flex items-center bg-[#f1f0ef] rounded-xl px-4 h-[52px] w-[520px]">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="What can we help you find?"
            className="bg-transparent outline-none w-full ml-3 text-sm placeholder:text-gray-500"
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* <Link to="/about" className="hidden md:flex items-center gap-1 text-[15px]">
            Learn <ChevronDown size={15} />
          </Link> */}

          <button className="lg:hidden">
            <Search size={22} />
          </button>

          <Link to="/account" className="hidden sm:block">
            <User size={22} />
          </Link>

          <Link to="/cart">
            <ShoppingCart size={24} />
          </Link>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav className="hidden lg:flex items-center gap-10 px-8 h-[62px] relative">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="h-full flex items-center"
            onMouseEnter={() => setDesktopDropdown(index)}
            onMouseLeave={() => setDesktopDropdown(null)}
          >
            <Link
              to={item.path}
              className={`flex items-center gap-1 text-[15px] transition ${
                item.featured ? "text-red-500" : "hover:text-gray-600"
              }`}
            >
              {item.title}
              {item.dropdown && <ChevronDown size={15} />}
            </Link>

            {/* DESKTOP MEGA MENU */}
            {item.dropdown && desktopDropdown === index && (
              <div className="absolute left-0 top-full w-full bg-white border-t border-black/10 shadow-md">
                <div className="grid grid-cols-[1fr_1fr_1fr_1.4fr] gap-12 px-8 py-7">
                  {/* Text Columns */}
                  {item.dropdown.columns.map((column, colIndex) => (
                    <div key={colIndex} className="space-y-5">
                      {column.title && (
                        <p className="text-sm uppercase tracking-[0.12em] text-gray-500">
                          {column.title}
                        </p>
                      )}

                      {column.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          to={link.path}
                          className="flex items-center gap-3 text-[17px] hover:text-gray-600 transition"
                        >
                          <span>{link.label}</span>
                          {link.tag && (
                            <span className="text-[11px] px-3 py-1 rounded bg-gray-200 text-gray-700 tracking-[0.12em]">
                              {link.tag}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  ))}

                  {/* Image Cards */}
                  <div className="grid grid-cols-2 gap-6">
                    {item.dropdown.images.map((img, imgIndex) => (
                      <Link key={imgIndex} to={img.path}>
                        <img
                          src={img.image}
                          alt={img.title}
                          className="rounded-2xl h-[230px] w-full object-cover"
                        />
                        <p className="mt-3 text-[18px]">{img.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-black/10 px-4 py-4 space-y-4">
          {/* Mobile Search */}
          <div className="flex items-center bg-[#f1f0ef] rounded-xl px-4 h-[48px]">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full ml-3 text-sm placeholder:text-gray-500"
            />
          </div>

          {/* Mobile Links */}
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-black/10 pb-3">
              <div className="flex items-center justify-between">
                <Link
                  to={item.path}
                  className={`text-[16px] ${
                    item.featured ? "text-red-500" : "text-black"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>

                {item.dropdown && (
                  <button onClick={() => toggleMobileDropdown(index)}>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        mobileDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Mobile Dropdown */}
              {item.dropdown && mobileDropdown === index && (
                <div className="mt-3 ml-4 space-y-3">
                  {item.dropdown.columns.map((column, colIndex) => (
                    <div key={colIndex}>
                      {column.title && (
                        <p className="text-xs uppercase tracking-[0.12em] text-gray-500 mb-2">
                          {column.title}
                        </p>
                      )}
                      <div className="space-y-2">
                        {column.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            to={link.path}
                            className="block text-sm text-gray-700 hover:text-black"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-2 space-y-3">
            <Link
              to="/about"
              className="block text-black"
              onClick={() => setMobileOpen(false)}
            >
              Learn
            </Link>
            <Link
              to="/contact"
              className="block text-black"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;