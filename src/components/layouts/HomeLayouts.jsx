// import Content from "../fragment/content/Content";
import { useEffect } from "react";
import Content from "../fragment/content/Content";
import { NewSidebar } from "../fragment/newsidebar/sidebar";
import Sidebar from "../fragment/sidebar/Sidebar";
import { CookiesHandler } from "../../context/CookiesContext";

const HomeLayouts = () => {

  CookiesHandler();

  return (
    <div className="flex min-h-svh w-full bg-[#111111]">
      {/* <nav className="flex p-2.5 md:hidden relative">
        <div className="absolute">
          <button>
            <img src={HomeLogo} alt="" />
          </button>
        </div>
        <div className="flex justify-center w-full">
          <img src={MabarLogo} alt="" className="w-20"/>
        </div>
      </nav> */}
      {/* <Sidebar /> */}
      <NewSidebar />
      <Content />
    </div>
  );
};

export default HomeLayouts;
