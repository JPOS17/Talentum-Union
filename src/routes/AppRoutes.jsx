import { Routes, Route, Navigate, useLocation } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import SearchTalent from "../pages/SearchTalent";
import JobBoard from "../pages/JobBoard";
import FAQs from "../pages/FAQs";
import ContactUs from "../pages/ContactUs";

import Finance_Accounting from "../pages/searchtalent/Finance_Accounting";
import VirtualAssistants_Customer_Support from "../pages/searchtalent/Virtual_Assistants_Customer_Support";
import Marketing_Sales from "../pages/searchtalent/Marketing_Sales";
import Data_IT_Engineering from "../pages/searchtalent/Data_IT_Engineering";

import Administrative_Assistant from "../pages/job_applications/Adminstrative_Assistant";
import Audit_Assurance_Manager from "../pages/job_applications/Audit_Assurance_Manager";
import Remote_Copywriter from "../pages/job_applications/Remote_Copywriter";
import Executive_Operations_Specialist from "../pages/job_applications/Executive_Operations_Specialist";
import Staff_Accountant from "../pages/job_applications/Staff_Accountant";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/search-talent" element={<SearchTalent />} />
      <Route path="/job-board" element={<JobBoard />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/contact" element={<ContactUs />} />
      {/* Search Talent Navigation */}
      <Route path="/finance-accounting" element={<Finance_Accounting />} />
      <Route
        path="/virtual-assistants-customer-support"
        element={<VirtualAssistants_Customer_Support />}
      />
      <Route path="/marketing-sales" element={<Marketing_Sales />} />
      <Route path="/data-IT-engineering" element={<Data_IT_Engineering />} />
      {/* Job Applications */}
      <Route
        path="/administrative-assistant"
        element={<Administrative_Assistant />}
      />
      <Route
        path="/audit-assurance-manager"
        element={<Audit_Assurance_Manager />}
      />
      <Route path="/remote-copywriter" element={<Remote_Copywriter />} />{" "}
      <Route
        path="/executive-operations-specialist"
        element={<Executive_Operations_Specialist />}
      />{" "}
      <Route path="/staff-accountant" element={<Staff_Accountant />} />
    </Routes>
  );
};

export default AppRoutes;
