import "../../styles/Job_Applications.css";

const heroImg =
  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80";

const Executive_Operations_Specialist = () => {
  return (
    <>
      {/* INFO */}
      <div className="ja-hero">
        <img
          src={heroImg}
          alt="Executive Operations Specialist"
          className="ja-hero__img"
        />
        <h1 className="ja-hero__title">
          Executive Operations Specialist (100% Work From Home)
        </h1>
      </div>

      {/* META */}
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
            <strong>$1,700–$1,900 USD</strong> (based on experience)
          </p>
          <p>
            <strong>Schedule:</strong> Monday to Friday, 9am–5pm (Central Time,
            flexible)
          </p>
        </div>

        {/* ABOUT */}
        <h2 className="ja-section-title">About the Opportunity</h2>
        <p>
          Talentum Union is partnering with a U.S.-based company seeking a{" "}
          <strong>Remote Executive Operations Specialist</strong>. This client
          values efficiency, organization, and clear communication, delivering
          exceptional business operations support to their teams.
        </p>
        <p>
          As part of this growing remote team, you'll join a professional
          environment focused on career development, collaboration, and
          operational excellence. This is a long-term position with
          opportunities to expand your responsibilities and grow within the
          company.
        </p>

        {/* POSITION OVERVIEW */}
        <h2 className="ja-section-title">Position Overview</h2>
        <p>
          We are looking for a detail-oriented, organized, and proactive{" "}
          <strong>Executive Operations Specialist</strong> based in Latin
          America. You will help manage operational workflows, coordinate
          projects, and support executive leadership to ensure smooth business
          operations.
        </p>

        {/* KEY RESPONSIBILITIES */}
        <h2 className="ja-section-title">Key Responsibilities</h2>
        <ul className="ja-list">
          <li>Overseeing and coordinating daily operations tasks.</li>
          <li>Supporting project management and ensuring deadlines are met.</li>
          <li>
            Assisting executives with scheduling, documentation, and
            communication.
          </li>
          <li>Maintaining records, reports, and operational systems.</li>
          <li>Collaborating with teams across multiple time zones.</li>
          <li>
            Managing tools like Google Drive, ClickUp, or QuickBooks for
            operational efficiency.
          </li>
        </ul>

        {/* QUALIFICATIONS */}
        <h2 className="ja-section-title">Qualifications</h2>
        <ul className="ja-list">
          <li>
            2+ years of experience in operations, executive assistance, or
            project coordination.
          </li>
          <li>Excellent English communication and organizational skills.</li>
          <li>Familiarity with Google Drive, ClickUp, or QuickBooks.</li>
          <li>Proactive, detail-oriented, and able to work independently.</li>
          <li>Professional and client-focused demeanor.</li>
        </ul>

        {/* WHAT WE OFFER */}
        <h2 className="ja-section-title">What We Offer</h2>
        <ul className="ja-list">
          <li>100% remote position (work from anywhere in Latin America).</li>
          <li>
            Fixed monthly salary: <strong>$1,700–$1,900 USD</strong> (based on
            experience)
          </li>
          <li>Monday to Friday schedule, 9am–5pm CT</li>
          <li>Collaborative and supportive team environment.</li>
          <li>Opportunities for professional growth and skill development.</li>
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

export default Executive_Operations_Specialist;
