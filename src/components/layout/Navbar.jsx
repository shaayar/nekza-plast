import { useState } from "react";
import { Link } from "react-router-dom";
import { navbarItems } from "../../data/Data";
import {
  X,
  Search,
  User,
  ChevronDown,
} from "lucide-react";
import CartIcon from "../CartIcon.jsx";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [desktopDropdown, setDesktopDropdown] = useState(null);

  const navItems = navbarItems;

  const toggleMobileDropdown = (index) => {
    setMobileDropdown(mobileDropdown === index ? null : index);
  };

  return (
    <header className="bg-black text-white border-b border-white/10 sticky top-0 z-50">
      {/* TOP ROW */}
      <div className="relative flex items-center justify-between px-4 md:px-10 py-3 border-b border-white/20">
        {/* LEFT */}
        <div className="flex items-center gap-5 md:gap-6 lg:hidden z-10">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <i class="ri-menu-4-fill text-2xl"></i>}
          </button>

          <Link to="/account">
            <User size={22} />
          </Link>
        </div>


        {/* Logo */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-4xl font-light tracking-[0.2em] whitespace-nowrap lg:static lg:translate-x-0"
        >
          <img src="/images/logo.png" className="h-12 md:h-10" alt="Logo" />
        </Link>

        {/* DESKTOP SEARCH */}
        <div className="hidden lg:flex items-center bg-[#111] border border-white/20 rounded-xl px-3 h-9 w-96">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="What can we help you find?"
            className="bg-transparent outline-none w-full ml-3 text-sm text-white placeholder:text-gray-400"
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="lg:hidden">
            <Search size={22} />
          </button>

          <Link to="/account" className="hidden lg:block">
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
                      <Link key={imgIndex} to={img.path}>
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
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 px-4 py-4 space-y-4">
          {/* Mobile Search */}
          <div className="flex items-center bg-[#111] border border-white/10 rounded-xl px-4 h-12">
            <Search size={18} className="text-gray-400" />
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
                  className={`text-[16px] ${item.featured ? "text-primary" : "text-white hover:text-primary"
                    }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>

                {item.dropdown && (
                  <button onClick={() => toggleMobileDropdown(index)}>
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
