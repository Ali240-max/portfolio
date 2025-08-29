import BottomNav from "./BottomNav";
import Main from "./Main";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex h-screen max-lg:h-full w-screen bg-darkgray px-15 py-15 gap-6 max-lg:gap-4 font-poppins max-lg:flex-col max-sm:px-4 max-sm:py-8 relative">
      <Sidebar />
      <Main />
      <BottomNav />
    </div>
  );
}

export default AppLayout;
