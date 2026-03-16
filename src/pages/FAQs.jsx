import { useState } from "react";
import "../styles/FAQs.css";

const FAQBubbleIcon = () => (
  <svg width="140" height="140" viewBox="0 0 140 160">
    {/* Layer 1 (bottom): back bubble */}
    <rect
      x="36"
      y="48"
      width="100"
      height="80"
      rx="13"
      fill="none"
      stroke="#0d3b5e"
      strokeWidth="7"
    />
    <polygon points="100,128 120,128 120,148" fill="#0d3b5e" />

    {/* Layer 2 (middle): front bubble */}
    <rect x="4" y="14" width="104" height="84" rx="13" fill="white" />
    <rect
      x="4"
      y="14"
      width="104"
      height="84"
      rx="13"
      fill="none"
      stroke="#0d3b5e"
      strokeWidth="7"
    />
    <polygon points="10,98 30,98 10,118" fill="#0d3b5e" />

    {/* Layer 3 (top): question mark */}
    <text
      x="56"
      y="50"
      textAnchor="middle"
      fontFamily="'Segoe UI', Arial, sans-serif"
      fontSize="70"
      fontWeight="600"
      fill="#0d3b5e"
      dominantBaseline="central"
      style={{ userSelect: "none" }}
    >
      ?
    </text>
  </svg>
);

const discussingImg =
  "https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg";

const workingQuestions = [
  {
    q: "What are the benefits of hiring through Talentum Union?",
    a: (
      <ul className="faq-list">
        <li>
          <strong>Cost Efficiency:</strong> Hire top talent at competitive rates
          without sacrificing quality.
        </li>
        <li>
          <strong>Time Zone Compatibility:</strong> Work seamlessly with
          professionals in aligned or overlapping time zones.
        </li>
        <li>
          <strong>Cultural Fit:</strong> Collaborate with professionals who
          understand and adapt to U.S. business culture.
        </li>
        <li>
          <strong>English Proficiency:</strong> Our candidates are screened for
          strong communication skills in English.
        </li>
      </ul>
    ),
  },
  {
    q: "Can you help us find talent based in the U.S.?",
    a: (
      <p>
        <strong>Yes</strong>, while our specialty is connecting businesses with
        top professionals in Latin America, we also place candidates in the U.S.
        upon request.
      </p>
    ),
  },
  {
    q: "How does your pricing work?",
    a: (
      <>
        <p>
          At Talentum Union, we provide a straightforward placement service with
          the option to add contractor payroll management if needed.
        </p>
        <ul className="faq-list">
          <li>
            <strong>Talent Search Only:</strong> We help you find and hire the
            right candidate through a competitive, one-time placement fee.
          </li>
          <li>
            <strong>Contractor Payroll Management:</strong> For a fixed monthly
            fee per contractor, we handle payments, invoicing, and payroll
            records to ensure smooth and reliable operations.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "How is payroll handled?",
    a: "Talentum Union can manage payroll for you as part of our Contractor Payroll Management service. Alternatively, if you prefer to handle it internally, we can work alongside your existing payroll processes or recommend trusted global payroll partners.",
  },
  {
    q: 'What does "Risk-Free Hiring" mean at Talentum Union?',
    a: (
      <p>
        At Talentum Union, <strong>"Risk-Free Hiring"</strong> means you can
        interview our carefully pre-vetted candidates at no cost. If you decide
        not to hire anyone, you don't pay a thing. You only pay when you
        successfully hire talent that meets your expectations, with no upfront
        fees and no commitment until you're confident.
      </p>
    ),
  },
];

const recruitingQuestions = [
  {
    q: "How do you evaluate or screen candidates?",
    a: "All candidates go through a multi-step evaluation process, including English assessments, skill testing, reference checks, and background screenings. We ensure only the most qualified professionals are presented to you.",
  },
  {
    q: "Do your candidates have international experience?",
    a: (
      <p>
        <strong>Yes</strong>, we ensure our candidates have worked with
        multinational companies and possess experience aligned with U.S.
        standards, including familiarity with tools, platforms, and regulatory
        requirements.
      </p>
    ),
  },
  {
    q: "How long does it take to hire?",
    a: (
      <p>
        You can expect to see strong candidates within{" "}
        <strong>5–10 days</strong>. The process from consultation to hire
        typically takes <strong>about 2–3 weeks</strong>, depending on your
        needs and hiring timeline.
      </p>
    ),
  },
  {
    q: "Do I need to sponsor visas or handle international compliance?",
    a: (
      <p>
        <strong>No.</strong> Since our candidates are based in Latin America,
        you don't need to provide visa sponsorship. We can also connect you with
        payment and compliance partners if needed.
      </p>
    ),
  },
];

const AccordionItem = ({ question, answer, id, openId, setOpenId }) => {
  const isOpen = openId === id;

  return (
    <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
      <button
        className="faq-item__question"
        onClick={() => setOpenId(isOpen ? null : id)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="faq-item__icon">{isOpen ? "−" : "+"}</span>
      </button>

      <div className="faq-item__answer-wrap">
        <div className="faq-item__answer">
          {typeof answer === "string" ? <p>{answer}</p> : answer}
        </div>
      </div>
    </div>
  );
};

const FAQs = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <section className="faq-hero">
        <div className="faq-hero__text">
          <h1 className="faq-hero__title">FAQs</h1>
          <p className="faq-hero__body">
            Find clear answers to common inquiries about our services,
            processes, and how Talentum Union supports your business with
            exceptional remote talent from Latin America.
          </p>
        </div>
        <div className="faq-hero__image">
          <img src={discussingImg} alt="Two people discussing" />
        </div>
      </section>

      <section className="faq-accordion">
        <div className="faq-accordion__inner">
          <div className="faq-accordion__icon">
            <FAQBubbleIcon />
          </div>

          <div className="faq-accordion__columns">
            <div className="faq-col">
              <h2 className="faq-col__title">
                Questions About Working with Talentum Union
              </h2>
              {workingQuestions.map(({ q, a }, i) => (
                <AccordionItem
                  key={`w-${i}`}
                  id={`w-${i}`}
                  question={q}
                  answer={a}
                  openId={openId}
                  setOpenId={setOpenId}
                />
              ))}
            </div>

            <div className="faq-col">
              <h2 className="faq-col__title">Questions About Recruiting</h2>
              {recruitingQuestions.map(({ q, a }, i) => (
                <AccordionItem
                  key={`r-${i}`}
                  id={`r-${i}`}
                  question={q}
                  answer={a}
                  openId={openId}
                  setOpenId={setOpenId}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
