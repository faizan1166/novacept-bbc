"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import { BurgerIcons, UserIcon } from "../../assets/svgIocns";

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
      <nav className={styles.navbar}>
        <div className={styles.navbarTop}>
          <button
            className={styles.menuButton}
            onClick={toggleSidebar}
            aria-label="Open menu"
          >
            <BurgerIcons />
          </button>

          <Link href="/" className={styles.logo}>
            <div className={styles.logoContainer}>
              <span className={styles.logoBlock}>B</span>
              <span className={styles.logoBlock}>B</span>
              <span className={styles.logoBlock}>C</span>
            </div>
          </Link>

          <div className={styles.authButtons}>
            <button className={styles.registerBtn}>Register</button>
            <button className={styles.signInBtn}>Sign In</button>
          </div>
          <div className={styles.authDropdown}>
            <a type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <UserIcon />
            </a>
            <ul className={`dropdown-menu ${styles.dropdownNav}`}>
              <li>
                <a
                  className={`dropdown-item ${styles.dropdownNavItem}`}
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className={`dropdown-item ${styles.dropdownNavItem}`}
                  href="#"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${styles.desktopMenu} ${
            scrollY < 80 ? styles.menuVisible : styles.menuHidden
          }`}
        >
          <div className={styles.menuContainer}>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.menuLink} ${
                  pathname === item.href ? styles.menuLinkActive : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {sidebarOpen && (
        <div className={styles.overlay} onClick={toggleSidebar}></div>
      )}
      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}
      >
        <button
          className={styles.closeButton}
          onClick={toggleSidebar}
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search news, topics and more"
          />
          <button className={styles.searchButton}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <nav className={styles.sidebarNav}>
          {menuItems.map((item) => (
            <div key={item.name} className={styles.sidebarMenuItem}>
              <div className={styles.sidebarMenuItemHeader}>
                <Link
                  href={item.href}
                  className={`${styles.sidebarMenuLink} ${
                    pathname === item.href ? styles.sidebarActive : ""
                  }`}
                  onClick={!item.hasSubmenu ? toggleSidebar : undefined}
                >
                  {item.name}
                </Link>
                {item.hasSubmenu && (
                  <button
                    className={styles.expandButton}
                    onClick={() => toggleSubmenu(item.name)}
                    aria-label={`Expand ${item.name}`}
                  >
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="currentColor"
                      className={
                        expandedMenu === item.name ? styles.chevronRotated : ""
                      }
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </button>
                )}
              </div>
              {item.hasSubmenu && expandedMenu === item.name && (
                <div className={styles.submenu}>
                  <Link
                    href={`${item.href}/subcategory1`}
                    className={styles.submenuLink}
                  >
                    Subcategory 1
                  </Link>
                  <Link
                    href={`${item.href}/subcategory2`}
                    className={styles.submenuLink}
                  >
                    Subcategory 2
                  </Link>
                  <Link
                    href={`${item.href}/subcategory3`}
                    className={styles.submenuLink}
                  >
                    Subcategory 3
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
