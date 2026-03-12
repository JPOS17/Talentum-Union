import "../../styles/Job_Applications.css";

const heroImg =
  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80";

const Staff_Accountant = () => {
  return (
    <>
      {/* INFO */}
      <div className="ja-hero">
        <img src={heroImg} alt="Staff Accountant" className="ja-hero__img" />
        <h1 className="ja-hero__title">
          Staff Accountant (100% Work From Home)
        </h1>
      </div>

      {/* META  */}
      <div className="ja-content">
        <div className="ja-meta">
          <p>
            <strong>Location:</strong> Remote
          </p>
          <p>
            <strong>Position Type:</strong> Full-time
          </p>
          <p>
            <strong>Salary:</strong> Gross monthly salary of{" "}
            <strong>$1,800–$2,200 USD</strong> (based on experience)
          </p>
          <p>
            <strong>Schedule:</strong> Monday to Friday, 8am–4pm or 9am–5pm
            (Eastern Time, flexible)
          </p>
        </div>

        {/* ABOUT */}
        <h2 className="ja-section-title">About the Opportunity</h2>
        <p>
          Talentum Union has partnered with a{" "}
          <strong>U.S.-based accounting firm</strong> that specializes in
          serving <strong>Real Estate</strong> and{" "}
          <strong>Non-Profit organizations.</strong> This client is known for
          delivering tailored financial services, including accounting,
          bookkeeping, and tax compliance, with a strong focus on accuracy,
          transparency, and client success.
        </p>
        <p>
          As part of a growing remote team, you'll join a professional
          environment that encourages career development, innovative thinking,
          and <strong>collaborative teamwork.</strong> This is a long-term
          position with real opportunities to grow into leadership roles.
        </p>

        {/* POSITION OVERVIEW */}
        <h2 className="ja-section-title">Position Overview</h2>
        <p>
          We are looking for a{" "}
          <strong>detail-oriented and motivated Entry-Level Accountant</strong>{" "}
          based in Mexico to support the financial operations of U.S. clients.
          The ideal candidate is analytical, organized, and eager to grow their
          career in nonprofit or real estate accounting. You'll work with a
          collaborative Latin American team that values professionalism, client
          care, and delivering top-quality financial solutions.
        </p>
        <p>
          This position is designed for professionals early in their career who
          want to build experience with U.S.-based accounting standards while
          contributing to meaningful client work.
        </p>

        {/* KEY RESPONSIBILITIES */}
        <h2 className="ja-section-title">Key Responsibilities</h2>
        <ul className="ja-list">
          <li>
            Prepare and maintain financial records, reports, and general
            ledgers.
          </li>
          <li>
            Assist with monthly, quarterly, and annual financial statements.
          </li>
          <li>
            Perform account reconciliations, journal entries, and resolve
            discrepancies.
          </li>
          <li>
            Handle bank reconciliations and ensure proper cash flow recording.
          </li>
          <li>Support month-end and year-end close processes.</li>
          <li>Assist with budgeting and forecasting.</li>
          <li>
            Help prepare U.S. tax filings (mainly for nonprofits) under
            supervision.
          </li>
          <li>
            Provide documentation for audits and assist in audit processes.
          </li>
          <li>Support payroll and benefits administration when needed.</li>
          <li>
            Communicate regularly with clients and internal teams through video
            meetings and professional correspondence.
          </li>
        </ul>

        {/* QUALIFICATIONS */}
        <h2 className="ja-section-title">Qualifications</h2>
        <ul className="ja-list">
          <li>
            <strong>Bachelor's degree</strong> in Accounting, Finance, or a
            related field.
          </li>
          <li>
            <strong>Minimum of 1 year of accounting experience</strong>{" "}
            (internships or entry-level roles accepted).
          </li>
          <li>
            Proficiency in accounting software (QuickBooks, Sage, or similar)
            and Excel.
          </li>
          <li>
            Strong understanding of GAAP; knowledge of nonprofit or real estate
            accounting a plus.
          </li>
          <li>
            Excellent attention to detail, analytical skills, and organizational
            abilities.
          </li>
          <li>
            <strong>Strong written and spoken English</strong> communication
            skills.
          </li>
          <li>Professional, confident, and client-friendly demeanor.</li>
        </ul>

        {/* WHAT WE OFFER */}
        <h2 className="ja-section-title">What We Offer</h2>
        <ul className="ja-list">
          <li>100% remote position (work from anywhere).</li>
          <li>
            Gross monthly salary: <strong>$1,800–$2,200 USD</strong>, based on
            experience.
          </li>
          <li>Unlimited PTO (requests over 40 hours require approval).</li>
          <li>
            Observance of either U.S. or National holidays, based on employee
            preference or company policy.
          </li>
          <li>Ongoing professional development and training.</li>
          <li>A collaborative and supportive team environment.</li>
        </ul>
      </div>

      {/* APPLY FOOTER */}
      <div className="ja-footer">
        <p className="ja-footer__text">
          If you like to apply, please send your CV in English to our email and
          we will get back to
          <br />
          you as soon as possible!
        </p>
        <a className="ja-apply-btn" href="mailto:info@talentumunion.com">
          Apply
        </a>
      </div>
    </>
  );
};

export default Staff_Accountant;
