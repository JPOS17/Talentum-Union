import "../styles/ContactUs.css";

const laptopImg =
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ContactUs = () => {
  return (
    <div className="cu-page">
      {/* LEFT SIDEBAR */}
      <aside className="cu-sidebar">
        <img
          src={laptopImg}
          alt="Person working on laptop"
          className="cu-sidebar__img"
        />

        <div className="cu-sidebar__hours">
          <p className="cu-sidebar__hours-title">Working Hours:</p>
          <p>Open – Mon-Fri 9am – 6pm CST</p>
          <p>Closed – Saturday and Sunday</p>
        </div>

        <div className="cu-sidebar__social">
          <p className="cu-sidebar__social-title">Follow Us</p>
          <a
            href="https://www.linkedin.com/company/talentum-union-llc/"
            target="_blank"
            rel="noopener noreferrer"
            className="cu-sidebar__linkedin"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="28"
              height="28"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </aside>

      {/* CONTACT FORM */}
      <main className="cu-form-wrap">
        <h1 className="cu-form__title">Contact Us</h1>
        <p className="cu-form__subtitle">
          We'd love to connect with you! Tell us about your hiring needs, and
          one of our team members will reach out to support you as soon as
          possible.
        </p>

        <div className="cu-form">
          {/* Row 1 */}
          <div className="cu-form__row">
            <div className="cu-form__field">
              <label className="cu-form__label">First Name*</label>
              <input type="text" className="cu-form__input" />
            </div>
            <div className="cu-form__field">
              <label className="cu-form__label">Last Name*</label>
              <input type="text" className="cu-form__input" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="cu-form__row">
            <div className="cu-form__field">
              <label className="cu-form__label">Company Name</label>
              <input type="text" className="cu-form__input" />
            </div>
            <div className="cu-form__field">
              <label className="cu-form__label">Email*</label>
              <input type="email" className="cu-form__input" />
            </div>
          </div>

          {/* Subject */}
          <div className="cu-form__row cu-form__row--half">
            <div className="cu-form__field">
              <label className="cu-form__label">Subject*</label>
              <input type="text" className="cu-form__input" />
            </div>
          </div>

          {/* Radio */}
          <div className="cu-form__field">
            <p className="cu-form__label">I am looking...</p>
            <label className="cu-form__radio">
              <input type="radio" name="inquiry" value="hire" /> To hire
            </label>
            <label className="cu-form__radio">
              <input type="radio" name="inquiry" value="job" /> For a job
            </label>
            <label className="cu-form__radio">
              <input type="radio" name="inquiry" value="other" /> Other inquiry
            </label>
          </div>

          {/* Message */}
          <div className="cu-form__field">
            <label className="cu-form__label">Message</label>
            <textarea className="cu-form__textarea" rows={5} />
          </div>

          {/* Submit */}
          <div className="cu-form__submit-wrap">
            <button className="btn btn--orange cu-form__submit">Submit</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
