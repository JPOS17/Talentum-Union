import "../../styles/Job_Applications.css";

const heroImg =
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80";

const Remote_Copywriter = () => {
  return (
    <>
      {/* INFO */}
      <div className="ja-hero">
        <img src={heroImg} alt="Remote Copywriter" className="ja-hero__img" />
        <h1 className="ja-hero__title">Remote Copywriter</h1>
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
            <strong>$1,300–$1,600 USD</strong>
          </p>
          <p>
            <strong>Schedule:</strong> Monday to Friday, 9am–5pm (Western
            Standard Time)
          </p>
        </div>

        {/* ABOUT */}
        <h2 className="ja-section-title">About the Opportunity</h2>
        <p>
          Talentum Unio is supporting a U.S. company that is expanding its
          content and marketing team. They are looking for a talented{" "}
          <strong>Remote Copywriter</strong> who can craft clear, engaging, and
          strategic content across different channels.
        </p>
        <p>
          You'll join a remote-first workplace that values communication,
          initiative, and consistent quality. This is a long-term position where
          your writing skills will play a key role in strengthening the
          company's message and brand presence.
        </p>

        {/* POSITION OVERVIEW */}
        <h2 className="ja-section-title">Position Overview</h2>
        <p>
          The <strong>Copywriter</strong> will be responsible for creating
          high-quality written content that supports brand growth, marketing
          efforts, and internal communication. The ideal candidate is adaptable,
          detail-oriented, and able to write in a variety of tones depending on
          the project. This role will work closely with other teams and
          contribute directly to the company's communication strategy.
        </p>

        {/* KEY RESPONSIBILITIES */}
        <h2 className="ja-section-title">Key Responsibilities</h2>
        <ul className="ja-list">
          <li>
            Writing and editing website content, blog posts, email campaigns,
            and social media copy
          </li>
          <li>Ensuring consistent brand voice and tone across all messaging</li>
          <li>Conducting research to support accurate and engaging content</li>
          <li>Collaborating with marketing, design, and leadership teams</li>
          <li>Revising drafts based on feedback</li>
          <li>Managing deadlines and maintaining organized content files</li>
        </ul>

        {/* QUALIFICATIONS */}
        <h2 className="ja-section-title">Qualifications</h2>
        <ul className="ja-list">
          <li>
            3 years of experience in copywriting, content creation, or a related
            field (ideal)
          </li>
          <li>Excellent English writing and editing skills</li>
          <li>
            Ability to adjust writing tone depending on the audience and
            platform
          </li>
          <li>
            Strong organizational skills and ability to work independently
          </li>
          <li>
            Familiarity with general productivity tools (e.g., Google
            Workspace); other tools will be trained if needed
          </li>
        </ul>

        {/* WHAT WE OFFER */}
        <h2 className="ja-section-title">What We Offer</h2>
        <ul className="ja-list">
          <li>
            A remote-first position with the flexibility to work from any
            country in Latin America
          </li>
          <li>
            Fixed monthly salary: <strong>$1,300–$1,600 USD</strong> (based on
            experience)
          </li>
          <li>
            A stable, full-time role following a Western Standard Time schedule
          </li>
          <li>
            A team culture that encourages initiative, collaboration, and
            professional development
          </li>
          <li>
            Room to expand your responsibilities as the company grows and new
            projects emerge
          </li>
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

export default Remote_Copywriter;
