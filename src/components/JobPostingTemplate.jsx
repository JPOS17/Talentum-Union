import { useParams, Navigate } from "react-router-dom";
import { jobs } from "../data/jobsData";
import "../styles/Job_Applications.css";

// Render a string that may contain inline HTML (bold tags, etc.)
const HTML = ({ text }) => <span dangerouslySetInnerHTML={{ __html: text }} />;

// One bullet item — supports HTML
const Bullet = ({ text }) => (
  <li>
    <HTML text={text} />
  </li>
);

/**
 * Shared list renderer used for both responsibilities and qualifications.
 * Each entry is either:
 *   • a plain string  → flat bullet
 *   • { heading, items[] } → subsection heading + bullet list
 */
const SectionList = ({ entries }) => {
  if (!entries || entries.length === 0) return null;

  // All strings → simple flat list
  if (entries.every((e) => typeof e === "string")) {
    return (
      <ul className="ja-list">
        {entries.map((item, i) => (
          <Bullet key={i} text={item} />
        ))}
      </ul>
    );
  }

  // Mixed or all grouped
  return (
    <>
      {entries.map((entry, i) =>
        typeof entry === "string" ? (
          <ul className="ja-list" key={i}>
            <Bullet text={entry} />
          </ul>
        ) : (
          <div key={i}>
            <h3 className="ja-subsection-title">{entry.heading}</h3>
            <ul className="ja-list">
              {entry.items.map((item, j) => (
                <Bullet key={j} text={item} />
              ))}
            </ul>
          </div>
        ),
      )}
    </>
  );
};

/**
 * Renders the content of an extra section.
 * Supports:
 *   content[]    — array of paragraph strings
 *   subsections[] — array of { heading, items[], outcome? }
 */
const ExtraSectionBody = ({ section }) => {
  // Paragraph-only content
  if (section.content) {
    return section.content.map((para, i) => (
      <p key={i}>
        <HTML text={para} />
      </p>
    ));
  }

  // Subsections with optional outcome line
  if (section.subsections) {
    return section.subsections.map((sub, i) => (
      <div key={i}>
        <h3 className="ja-subsection-title">{sub.heading}</h3>
        <ul className="ja-list">
          {sub.items.map((item, j) => (
            <Bullet key={j} text={item} />
          ))}
        </ul>
        {sub.outcome && (
          <p className="ja-outcome">
            <strong>Outcome</strong>: {sub.outcome}
          </p>
        )}
      </div>
    ));
  }

  return null;
};

// Default apply-footer text
const DEFAULT_APPLY_NOTE =
  "If you like to apply, please send your CV in English to our email and we will get back to you as soon as possible!";

const JobPostingTemplate = () => {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);

  // If no matching job exists, redirect to the job board
  if (!job) return <Navigate to="/job-board" replace />;

  const {
    heroImage,
    heroAlt,
    title,
    location,
    positionType,
    salary,
    schedule,
    aboutOpportunity,
    positionOverview,
    responsibilities,
    qualifications,
    extraSections,
    whatWeOffer,
    applyNote,
  } = job;

  return (
    <>
      {/* HERO */}
      <div className="ja-hero">
        <img src={heroImage} alt={heroAlt} className="ja-hero__img" />
        <h1 className="ja-hero__title">{title}</h1>
      </div>

      <div className="ja-content">
        {/* META */}
        <div className="ja-meta">
          <p>
            <strong>Location:</strong> <HTML text={location} />
          </p>
          <p>
            <strong>Position Type:</strong> {positionType}
          </p>
          <p>
            <strong>Salary:</strong> <HTML text={salary} />
          </p>
          <p>
            <strong>Schedule:</strong> {schedule}
          </p>
        </div>

        {/* ABOUT THE OPPORTUNITY */}
        {aboutOpportunity?.length > 0 && (
          <>
            <h2 className="ja-section-title">About the Opportunity</h2>
            {aboutOpportunity.map((para, i) => (
              <p key={i}>
                <HTML text={para} />
              </p>
            ))}
          </>
        )}

        {/* POSITION OVERVIEW */}
        {positionOverview?.length > 0 && (
          <>
            <h2 className="ja-section-title">Position Overview</h2>
            {positionOverview.map((para, i) => (
              <p key={i}>
                <HTML text={para} />
              </p>
            ))}
          </>
        )}

        {/* KEY RESPONSIBILITIES */}
        {responsibilities?.length > 0 && (
          <>
            <h2 className="ja-section-title">Key Responsibilities</h2>
            <SectionList entries={responsibilities} />
          </>
        )}

        {/* QUALIFICATIONS */}
        {qualifications?.length > 0 && (
          <>
            <h2 className="ja-section-title">Qualifications</h2>
            <SectionList entries={qualifications} />
          </>
        )}

        {/* EXTRA SECTIONS (Reporting Structure, 30-60-90, etc.) */}
        {extraSections?.map((section, i) => (
          <div key={i}>
            <h2 className="ja-section-title">{section.title}</h2>
            <ExtraSectionBody section={section} />
          </div>
        ))}

        {/* WHAT WE OFFER */}
        {whatWeOffer?.length > 0 && (
          <>
            <h2 className="ja-section-title">What We Offer</h2>
            <ul className="ja-list">
              {whatWeOffer.map((item, i) => (
                <Bullet key={i} text={item} />
              ))}
            </ul>
          </>
        )}
      </div>

      {/* APPLY FOOTER */}
      <div className="ja-footer">
        <p className="ja-footer__text">
          <HTML text={applyNote ?? DEFAULT_APPLY_NOTE} />
        </p>
        <a className="ja-apply-btn" href="mailto:info@talentumunion.com">
          Apply
        </a>
      </div>
    </>
  );
};

export default JobPostingTemplate;
