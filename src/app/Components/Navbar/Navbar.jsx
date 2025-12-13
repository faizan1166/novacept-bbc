"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BurgerIcons, UserIcon } from "../../../../public/assets/svgIocns";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);

  const menuItems = [
    { name: "Home", href: "#", hasSubmenu: false },
    { name: "News", href: "/", hasSubmenu: true },
    { name: "Sport", href: "#", hasSubmenu: false },
    { name: "Business", href: "#", hasSubmenu: true },
    { name: "Innovation", href: "#", hasSubmenu: true },
    { name: "Culture", href: "#", hasSubmenu: true },
    { name: "Arts", href: "#", hasSubmenu: true },
    { name: "Travel", href: "#", hasSubmenu: true },
    { name: "Earth", href: "#", hasSubmenu: true },
    { name: "Audio", href: "#", hasSubmenu: true },
    { name: "Video", href: "#", hasSubmenu: false },
    { name: "Live", href: "#", hasSubmenu: false },
  ];

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setExpandedMenu(null);
  };

  const toggleSubmenu = (menuName) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  return (
    <>
      <nav className="navbar pb-0">
        <div className="navbar-top d-flex align-items-center justify-content-between w-100">
          <button
            className="menu-button"
            onClick={toggleSidebar}
            aria-label="Open menu"
          >
            <BurgerIcons />
          </button>

          <Link href="/" className="logo">
            <div className="logo-container">
              <span className="logo-block">B</span>
              <span className="logo-block">B</span>
              <span className="logo-block">C</span>
            </div>
          </Link>

          <div className="auth-buttons">
            <button className="register-btn">Register</button>
            <button className="sign-in-btn">Sign In</button>
          </div>
          <div className="auth-dropdown position-relative dropdown">
            <button
              type="button"
              className="btn-user"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <UserIcon />
            </button>
            <ul className="dropdown-menu dropdown-nav ">
              <li>
                <a className="dropdown-item dropdown-nav-item" href="#">
                  Sign In
                </a>
              </li>
              <li>
                <a className="dropdown-item dropdown-nav-item" href="#">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`desktop-menu w-100 ${
            scrollY <= 80 ? "menu-visible" : "menu-hidden"
          }`}
        >
          <div className="menu-container">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`menu-link ${
                  pathname === item.href || pathname.includes(item.href)
                    ? "menu-link-active"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <button
          className="close-button"
          onClick={toggleSidebar}
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search news, topics and more"
          />
          <button className="search-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <div key={item.name} className="sidebar-menu-item">
              <div className="sidebar-menu-item-header">
                <Link
                  href={item.href}
                  className={`sidebar-menu-link ${
                    pathname === item.href || pathname.includes(item.href)
                      ? "sidebar-active"
                      : ""
                  }`}
                  onClick={!item.hasSubmenu ? toggleSidebar : undefined}
                >
                  {item.name}
                </Link>
                {item.hasSubmenu && (
                  <button
                    className="expand-button"
                    onClick={() => toggleSubmenu(item.name)}
                    aria-label={`Expand ${item.name}`}
                  >
                    <i
                      className={`fa-solid fa-chevron-down ${
                        expandedMenu === item.name ? "chevron-rotated" : ""
                      }`}
                    ></i>
                  </button>
                )}
              </div>
              {item.hasSubmenu && expandedMenu === item.name && (
                <div className="submenu">
                  <Link
                    href={`${item.href}/subcategory1`}
                    className="submenu-link"
                  >
                    {item.name} Subcategory 1
                  </Link>
                  <Link
                    href={`${item.href}/subcategory2`}
                    className="submenu-link"
                  >
                    {item.name} Subcategory 2
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
