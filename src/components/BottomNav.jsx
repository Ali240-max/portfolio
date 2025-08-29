import { NavLink } from "react-router";

function BottomNav() {
  return (
    <div className="bg-stone-800/30 backdrop-blur-md border border-white/10 rounded-t-2xl shadow-lg py-3 px-4 text-white fixed bottom-0 left-0 w-full flex items-center justify-center gap-8 max-xs:gap-3 lg:hidden">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-blue max-xs:text-sm"
            : "hover:text-blue transition-all duration-300 max-xs:text-sm"
        }
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-blue max-xs:text-sm"
            : "hover:text-blue transition-all duration-300 max-xs:text-sm"
        }
        to={"/resume"}
      >
        Resume
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-blue max-xs:text-sm"
            : "hover:text-blue transition-all duration-300 max-xs:text-sm"
        }
        to={"/portfolio"}
      >
        Portfolio
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-blue max-xs:text-sm"
            : "hover:text-blue transition-all duration-300 max-xs:text-sm"
        }
        to={"/contact"}
      >
        Contact
      </NavLink>
    </div>
  );
}

export default BottomNav;
