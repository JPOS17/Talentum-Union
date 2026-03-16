import { useNavigate, Link } from "react-router-dom";
import "../styles/Home.css";

import {
  BarChart2,
  Headphones,
  TrendingUp,
  Globe,
  PhoneCall,
} from "lucide-react";

const coworkersImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80";
const handshakeImage =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* INFO */}
      <section className="hero">
        <div className="hero__text">
          <h1 className="hero__title">A Better Way to Recruit Top Talent</h1>
          <p className="hero__body">
            At Talentum Union, we help you find the best talent in the industry
            from <strong>Latin America</strong>, with the experience you want,
            so you can focus on running and growing your business. All with a{" "}
            <strong>risk-free hiring process</strong>. Interview at no cost and
            pay only when you hire.
          </p>
          <div className="hero__cta">
            <button
              className="btn btn--orange"
              onClick={() => navigate("/about-us")}
            >
              About Us
            </button>
            <button
              className="btn btn--teal"
              onClick={() => navigate("/search-talent")}
            >
              Hire Talent
            </button>
          </div>
        </div>
        <div className="hero__image">
          <img src={coworkersImage} alt="Co-workers collaborating" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <p className="services__eyebrow">Our Services</p>
        <h2 className="services__title">Recruitment areas</h2>

        <div className="services__grid">
          <Link to="/finance-accounting" className="service-card">
            <BarChart2
              className="service-card__icon"
              size={40}
              strokeWidth={1.5}
            />
            <span className="service-card__label">
              Finance &amp;<br />Accounting
            </span>
          </Link>

          <Link
            to="/virtual-assistants-customer-support"
            className="service-card"
          >
            <Headphones
              className="service-card__icon"
              size={40}
              strokeWidth={1.5}
            />
            <span className="service-card__label">
              Virtual Assistants &amp;<br /> Customer Support
            </span>
          </Link>

          <Link to="/marketing-sales" className="service-card">
            <TrendingUp
              className="service-card__icon"
              size={40}
              strokeWidth={1.5}
            />
            <span className="service-card__label">Marketing &amp;<br />Sales</span>
          </Link>

          <Link to="/data-IT-engineering" className="service-card">
            <Globe className="service-card__icon" size={40} strokeWidth={1.5} />
            <span className="service-card__label">
              Data, IT and<br />Engineering
            </span>
          </Link>
        </div>

        <Link to="/contact" className="services__talk">
          <PhoneCall
            className="services__talk-icon"
            size={36}
            strokeWidth={1.5}
          />
          <p className="services__talk-text">
            Looking for a Different Area? <br />
            <span className="services__talk-link">Let's Talk!</span>
          </p>
        </Link>
      </section>

      {/* HIRING PROCESS SECTION */}
      <section className="process">
        <div className="process__image">
          <img src={handshakeImage} alt="Handshake" />
        </div>

        <div className="process__content">
          <h2 className="process__title">Our Hiring Process</h2>

          <div className="process__steps">
            <div className="process__step">
              <div className="process__step-header">
                <span className="process__step-number">01</span>
                <h3 className="process__step-title">Initial Consultation</h3>
              </div>
              <p className="process__step-body">
                We'll schedule a call to review the role, define the scope,
                align on budget, and finalize the job description to get started
                with clarity and precision.
              </p>
            </div>

            <div className="process__step">
              <div className="process__step-header">
                <span className="process__step-number">02</span>
                <h3 className="process__step-title">
                  Talent Sourcing &amp; Screening
                </h3>
              </div>
              <p className="process__step-body">
                Our team will launch the search, promote the position, and
                thoroughly screen applicants to identify top-tier candidates
                that meet your criteria.
              </p>
            </div>

            <div className="process__step">
              <div className="process__step-header">
                <span className="process__step-number">03</span>
                <h3 className="process__step-title">Candidate Delivery</h3>
              </div>
              <p className="process__step-body">
                We'll provide a shortlist of 3 pre-screened candidates within 5
                to 10 days. The entire process from consultation to hire
                typically takes 2 to 3 weeks, depending on your needs.
              </p>
            </div>

            <div className="process__step">
              <div className="process__step-header">
                <span className="process__step-number">04</span>
                <h3 className="process__step-title">Hiring</h3>
              </div>
              <p className="process__step-body">
                Once you've selected your candidate, we'll guide you through the
                hiring steps, offering ongoing support to ensure a seamless
                integration into your team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;