import "../styles/About.css";

const computerImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80";

const About = () => {
  return (
    <>
      {/* INTRO */}
      <section className="about-hero">
        <h1 className="about-hero__title">About Talentum Union</h1>
        <p className="about-hero__body">
          <strong>Telentum Union</strong>&nbsp; strives to empower businesses by
          connecting them with exceptional remote talent from Latin America. We
          streamline the hiring process, ensuring cultural alignment, trust, and
          efficiency so companies can grow with the right people by their side.
          Our success depends upon your satisfaction.
        </p>
      </section>

      {/* VISION */}
      <section className="vision">
        <div className="vision__image-wrap">
          <img src={computerImage} alt="Looking at computer" />
        </div>

        <div className="vision__content">
          <h2 className="vision__title">Vision</h2>
          <p className="vision__body">
            <strong>Talentum Union</strong> is dedicated to being the leading
            bridge between Latin American talent and global businesses, building
            long-term relationships between companies and their new recruits. We
            focus on personalized, effective solutions that drive success.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <div className="values__intro">
          <h2 className="values__title">Values</h2>
          <p className="values__body">
            At <strong>Talentum Union</strong>, our values guide every decision
            and action we take. We're dedicated to delivering the best talent,
            building strong relationships, and always putting our clients'
            success first.
          </p>
        </div>

        <div className="values__cards">
          <div className="value-card">
            <h3 className="value-card__title">
              Connection &amp; Personalization
            </h3>
            <p className="value-card__body">
              We prioritize building meaningful relationships between businesses
              and talent, tailoring our approach to meet the unique needs of
              every client and recruit.
            </p>
          </div>

          <div className="value-card">
            <h3 className="value-card__title">Trust &amp; Integrity</h3>
            <p className="value-card__body">
              Transparency and reliability are the foundation of everything we
              do, ensuring strong, lasting partnerships built on mutual respect.
            </p>
          </div>

          <div className="value-card">
            <h3 className="value-card__title">Excellence &amp; Empowerment</h3>
            <p className="value-card__body">
              We deliver top-tier talent that drives high performance,
              empowering businesses and professionals to grow and succeed
              together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
