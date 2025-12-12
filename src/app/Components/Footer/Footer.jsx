"use client";
import { useState } from "react";
import Link from "next/link";
import "./Footer.css";

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
    {
      name: "Twitter",
      icon: <i className="fa-brands fa-x-twitter"></i>,
      url: "#",
    },
    {
      name: "Facebook",
      icon: <i className="fa-brands fa-facebook-f"></i>,
      url: "#",
    },
    {
      name: "Instagram",
      icon: <i className="fa-brands fa-instagram"></i>,
      url: "#",
    },
    { name: "TikTok", icon: <i className="fa-brands fa-tiktok"></i>, url: "#" },
    {
      name: "LinkedIn",
      icon: <i className="fa-brands fa-linkedin-in"></i>,
      url: "#",
    },
    {
      name: "YouTube",
      icon: <i className="fa-brands fa-youtube"></i>,
      url: "#",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-section">
          <div className="logo-container">
            <span className="logo-block">B</span>
            <span className="logo-block">B</span>
            <span className="logo-block">C</span>
          </div>
        </div>

        <nav className="desktop-nav">
          <ul className="nav-list">
            {navigationLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="nav-link">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navigationLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="mobile-nav-link">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="language-selector">
          <button
            className="language-button"
            onClick={() => setLanguageOpen(!languageOpen)}
          >
            BBC in other languages
            <i
              className={`fa-solid fa-chevron-down ${
                languageOpen ? "chevron-rotated" : ""
              }`}
            ></i>
          </button>
          {languageOpen && (
            <div className="language-dropdown">
              <Link href="#" className="language-link">
                العربية
              </Link>
              <Link href="#" className="language-link">
                中文
              </Link>
              <Link href="#" className="language-link">
                Español
              </Link>
              <Link href="#" className="language-link">
                Français
              </Link>
              <Link href="#" className="language-link">
                Русский
              </Link>
            </div>
          )}
        </div>

        <div className="social-section">
          <h3 className="social-title">Follow BBC on:</h3>
          <div className="social-links d-flex gap-3 align-items-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="social-link"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          {footerLinks.map((link) => (
            <span key={link}>
              <Link href="#" className="footer-link">
                {link}
              </Link>
            </span>
          ))}
        </div>

        <div className="copyright">
          <p>
            Copyright 2025 BBC. All rights reserved. The BBC is not responsible
            for the content of external sites.{" "}
            <Link href="#" className="external-link">
              Read about our approach to external linking.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
