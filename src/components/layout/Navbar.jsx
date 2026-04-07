import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ALL_PRODUCTS, navbarItems } from "../../data/Data";
import {
  X,
  Menu,
  Search,
  User,
  ChevronDown,
} from "lucide-react";
import CartIcon from "../CartIcon.jsx";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = navbarItems;
  const searchTerm = searchQuery.trim().toLowerCase();

  const searchSuggestions = useMemo(() => {
    if (!searchTerm) return [];

    return ALL_PRODUCTS
      .filter((product) => {
        const title = (product.title || "").toLowerCase();
        const category = (product.category || "").toLowerCase();
        return title.includes(searchTerm) || category.includes(searchTerm);
      })
      .slice(0, 6);
  }, [searchTerm]);

  const toggleMobileDropdown = (index) => {
    setMobileDropdown(mobileDropdown === index ? null : index);
  };

  return (
    <header className="bg-black text-white border-b border-white/10 sticky top-0 z-50">
      {/* TOP ROW */}
      <div className="relative flex items-center justify-between px-4 md:px-10 py-3 border-b border-white/20">
        {/* LEFT */}
        <div className="flex items-center lg:hidden z-10">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="pressable transition-colors"
            data-cursor="Open"
          >
            {mobileOpen ? <X size={28} /> : <i className="ri-menu-4-fill text-2xl"></i>}
          </button>

        </div>


        {/* Logo */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-4xl font-light tracking-[0.2em] whitespace-nowrap lg:static lg:translate-x-0"
          data-cursor="Open"
        >
          <img src="/images/logo.webp" className="h-10" alt="Logo" />
        </Link>

        {/* DESKTOP SEARCH */}
        <div className="relative hidden lg:block z-30">
          <div className="flex items-center bg-[#111] border border-white/20 rounded-xl px-3 h-9 w-96">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What can we help you find?"
              className="bg-transparent outline-none w-full ml-3 text-sm text-white placeholder:text-gray-400"
            />
          </div>

          {searchTerm && (
            <div className="absolute top-11 left-0 w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">
              {searchSuggestions.length > 0 ? (
                <ul className="py-2">
                  {searchSuggestions.map((product) => (
                    <li key={product.id}>
                      <Link
                        to={product.href}
                        onClick={() => setSearchQuery("")}
                        data-cursor="Open"
                        className="block px-3 py-2 text-sm text-white transition-colors hover:bg-white/10"
                      >
                        <span className="block">{product.title}</span>
                        <span className="block text-xs text-gray-400 capitalize">
                          {product.category?.replace(/-/g, " ")}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-3 py-2 text-sm text-gray-400">No products found.</p>
              )}
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/account" className="pressable" data-cursor="Open">
            <User size={22} />
          </Link>

          <CartIcon />
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav className="hidden lg:flex items-center gap-10 px-10 h-12 relative">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="h-full flex items-center"
            onMouseEnter={() => setDesktopDropdown(index)}
            onMouseLeave={() => setDesktopDropdown(null)}
          >
            <Link
              to={item.path}
              className={`flex items-center gap-1 text-[15px] transition ${item.featured ? "text-primary" : "text-white hover:text-primary"
                }`}
              data-cursor="Open"
            >
              {item.title}
              {item.dropdown && <ChevronDown size={15} />}
            </Link>

            {/* DESKTOP MEGA MENU */}
            {item.dropdown && desktopDropdown === index && (
              <div className="absolute left-0 top-full w-full bg-black border-t border-white/10 shadow-xl">
                <div className="grid grid-cols-[1fr_1fr_1fr_1.4fr] gap-12 px-8 py-7">
                  {/* Text Columns */}
                  {item.dropdown.columns.map((column, colIndex) => (
                    <div key={colIndex} className="space-y-5">
                      {column.title && (
                        <p className="text-sm uppercase tracking-[0.12em] text-gray-400">
                          {column.title}
                        </p>
                      )}

                      {column.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          to={link.path}
                          className="flex items-center gap-3 text-[17px] text-white hover:text-primary transition"
                          data-cursor="Open"
                        >
                          <span>{link.label}</span>
                          {link.tag && (
                            <span className="text-[11px] px-3 py-1 rounded bg-white/10 text-gray-300 tracking-[0.12em]">
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
                      <Link key={imgIndex} to={img.path} data-cursor="Open">
                        <img
                          src={img.image}
                          alt={img.title}
                          className="rounded-2xl h-57.5 w-full object-cover"
                        />
                        <p className="mt-3 text-[18px] text-white">{img.title}</p>
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
      <div
        className={`lg:hidden overflow-hidden bg-black border-t border-white/10 px-4 space-y-4 transition-[max-height,opacity,padding] duration-200 ${mobileOpen ? "max-h-[80vh] opacity-100 py-4" : "max-h-0 opacity-0 py-0 pointer-events-none"
          }`}
      >
        {/* Mobile Search */}
        <div className="flex items-center bg-[#111] border border-white/10 rounded-xl px-4 h-12">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="bg-transparent outline-none w-full ml-3 text-sm text-white placeholder:text-gray-400"
          />
        </div>

        {searchTerm && (
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111]">
            {searchSuggestions.length > 0 ? (
              <ul className="py-2">
                {searchSuggestions.map((product) => (
                  <li key={product.id}>
                    <Link
                      to={product.href}
                      className="block px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
                      onClick={() => {
                        setSearchQuery("");
                        setMobileOpen(false);
                      }}
                      data-cursor="Open"
                    >
                      <span className="block">{product.title}</span>
                      <span className="block text-xs text-gray-400 capitalize">
                        {product.category?.replace(/-/g, " ")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-4 py-2 text-sm text-gray-400">No products found.</p>
            )}
          </div>
        )}

        {/* Mobile Links */}
        {navItems.map((item, index) => (
          <div key={index} className="border-b border-white/10 pb-3">
            <div className="flex items-center justify-between">
              <Link
                to={item.path}
                className={`pressable text-[16px] ${item.featured ? "text-primary" : "text-white hover:text-primary"
                  }`}
                onClick={() => setMobileOpen(false)}
                data-cursor="Open"
              >
                {item.title}
              </Link>

              {item.dropdown && (
                <button className="pressable transition-transform" onClick={() => toggleMobileDropdown(index)} data-cursor="Open">
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mobileDropdown === index ? "rotate-180" : ""
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
                      <p className="text-xs uppercase tracking-[0.12em] text-gray-400 mb-2">
                        {column.title}
                      </p>
                    )}
                    <div className="space-y-2">
                      {column.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          to={link.path}
                          className="block text-sm text-gray-300 hover:text-primary"
                          onClick={() => setMobileOpen(false)}
                          data-cursor="Open"
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

        <hr />

        <div className="pt-2 space-y-3 flex flex-col gap-3">
          <Link
            to="/about"
            className="pressable block text-white"
            onClick={() => setMobileOpen(false)}
            data-cursor="Open"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="pressable block text-white"
            onClick={() => setMobileOpen(false)}
            data-cursor="Open"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
