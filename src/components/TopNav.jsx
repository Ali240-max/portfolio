import { NavLink } from "react-router";

function TopNav() {
  return (
    <div className="bg-xlightgray px-5 py-5 rounded-bl-2xl absolute top-0 right-0 flex gap-12 text-white transition-all duration-300 max-lg:hidden">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue" : "hover:text-blue transition-all duration-300"
        }
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue" : "hover:text-blue transition-all duration-300"
        }
        to={"/resume"}
      >
        Resume
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue" : "hover:text-blue transition-all duration-300"
        }
        to={"/portfolio"}
      >
        Portfolio
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue" : "hover:text-blue transition-all duration-300"
        }
        to={"/contact"}
      >
        Contact
      </NavLink>
    </div>
  );
}

export default TopNav;
