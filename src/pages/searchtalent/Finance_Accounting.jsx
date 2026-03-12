import { useNavigate } from "react-router-dom";
import { DollarSign, Globe, Users, Zap } from "lucide-react";
import "../../styles/SearchTalentShared.css";

const heroImg =
  "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80";

const benefits = [
  {
    icon: <DollarSign size={36} strokeWidth={1.5} />,
    title: "Savings",
    body: "Save 30–70% on salaries by hiring top-tier, cost-effective finance & accounting talent from Latin America.",
  },
  {
    icon: <Globe size={36} strokeWidth={1.5} />,
    title: "Time Zones",
    body: "We provide coverage across the time zones you require, ensuring smooth and efficient collaboration with your team.",
  },
  {
    icon: <Users size={36} strokeWidth={1.5} />,
    title: "Culturally Aligned",
    body: "We ensure seamless integration by providing candidates who are both skilled and culturally aligned with your team.",
  },
  {
    icon: <Zap size={36} strokeWidth={1.5} />,
    title: "Fast Hiring",
    body: "Streamline your hiring process and quickly secure top talent with the skills you need within weeks.",
  },
];

const roles = [
  {
    title: "Accountant",
    body: "Manages financial records, ensures compliance, and prepares financial reports.",
  },
  {
    title: "Bookkeeper",
    body: "Maintains accurate financial records, processes transactions, and manages accounts.",
  },
  {
    title: "Financial Analyst",
    body: "Analyzes financial data to provide insights for business decisions and forecasting.",
  },
  {
    title: "Payroll Specialist",
    body: "Manages employee payroll, taxes, and benefits.",
  },
  {
    title: "Staff Accountant",
    body: "Supports the accounting department with daily operations, reconciliations, and reporting.",
  },
  {
    title: "And Many More Roles...",
    body: "",
  },
];

const levels = [
  {
    title: "Junior Level (1–2 years of experience)",
    body: "Professionals at the junior level are focused on building a strong foundation in finance and accounting principles. Their responsibilities often include data entry, reconciliations, assisting with financial reports, and supporting more senior team members. Attention to detail and a willingness to learn are key at this stage.",
  },
  {
    title: "Mid-Level (3–5 years of experience)",
    body: "At the mid-level, professionals take on greater responsibility in managing daily financial operations. They contribute to the preparation and analysis of financial reports, help ensure compliance, and may begin specializing in certain areas such as payroll, analysis, or reporting. They combine technical knowledge with growing strategic insight.",
  },
  {
    title: "Senior Level (5+ years of experience)",
    body: "Senior-level professionals play a critical role in leading financial functions. They oversee the accuracy of financial reporting, ensure compliance with regulations, and provide in-depth financial analysis to support business decision-making. Leadership, strategic thinking, and cross-functional collaboration become increasingly important.",
  },
  {
    title: "Manager/Director Level (7+ years of experience)",
    body: "At this stage, professionals take on leadership roles, guiding finance and accounting teams while shaping overall financial strategy. Their responsibilities include high-level reporting, risk management, financial planning, and ensuring that all financial practices align with business goals and regulatory standards.",
  },
];

const Finance_Accounting = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* TITLE */}
      <section className="fa-hero">
        <img
          src={heroImg}
          alt="Finance and Accounting"
          className="fa-hero__img"
        />
        <div className="fa-hero__banner">
          <h1 className="fa-hero__title">Finance &amp; Accounting</h1>
        </div>
      </section>

      {/* BENEFITS/TAGLINE */}
      <section className="fa-benefits">
        <div className="fa-benefits__list">
          {benefits.map(({ icon, title, body }) => (
            <div key={title} className="fa-benefit">
              <div className="fa-benefit__icon">{icon}</div>
              <div className="fa-benefit__content">
                <h3 className="fa-benefit__title">{title}</h3>
                <p className="fa-benefit__body">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fa-benefits__tagline">
          Enhance Your Team By Hiring Top Accounting And Financial Experts With
          The Experience Needed For Success.
        </div>
      </section>

      {/* ROLES GRID */}
      <section className="fa-roles">
        <h2 className="fa-roles__title">Find Top Talent for Your Company</h2>

        <div className="fa-roles__grid">
          {roles.map(({ title, body }) => (
            <div key={title} className="fa-role-card">
              <h3 className="fa-role-card__title">{title}</h3>
              {body && <p className="fa-role-card__body">{body}</p>}
            </div>
          ))}
        </div>

        <div className="fa-roles__cta">
          <button
            className="btn btn--orange"
            onClick={() => navigate("/contact")}
          >
            Hire Talent
          </button>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="fa-experience">
        <h2 className="fa-experience__title">Experience:</h2>
        <hr className="fa-experience__rule" />

        {levels.map(({ title, body }) => (
          <div key={title} className="fa-level">
            <div className="fa-level__left">
              <h3 className="fa-level__title">{title}</h3>
            </div>
            <div className="fa-level__right">
              <p className="fa-level__body">{body}</p>
            </div>
            <hr className="fa-level__divider" />
          </div>
        ))}
      </section>
    </>
  );
};

export default Finance_Accounting;
