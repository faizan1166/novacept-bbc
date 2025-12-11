"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const [languageOpen, setLanguageOpen] = useState(false);

  const navigationLinks = [
    "Home",
    "News",
    "Sport",
    "Business",
    "Innovation",
    "Culture",
    "Arts",
    "Travel",
    "Earth",
    "Audio",
    "Video",
    "Live",
    "Weather",
    "BBC Shop",
    "BritBox",
  ];

  const footerLinks = [
    "Terms of Use",
    "Subscription Terms",
    "About the BBC",
    "Privacy Policy",
    "Cookies",
    "Accessibility Help",
    "Contact the BBC",
    "Advertise with us",
    "Do not share or sell my info",
    "BBC.com Help & FAQs",
    "Content Index",
  ];

  const socialLinks = [
    { name: "Twitter", icon: "𝕏", url: "#" },
    { name: "Facebook", icon: "f", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "TikTok", icon: "♪", url: "#" },
    { name: "LinkedIn", icon: "in", url: "#" },
    { name: "YouTube", icon: "▶", url: "#" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <span className={styles.logoBlock}>B</span>
            <span className={styles.logoBlock}>B</span>
            <span className={styles.logoBlock}>C</span>
          </div>
        </div>

        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navigationLinks.map((link) => (
              <li key={link}>
                <Link href="#" className={styles.navLink}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navigationLinks.map((link) => (
              <li key={link}>
                <Link href="#" className={styles.mobileNavLink}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.languageSelector}>
          <button
            className={styles.languageButton}
            onClick={() => setLanguageOpen(!languageOpen)}
          >
            BBC in other languages
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="currentColor"
              className={languageOpen ? styles.chevronRotated : ""}
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </button>
          {languageOpen && (
            <div className={styles.languageDropdown}>
              <Link href="#" className={styles.languageLink}>
                العربية
              </Link>
              <Link href="#" className={styles.languageLink}>
                中文
              </Link>
              <Link href="#" className={styles.languageLink}>
                Español
              </Link>
              <Link href="#" className={styles.languageLink}>
                Français
              </Link>
              <Link href="#" className={styles.languageLink}>
                Русский
              </Link>
            </div>
          )}
        </div>

        <div className={styles.socialSection}>
          <h3 className={styles.socialTitle}>Follow BBC on:</h3>
          <div className={styles.socialLinks}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className={styles.socialLink}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerLinks}>
          {footerLinks.map((link, index) => (
            <span key={link}>
              <Link href="#" className={styles.footerLink}>
                {link}
              </Link>
              {/* {index < footerLinks.length - 1 && <span className={styles.separator}></span>} */}
            </span>
          ))}
        </div>

        <div className={styles.copyright}>
          <p>
            Copyright 2025 BBC. All rights reserved. The BBC is not responsible
            for the content of external sites.{" "}
            <Link href="#" className={styles.externalLink}>
              Read about our approach to external linking.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
