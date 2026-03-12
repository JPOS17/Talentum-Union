import { useNavigate } from "react-router-dom";
import { DollarSign, Globe, Users, Zap } from "lucide-react";
import "../../styles/SearchTalentShared.css";
const heroImg =
  "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1200&q=80";

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
    title: "Data Analyst",
    body: "Collects, processes, and interprets data to help teams make informed decisions. Often works with tools like Excel, SQL, and BI platforms. A great stepping stone toward data science or analytics leadership roles.",
  },
  {
    title: "Software Developer / Engineer",
    body: "Designs, develops, tests, and maintains software applications. This role can evolve into senior engineering, architecture, or team lead positions over time.",
  },
  {
    title: "IT Support Specialist",
    body: "Provides technical support for hardware, software, and network issues. Builds a strong foundation in IT systems and can grow into roles in system administration, cybersecurity, or IT project management.",
  },
  {
    title: "QA Tester / Quality Assurance Analyst",
    body: "Ensures software or systems meet quality standards through testing and troubleshooting. A great entry into product development, automation engineering, or QA leadership.",
  },
  {
    title: "DevOps Engineer",
    body: "Focuses on automating and streamlining deployment, monitoring, and infrastructure processes. With experience, this role can lead to cloud architecture or DevOps leadership positions.",
  },
  { title: "And Many More Roles...", body: "" },
];

const levels = [
  {
    title: "Junior Level (1–2 years of experience)",
    body: "Professionals at the junior level are focused on learning core technical skills and gaining hands-on experience. Their responsibilities may include debugging code, writing basic scripts, performing data cleaning, providing IT support, or executing test cases. Curiosity, attention to detail, and a strong grasp of foundational tools and technologies are key at this stage.",
  },
  {
    title: "Mid-Level (3–5 years of experience)",
    body: "At the mid-level, professionals take on more independent tasks, manage portions of projects, and contribute to system design, data modeling, development, or infrastructure improvements. They may specialize in areas like backend development, data pipelines, automation, or network configuration. Problem-solving, efficiency, and collaboration skills become increasingly important.",
  },
  {
    title: "Senior Level (5+ years of experience)",
    body: "Senior professionals are trusted to lead complex technical projects, mentor junior colleagues, and drive innovation. They oversee architecture decisions, optimize system performance, ensure data integrity or security, and play a key role in strategic initiatives. Deep technical expertise and leadership qualities are expected at this level.",
  },
  {
    title: "Manager/Director Level (7+ years of experience)",
    body: "At this stage, professionals move into strategic and leadership roles. They oversee technical teams, manage cross-functional projects, and align tech or data initiatives with business objectives. Their responsibilities often include resource planning, stakeholder communication, roadmap development, and ensuring scalability and efficiency across platforms or systems.",
  },
];

const Data_IT_Engineering = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* TITLE */}
      <section className="fa-hero">
        <img
          src={heroImg}
          alt="Data, IT and Engineering"
          className="fa-hero__img"
        />
        <div className="fa-hero__banner">
          <h1 className="fa-hero__title">Data, IT and Engineering</h1>
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
          Enhance Your Team By Hiring Top Data, IT and Engineering Experts With
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

export default Data_IT_Engineering;
