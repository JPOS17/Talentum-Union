import { useState } from "react";
import { Link } from "react-router-dom";
import { jobs } from "../data/jobsData";

import "../styles/Tokens.css";
import "../styles/JobBoard.css";

const JobBoard = () => {
  const [query, setQuery] = useState("");

  const filtered = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.area.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      {/* HERO */}
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
                <tr key={job.slug}>
                  <td className="jb-table__position" data-label="Job Position">
                    {job.title}
                  </td>
                  <td data-label="Area">{job.area}</td>
                  <td data-label="Details">
                    <Link to={`/jobs/${job.slug}`} className="btn btn--orange">
                      View Details
                    </Link>
                  </td>
                  <td className="jb-table__status" data-label="Status">
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
