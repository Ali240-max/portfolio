import { Outlet, useLocation } from "react-router";
import TopNav from "./TopNav";

function Main() {
  const location = useLocation();
  let heading = location.pathname.split("/")[1];
  heading = heading === "about" ? "About me" : heading;

  return (
    <div className="bg-lightgrayy rounded-xl px-8 py-10 flex-1 relative  max-xs:px-4 overflow-y-scroll ">
      <TopNav />
      <Outlet />
    </div>
  );
}

export default Main;
