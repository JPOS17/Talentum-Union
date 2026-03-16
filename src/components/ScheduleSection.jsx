import { useNavigate, Link } from "react-router-dom";
import "../styles/components/ScheduleSection.css";

const ScheduleSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="schedule-section">
        <div className="schedule-inner">
          <h2 className="schedule-headline">
            We'll find the right candidate for you.
          </h2>
          <p className="schedule-body">
            Finding top talent shouldn't slow you down. We'll help you hire the
            right people with a <strong>risk-free process.</strong> Interview
            candidates at no cost and pay only when you hire so you can focus on
            what you do best.
          </p>
          <a
            className="schedule-cta"
            href="https://calendly.com/talentumunion-info/"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </>
  );
};

export default ScheduleSection;