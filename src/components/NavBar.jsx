import { useState } from "react";
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

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo-link">
        <img src={logo} alt="Talentum Union" className="navbar__logo" />
      </NavLink>

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
    </nav>
  );
};

export default NavBar;
