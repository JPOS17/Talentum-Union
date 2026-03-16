import { useNavigate } from "react-router-dom";
import { DollarSign, Globe, Users, Zap } from "lucide-react";
import "../../styles/SearchTalentShared.css";

const heroImg =
  "https://images.pexels.com/photos/7682358/pexels-photo-7682358.jpeg";

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
    title: "Virtual Executive Assistant",
    body: "Provides high-level administrative support to executives, including calendar management, travel arrangements, email handling, and task coordination.",
  },
  {
    title: "Customer Support Representative",
    body: "Acts as the front line for customer inquiries, resolving issues through email, chat, or phone while maintaining a positive customer experience.",
  },
  {
    title: "Technical Support Representative",
    body: "Provides first-level tech support, troubleshooting product or software issues, and guiding customers through solutions.",
  },
  {
    title: "Client Success Assistant",
    body: "Supports account managers by following up with clients, tracking satisfaction, and ensuring deliverables and expectations are met.",
  },
  {
    title: "Data Entry Specialist",
    body: "Focuses on inputting, updating, and maintaining accurate data across systems—often a stepping stone into broader administrative or operations roles.",
  },
  {
    title: "And Many More Roles...",
    body: "",
  },
];

const levels = [
  {
    title: "Junior Level (1–2 years of experience)",
    body: "Professionals at the junior level focus on mastering the fundamentals of virtual support and customer service. Responsibilities typically include responding to basic customer inquiries, managing schedules, data entry, handling emails, and assisting senior team members. Strong communication skills, attention to detail, and adaptability are essential at this stage.",
  },
  {
    title: "Mid-Level (3–5 years of experience)",
    body: "At the mid-level, professionals handle more complex tasks with minimal supervision. They may manage multiple client accounts, resolve escalated customer issues, coordinate team schedules, or take on project management support. Their growing experience allows them to contribute to process improvements and take on more specialized responsibilities.",
  },
  {
    title: "Senior Level (5+ years of experience)",
    body: "Senior-level professionals bring a deep understanding of customer support and virtual operations. They often lead initiatives, mentor junior team members, and handle high-priority tasks or clients. Responsibilities may include training, quality assurance, reporting on support metrics, and identifying areas for operational optimization.",
  },
  {
    title: "Manager/Director Level (7+ years of experience)",
    body: "At this level, professionals oversee teams and drive strategic decisions in virtual assistance and customer experience. They develop support strategies, implement performance standards, manage client relationships, and ensure service excellence. Leadership, communication, and a strong grasp of business goals are critical at this stage.",
  },
];

const VirtualAssistants_Customer_Support = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* TITLE */}
      <section className="fa-hero">
        <img
          src={heroImg}
          alt="Virtual Assistants and Customer Support team"
          className="fa-hero__img"
        />
        <div className="fa-hero__banner">
          <h1 className="fa-hero__title">
            Virtual Assistants &amp; Customer Support
          </h1>
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
          Enhance Your Team By Hiring Top Virtual Assistants And Customer
          Support Experts With The Experience Needed For Success.
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

export default VirtualAssistants_Customer_Support;
