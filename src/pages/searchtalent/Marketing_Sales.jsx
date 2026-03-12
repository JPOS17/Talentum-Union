import { useNavigate } from "react-router-dom";
import { DollarSign, Globe, Users, Zap } from "lucide-react";
import "../../styles/SearchTalentShared.css";

const heroImg =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80";

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
    title: "Sales Representative",
    body: "Builds relationships with prospects, presents product or service offerings, and closes deals.",
  },
  {
    title: "Business Development Representative (BDR)",
    body: "Prospects and qualifies leads to support the sales pipeline, focusing on outbound outreach and early-stage client engagement.",
  },
  {
    title: "Marketing Coordinator",
    body: "Supports marketing campaigns, events, and communications, handling logistics, tracking performance, and maintaining marketing assets.",
  },
  {
    title: "Content Marketing Specialist",
    body: "Creates blog posts, website content, email copy, and other materials to attract and engage audiences, supporting lead generation and brand awareness.",
  },
  {
    title: "Social Media Specialist",
    body: "Manages daily content posting, audience engagement, and reporting across social platforms to grow online presence and community interaction.",
  },
  { title: "And Many More Roles...", body: "" },
];

const levels = [
  {
    title: "Junior Level (1–2 years of experience)",
    body: "Professionals at the junior level focus on building foundational skills in marketing or sales. Responsibilities may include lead generation, customer outreach, assisting with campaign execution, market research, social media support, or content creation. Curiosity, communication, and adaptability are key traits at this stage.",
  },
  {
    title: "Mid-Level (3–5 years of experience)",
    body: "Mid-level professionals take ownership of specific campaigns, accounts, or market segments. In marketing, they may manage content, email, or digital ad strategies. In sales, they may handle the full sales cycle or key account development. Strategic thinking, data analysis, and customer engagement become more important.",
  },
  {
    title: "Senior Level (5+ years of experience)",
    body: "Senior-level professionals lead initiatives, mentor junior team members, and contribute directly to growth strategies. They oversee major campaigns, manage high-value clients, and provide insights to guide decision-making. Strong leadership, problem-solving, and performance optimization are emphasized at this level.",
  },
  {
    title: "Manager/Director Level (7+ years of experience)",
    body: "At this level, professionals are responsible for driving marketing or sales strategy, leading teams, and aligning departmental goals with broader business objectives. They analyze performance metrics, forecast trends, and lead cross-functional initiatives to increase revenue, brand visibility, and market share.",
  },
];

const Marketing_Sales = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* TITLE */}
      <section className="fa-hero">
        <img
          src={heroImg}
          alt="Marketing and Sales team"
          className="fa-hero__img"
        />
        <div className="fa-hero__banner">
          <h1 className="fa-hero__title">Marketing &amp; Sales</h1>
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
          Enhance Your Team By Hiring Top Virtual Marketing &amp; Sales Experts
          With The Experience Needed For Success.
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

export default Marketing_Sales;
