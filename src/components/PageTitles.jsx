import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/": "Talentum Union",
  "/about-us": "About Us",
  "/search-talent": "Search Talent",
  "/job-board": "Job Board",
  "/faqs": "FAQs",
  "/contact": "Contact Us",
  "/finance-accounting": "Finance & Accounting",
  "/virtual-assistants-customer-support":
    "Virtual Assistants & Customer Support",
  "/marketing-sales": "Marketing & Sales",
  "/data-IT-engineering": "Data, IT & Engineering",
  "/administrative-assistant": "Administrative Assistant",
  "/audit-assurance-manager": "Audit & Assurance Manager",
  "/remote-copywriter": "Remote Copywriter",
  "/executive-operations-specialist": "Executive Operations Specialist",
  "/staff-accountant": "Staff Accountant",
};

const PageTitle = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      document.title = "Loading...";
    }

    const timeout = setTimeout(() => {
      document.title = pageTitles[pathname] ?? "Talentum Union";
      prevPathname.current = pathname;
    }, 200);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default PageTitle;
