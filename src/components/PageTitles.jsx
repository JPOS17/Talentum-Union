import { useEffect } from "react";
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

  useEffect(() => {
    document.title = pageTitles[pathname] ?? "Talentum Union";
  }, [pathname]);

  return null;
};

export default PageTitle;
