import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const location = useLocation();

  // Hide Navbar and Footer on dashboard pages
  const hideLayout = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <Navbar />}

      <main>
        <Outlet />
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
