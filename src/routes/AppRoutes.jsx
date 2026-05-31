import { Routes, Route } from "react-router";

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

import JobPostingTemplate from "../components/JobPostingTemplate";

const AppRoutes = () => {
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

      {/* Job Applications — one route handles all postings */}
      <Route path="/jobs/:slug" element={<JobPostingTemplate />} />
    </Routes>
  );
};

export default AppRoutes;
