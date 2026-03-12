import { useNavigate, Link } from "react-router-dom";

import "../styles/SearchTalent.css";

const financeImg =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80";
const vaImg =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80";
const marketingImg =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80";
const itImg =
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=700&q=80";
const groupImg =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80";
const teamImg =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80";

const SearchTalent = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* INFO BANNER */}
      <section className="st-hero">
        <div className="st-hero__text">
          <h1 className="st-hero__title">
            Find Top <span className="st-hero__highlight">Latin American</span>{" "}
            Talent for Your Business
          </h1>
          <button
            className="btn btn--teal"
            onClick={() => navigate("/contact")}
          >
            Contact us
          </button>
        </div>
        <div className="st-hero__image">
          <img src={teamImg} alt="Team working together" />
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="st-cards">
        <Link to="/finance-accounting" className="st-card">
          <div className="st-card__image">
            <img src={financeImg} alt="Finance & Accounting" />
          </div>
          <div className="st-card__body">
            <h3 className="st-card__title">Finance &amp; Accounting</h3>
            <p className="st-card__text">
              Ensure accuracy, compliance, and financial growth with top finance
              and accounting professionals. From bookkeeping to financial
              strategy, find experts who keep your business on track.
            </p>
          </div>
        </Link>

        <Link to="/virtual-assistants-customer-support" className="st-card">
          <div className="st-card__image">
            <img src={vaImg} alt="Virtual Assistants & Customer Support" />
          </div>
          <div className="st-card__body">
            <h3 className="st-card__title">
              Virtual Assistants &amp; Customer Support
            </h3>
            <p className="st-card__text">
              Boost efficiency and enhance customer satisfaction with skilled
              virtual assistants and customer support professionals. Get the
              right talent to manage operations, communications, and client
              interactions seamlessly.
            </p>
          </div>
        </Link>

        <Link to="/marketing-sales" className="st-card">
          <div className="st-card__image">
            <img src={marketingImg} alt="Marketing & Sales" />
          </div>
          <div className="st-card__body">
            <h3 className="st-card__title">Marketing &amp; Sales</h3>
            <p className="st-card__text">
              Drive engagement, generate leads, and scale your business with
              expert marketing and sales professionals. Find talent that helps
              you build strong customer relationships and maximize growth.
            </p>
          </div>
        </Link>

        <Link to="/data-IT-engineering" className="st-card">
          <div className="st-card__image">
            <img src={itImg} alt="Data, IT and Engineering" />
          </div>
          <div className="st-card__body">
            <h3 className="st-card__title">Data, IT and Engineering</h3>
            <p className="st-card__text">
              Innovate, optimize, and scale with top Data, IT, and Engineering
              talent. From software development to data analytics, find experts
              who power your business with smart technology solutions.
            </p>
          </div>
        </Link>

        <Link to="/contact" className="st-card">
          <div className="st-card__image">
            <img src={groupImg} alt="Group of professionals" />
          </div>
          <div className="st-card__body">
            <h3 className="st-card__title">
              Looking For Something Different? We Got You Cover!
            </h3>
            <p className="st-card__text">
              If you're looking for talent or services outside the areas listed
              above, we've got you covered. We can help you find specialized
              professionals with the unique skills and innovative solutions your
              business needs to thrive.
            </p>
          </div>
        </Link>
      </section>
    </>
  );
};

export default SearchTalent;
