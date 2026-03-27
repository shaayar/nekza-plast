import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { title: "Shop All", path: "/products" },
    {
      title: "Save With Sets",
      path: "/collections/sets",
      dropdown: ["Cookware Sets", "Knife Sets", "Bakeware Sets"],
    },
    {
      title: "Cookware",
      path: "/collections/cookware",
      dropdown: ["Frying Pans", "Saucepans", "Dutch Ovens"],
    },
    {
      title: "Tabletop",
      path: "/collections/tabletop",
      dropdown: ["Plates", "Bowls", "Glasses"],
    },
    {
      title: "Knives",
      path: "/collections/knives",
      dropdown: ["Chef Knife", "Paring Knife", "Knife Sets"],
    },
    { title: "Bakeware", path: "/collections/bakeware" },
    { title: "Accessories", path: "/collections/accessories" },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="bg-black text-white border-b border-white/10 sticky top-0 z-50">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-white/20 ">
        {/* LEFT */}
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-5 md:gap-6 lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <i class="ri-close-large-fill text-xl"></i> : <i class="ri-menu-4-fill text-xl"></i>}
          </button>
          <Link to="/account">
            <i class="ri-user-line text-xl"></i>
          </Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-4xl font-light tracking-[0.2em] whitespace-nowrap"
        >
          <img src="/images/logo.png" className="h-9 md:h-10" alt="Logo" />
        </Link>

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center bg-[#111] border border-white/10 rounded-xl px-4 h-12.5 w-125">
          <i class="ri-search-line text-xl"></i>
          <input
            type="text"
            placeholder="What can we help you find?"
            className="bg-transparent outline-none w-full ml-3 text-sm text-white placeholder:text-gray-400"
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5 md:gap-6">
          <Link to="/about" className="hidden md:flex items-center gap-1 text-sm">
            Learn <i class="ri-arrow-drop-down-line text-xl"></i>
          </Link>

          <button className="lg:hidden">
            <i class="ri-search-line text-xl"></i>
          </button>

          <Link to="/cart">
            <i class="ri-shopping-bag-4-line text-xl"></i>
          </Link>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav className="hidden lg:flex items-center gap-10 px-8 h-15">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative group h-full flex items-center"
          >
            <Link
              to={item.path}
              className={`flex items-center gap-1 text-[15px] transition ${item.title === "Save With Sets"
                  ? "text-red-400"
                  : "text-white hover:text-gray-300"
                }`}
            >
              {item.title}
              {item.dropdown && <i class="ri-arrow-drop-down-line text-xl"></i>}
            </Link>

            {/* Simple Desktop Dropdown */}
            {item.dropdown && (
              <div className="absolute left-0 top-full hidden group-hover:block bg-black border border-white/10 rounded-lg shadow-xl min-w-[220px] py-3">
                {item.dropdown.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                  >
                    {subItem}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 px-4 py-4 space-y-4">
          {/* Mobile Search */}
          <div className="flex items-center bg-[#111] border border-white/10 rounded-xl px-4 h-[48px]">
            <i class="ri-search-line text-xl"></i>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full ml-3 text-sm text-white placeholder:text-gray-400"
            />
          </div>

          {/* Mobile Links */}
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-white/10 pb-3">
              <div className="flex items-center justify-between">
                <Link
                  to={item.path}
                  className={`text-[16px] ${item.title === "Save With Sets"
                      ? "text-red-400"
                      : "text-white"
                    }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>

                {item.dropdown && (
                  <button onClick={() => toggleDropdown(index)}>
                    <i
                      className={`ri-arrow-drop-down-line text-[18px] transition-transform ${openDropdown === index ? "rotate-180" : ""
                        }`}
                    ></i>
                  </button>
                )}
              </div>

              {/* Mobile Dropdown */}
              {item.dropdown && openDropdown === index && (
                <div className="mt-3 ml-4 space-y-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={item.path}
                      className="block text-sm text-gray-300 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Extra Mobile Links */}
          <div className="pt-2 space-y-3">
            <Link
              to="/about"
              className="block text-white"
              onClick={() => setMobileOpen(false)}
            >
              Learn
            </Link>
            <Link
              to="/contact"
              className="block text-white"
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
