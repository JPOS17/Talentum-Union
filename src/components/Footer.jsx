import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/components/Footer.css";

const dropdownItems = [
  { to: "/finance-accounting", label: "Finance & Accounting" },
  {
    to: "/virtual-assistants-customer-support",
    label: "Virtual Assistants & Customer Support",
  },
  { to: "/marketing-sales", label: "Marketing & Sales" },
  { to: "/data-IT-engineering", label: "Data, IT and Engineering" },
];

const links = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About us" },
  { to: "/search-talent", label: "Search Talent", hasDropdown: true },
  { to: "/job-board", label: "Job Board" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact Us" },
];

const Footer = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer__top">

        {/* FOLLOW US */}
        <div className="footer__col">
          <h4 className="footer__heading">FOLLOW US</h4>
          <a
            href="https://www.linkedin.com/company/talentum-union-llc/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="20"
              height="20"
            >
              <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 1 1 0-3.96 1.98 1.98 0 0 1 0 3.96zm1.707 13.019H3.63V9h3.414v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* USEFUL LINKS */}
        <div className="footer__col">
          <h4 className="footer__heading">USEFUL LINKS</h4>
          <ul className="footer__links">
            {links.map(({ to, label, hasDropdown }) => (
              <li key={to} className="footer__link-item">
                {hasDropdown ? (
                  <div className="footer__dropdown-wrap">
                    <button
                      className="footer__link footer__link--btn"
                      onClick={() => setDropdownOpen((o) => !o)}
                      aria-expanded={dropdownOpen}
                    >
                      {label}{" "}
                      <span
                        className={`footer__chevron ${dropdownOpen ? "footer__chevron--open" : ""}`}
                      >
                        ▾
                      </span>
                    </button>
                    {dropdownOpen && (
                      <ul className="footer__dropdown">
                        {dropdownItems.map(({ to: dTo, label: dLabel }) => (
                          <li key={dTo}>
                            <NavLink
                              to={dTo}
                              className="footer__dropdown-item"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {dLabel}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink to={to} className="footer__link">
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* CONTACT US */}
        <div className="footer__col">
          <h4 className="footer__heading">CONTACT US</h4>
          <a href="mailto:info@talentumunion.com" className="footer__email">
            info@talentumunion.com
          </a>
        </div>

      </div>

      {/* Divider */}
      <div className="footer__divider" />

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © 2026 All Rights Reserved | Talentum Union
        </p>
      </div>
    </footer>
  );
};

export default Footer;
