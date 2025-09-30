import { NavLink } from "react-router-dom";

import { logo } from "@/assets/images/index";
import { logEvent, analytics } from "@/lib/firebase";

const Navbar = () => {
  const handleNavClick = (label: string) => {
    if (analytics) {
      logEvent(analytics, "navbar_click", {
        category: "navigation",
        label: label,
      });
    }
  };

  return (
    <header className="header">
      <NavLink to="/" onClick={() => handleNavClick("logo")}>
        <img src={logo} alt="logo" className="logo object-contain" />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
          onClick={() => handleNavClick("About")}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
          onClick={() => handleNavClick("Projects")}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
