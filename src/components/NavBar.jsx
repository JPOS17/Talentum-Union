import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import "../styles/components/NavBar.css";

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

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar__logo-link" onClick={closeMobile}>
          <img src={logo} alt="Talentum Union" className="navbar__logo" />
        </NavLink>

        {/* Desktop links */}
        <div className="navbar__links">
          {links.map(({ to, label, hasDropdown }, index) => (
            <div key={to} className="navbar__item">
              {index !== 0 && <span className="navbar__sep">|</span>}

              {hasDropdown ? (
                <div
                  className="navbar__dropdown-wrap"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? "nav-link nav-link--active" : "nav-link"
                    }
                  >
                    {label} <span className="navbar__chevron">▾</span>
                  </NavLink>

                  {dropdownOpen && (
                    <div className="navbar__dropdown">
                      <div className="navbar__dropdown-inner">
                        {dropdownItems.map(({ to: dTo, label: dLabel }) => (
                          <NavLink
                            key={dTo}
                            to={dTo}
                            className="navbar__dropdown-item"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {dLabel}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-link--active" : "nav-link"
                  }
                >
                  {label}
                </NavLink>
              )}
            </div>
          ))}
        </div>

        <a
          href="https://calendly.com/talentumunion-info/"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta"
        >
          Book a Free Consultation
        </a>

        {/* Hamburger button (mobile only) */}
        <button
          className={`navbar__hamburger ${mobileOpen ? "navbar__hamburger--open" : ""}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`mobile-menu ${mobileOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <ul className="mobile-menu__list">
          {links.map(({ to, label, hasDropdown }) => (
            <li key={to} className="mobile-menu__item">
              {hasDropdown ? (
                <>
                  <div className="mobile-menu__link mobile-menu__link--row">
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `mobile-menu__link-label ${isActive ? "mobile-menu__link--active" : ""}`
                      }
                      onClick={closeMobile}
                    >
                      {label}
                    </NavLink>
                    <button
                      className="mobile-menu__chevron-btn"
                      onClick={() => setMobileDropdownOpen((o) => !o)}
                      aria-expanded={mobileDropdownOpen}
                    >
                      <span className={`mobile-menu__chevron ${mobileDropdownOpen ? "mobile-menu__chevron--open" : ""}`}>▾</span>
                    </button>
                  </div>
                  {mobileDropdownOpen && (
                    <ul className="mobile-menu__sub">
                      {dropdownItems.map(({ to: dTo, label: dLabel }) => (
                        <li key={dTo}>
                          <NavLink
                            to={dTo}
                            className="mobile-menu__sub-link"
                            onClick={closeMobile}
                          >
                            {dLabel}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `mobile-menu__link ${isActive ? "mobile-menu__link--active" : ""}`
                  }
                  onClick={closeMobile}
                >
                  {label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <a
          href="https://calendly.com/talentumunion-info/"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-menu__cta"
          onClick={closeMobile}
        >
          Book a Free Consultation
        </a>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div className="mobile-menu__overlay" onClick={closeMobile} />
      )}
    </>
  );
};

export default NavBar;