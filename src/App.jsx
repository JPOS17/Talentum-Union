import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import ScheduleSection from "./components/ScheduleSection";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <div>
        <ScrollToTop />
        <NavBar />
        <AppRoutes />
        {pathname !== "/contact" && <ScheduleSection />}
        <Footer />
      </div>
    </>
  );
}

export default App;
