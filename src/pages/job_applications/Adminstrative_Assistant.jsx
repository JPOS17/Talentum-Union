import "../../styles/Job_Applications.css";

const heroImg =
  "https://images.pexels.com/photos/7657730/pexels-photo-7657730.jpeg";

const Administrative_Assistant = () => {
  return (
    <>
      <div className="ja-hero">
        <img
          src={heroImg}
          alt="Administrative Assistant"
          className="ja-hero__img"
        />
        <h1 className="ja-hero__title">Administrative Assistant (Remote)</h1>
      </div>

      {/* INFO */}
      <div className="ja-content">
        <div className="ja-meta">
          <p>
            <strong>Location:</strong> Remote (Mexico)
          </p>
          <p>
            <strong>Position Type:</strong> Full-time
          </p>
          <p>
            <strong>Salary:</strong> $1,100–$1,600 USD gross per month (based on
            experience)
          </p>
          <p>
            <strong>Schedule:</strong> Monday to Friday (business hours aligned
            with the firm's operations)
          </p>
        </div>

        {/* ABOUT */}
        <h2 className="ja-section-title">About the Opportunity</h2>
        <p>
          Talentum Union has partnered with a{" "}
          <strong>U.S.-based accounting firm</strong>, a growing U.S.-based
          accounting and advisory firm that works primarily with nonprofits and
          mission-driven organizations. The firm places a strong emphasis on
          systems, workflows, and timely communication to deliver high-quality
          service to its clients.
        </p>
        <p>
          This is a key internal role within the organization. As{" "}
          <strong>Administrative Assistant</strong>, you will help ensure smooth
          daily operations, strong follow-through, and well-managed systems that
          support both leadership and clients. This is a long-term, full-time
          opportunity for someone who enjoys organization, ownership, and
          proactive problem-solving..
        </p>

        {/* POSITION OVERVIEW */}
        <h2 className="ja-section-title">Position Overview</h2>
        <p>
          We are seeking a highly organized, detail-oriented, and proactive
          Administrative Assistant based in Mexico to manage the firm's internal
          systems, communications, and operational workflows.
        </p>
        <p>
          This role is ideal for professionals with{" "}
          <strong>1–3 years of experience</strong> who enjoy building structure,
          maintaining clarity across multiple tools, and ensuring that nothing
          falls through the cracks. You will take ownership of the firm's
          workflow platform (Canopy), CRM system (ActiveCampaign), email
          responsiveness, and contractor coordination.
        </p>
        <p>
          You'll work closely with leadership and play a central role in keeping
          the business running efficiently and professionally.
        </p>

        {/* KEY RESPONSIBILITIES */}
        <h2 className="ja-section-title">Key Responsibilities</h2>

        <h3 className="ja-subsection-title">
          Workflow &amp; Task Management (Canopy)
        </h3>
        <ul className="ja-list">
          <li>
            Fully manage and maintain Canopy as the firm's primary workflow
            system.
          </li>
          <li>
            Update, assign, and organize tasks based on priorities and
            deadlines.
          </li>
          <li>
            Conduct weekly system reviews to ensure:
            <ul className="ja-list ja-list--sub">
              <li>No overdue or forgotten tasks</li>
              <li>Accurate deadlines and task ownership</li>
              <li>Active progress across all workflows</li>
            </ul>
          </li>
          <li>
            Proactively flag risks, delays, or bottlenecks and follow up
            accordingly
          </li>
        </ul>

        <h3 className="ja-subsection-title">
          Email &amp; Communication Management
        </h3>
        <ul className="ja-list">
          <li>Monitor the company inbox daily</li>
          <li>Ensure no email goes more than 24 hours without a response</li>
          <li>
            Draft responses when appropriate and escalate messages requiring
            leadership input
          </li>
          <li>Organize inboxes for clarity, tracking, and efficiency</li>
          <li>Support phone call follow-ups and internal communications</li>
        </ul>

        <h3 className="ja-subsection-title">
          Contractor &amp; Vendor Coordination
        </h3>
        <ul className="ja-list">
          <li>
            Serve as the primary point of contact for outsourced contractors
            (IT, HR, etc.)
          </li>
          <li>Track assignments, deadlines, and deliverables</li>
          <li>Ensure clear communication and timely completion of work</li>
          <li>
            Follow up on outstanding items and escalate concerns when needed
          </li>
        </ul>

        <h3 className="ja-subsection-title">CRM Management (ActiveCampaign)</h3>
        <ul className="ja-list">
          <li>Maintain and manage ActiveCampaign as the firm's CRM</li>
          <li>Ensure contacts are added accurately and consistently</li>
          <li>Maintain clean records, lists, and tagging systems</li>
          <li>
            Build and manage automations and workflows for:
            <ul className="ja-list ja-list--sub">
              <li>Potential clients</li>
              <li>Current clients</li>
              <li>Follow-ups and status tracking</li>
            </ul>
          </li>
          <li>
            Ensure the CRM actively supports business development and client
            communication
          </li>
        </ul>

        {/* QUALIFICATIONS */}
        <h2 className="ja-section-title">Qualifications</h2>
        <ul className="ja-list">
          <li>
            1–3 years of experience in an administrative, operations, or support
            role
          </li>
          <li>Strong organizational and time management skills</li>
          <li>Comfort working across multiple systems and digital tools</li>
          <li>Experience managing email inboxes and follow-ups</li>
          <li>Experience with CRM platforms (ActiveCampaign preferred)</li>
          <li>Excellent written communication skills</li>
          <li>High attention to detail and accountability</li>
          <li>
            Ability to work independently, proactively, and with minimal
            supervision
          </li>
        </ul>

        {/* 30-60-90 */}
        <h2 className="ja-section-title">30-60-90 Day Success Plan</h2>

        <h3 className="ja-subsection-title">
          First 30 Days – System Mastery &amp; Foundation
        </h3>
        <ul className="ja-list">
          <li>Full working knowledge of Canopy</li>
          <li>Review, clean up, and organize all existing tasks</li>
          <li>Canopy automations set up and actively used</li>
          <li>Weekly task review system established</li>
          <li>Confident, independent use of Canopy</li>
        </ul>
        <p className="ja-outcome">
          <strong>Outcome</strong>: Canopy is fully owned, organized, and
          actively managed.
        </p>

        <h3 className="ja-subsection-title">
          First 60 Days – CRM &amp; Workflow Optimization
        </h3>
        <ul className="ja-list">
          <li>Full ownership of ActiveCampaign</li>
          <li>CRM clean, accurate, and well-structured</li>
          <li>Automations and workflows built for leads and clients</li>
          <li>Independent CRM management</li>
        </ul>
        <p className="ja-outcome">
          <strong>Outcome</strong>: ActiveCampaign reliably supports lead
          tracking and client communication.
        </p>

        <h3 className="ja-subsection-title">
          First 90 Days – Full Role Ownership
        </h3>
        <ul className="ja-list">
          <li>
            Independent management of:
            <ul className="ja-list ja-list--sub">
              <li>Canopy</li>
              <li>ActiveCampaign</li>
              <li>Email responsiveness</li>
              <li>Communication follow-ups</li>
            </ul>
          </li>
          <li>Ability to anticipate needs and solve problems proactively</li>
          <li>Minimal oversight required</li>
        </ul>
        <p className="ja-outcome">
          <strong>Outcome</strong>: The Administrative Assistant operates as a
          trusted, autonomous extension of leadership.
        </p>

        {/* WHAT WE OFFER */}
        <h2 className="ja-section-title">What We Offer</h2>
        <ul className="ja-list">
          <li>100% remote position (Mexico-based)</li>
          <li>
            Gross monthly salary of <strong>$1,100–$1,600</strong> USD, based on
            experience
          </li>
          <li>Full-time, long-term opportunity</li>
          <li>Direct collaboration with firm leadership</li>
          <li>Clear systems, expectations, and success metrics</li>
          <li>Professional, structured, and mission-driven work environment</li>
          <li>
            Opportunity to grow into expanded operations or management
            responsibilities
          </li>
        </ul>
      </div>

      {/* APPLY FOOTER */}
      <div className="ja-footer">
        <p className="ja-footer__text">
          If you like to apply, please send your CV and a copy of your Contador
          Público
          <br />
          Certificado to our email and we will get back to you as soon as
          possible!
        </p>

        <a className="ja-apply-btn" href="mailto:info@talentumunion.com">
          Apply
        </a>
      </div>
    </>
  );
};

export default Administrative_Assistant;
