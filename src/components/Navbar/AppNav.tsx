import BottomNav from "./BottomNav";
import Sidebar from "./sideBar";

const AppNav = () => {
  return (
    <>
      <Sidebar />
      <div className="fixed bottom-0 w-screen z-20 md:hidden">
        <BottomNav />
      </div>
    </>
  );
};

export default AppNav;
