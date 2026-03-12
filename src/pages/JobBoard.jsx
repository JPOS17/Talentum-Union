import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/JobBoard.css";

const jobs = [
  {
    id: 1,
    position: "Remote Copywriter",
    area: "Marketing & Sales",
    status: "Filled",
    statusDate: "Dec 2025",
    route: "/remote-copywriter",
  },
  {
    id: 2,
    position: "Executive Operations Specialist",
    area: "Virtual Assistants & Customer Support",
    status: "Filled",
    statusDate: "Nov 2025",
    route: "/executive-operations-specialist",
  },
  {
    id: 3,
    position: "Staff Accountant",
    area: "Accounting",
    status: "Filled",
    statusDate: "Sept 2025",
    route: "/staff-accountant",
  },
  {
    id: 4,
    position: "Administrative Assistant",
    area: "Virtual Assistants & Customer Support",
    status: "Open",
    statusDate: null,
    route: "/administrative-assistant",
  },
  {
    id: 5,
    position: "Audit & Assurance-Manager",
    area: "Accounting",
    status: "Open",
    statusDate: null,
    route: "/audit-assurance-manager",
  },
];

const JobBoard = () => {
  const [query, setQuery] = useState("");

  const filtered = jobs.filter(
    (job) =>
      job.position.toLowerCase().includes(query.toLowerCase()) ||
      job.area.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      {/* INFO */}
      <section className="jb-hero">
        <h1 className="jb-hero__title">Job Board</h1>

        <div className="jb-hero__search">
          <input
            type="text"
            className="jb-hero__input"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <p className="jb-hero__body">
          Ready to take your career to the next level? Apply now and discover
          new opportunities to grow, learn, and achieve your professional goals.
        </p>
      </section>

      {/* JOB TABLE */}
      <section className="jb-table-wrap">
        <table className="jb-table">
          <thead>
            <tr>
              <th>Job Position</th>
              <th>Area</th>
              <th>Details</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((job) => (
                <tr key={job.id}>
                  <td className="jb-table__position">{job.position}</td>
                  <td>{job.area}</td>
                  <td>
                    <Link to={job.route} className="btn btn--orange">
                      View Details
                    </Link>
                  </td>
                  <td className="jb-table__status">
                    {job.status === "Filled"
                      ? `Filled – ${job.statusDate}`
                      : "Open"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="jb-table__empty">
                  No positions match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default JobBoard;
