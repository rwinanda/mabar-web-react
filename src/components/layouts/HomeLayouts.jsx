import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import MabarLogo from "../../assets/images/mabar-dev-logo.svg";
import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";


const HomeLayouts = () => {
  return (
    <div className="flex min-h-screen bg-[#111111]">
      {/* Sidebar */}
      <div className="sidebar flex flex-col fixed lg:p-2 w-[260px] top-0 bottom-0 text-center bg-[#202020]">
        {/* Header Logo */}
        <div className="p-2.5 mt-1 flex items-center">
          <img src={MabarLogo} alt="" />
        </div>
        {/* Menu */}
        <div className="overflow-y-auto">
          <div className="mt-3 flex rounded-md py-2 duration-300 cursor-pointer text-[#E3E3E3] font-montserrat">
            <div className="px-4 py-2 ml-2 hover:bg-[#434343] hover:rounded-full ">
              <FontAwesomeIcon icon={faHouse} />
              <span className="text-[15px] ml-[24px] font-bold">Home</span>
            </div>
          </div>
          <div className="mt-3 flex rounded-md py-2 duration-300 cursor-pointer  text-[#E3E3E3] font-montserrat">
            <div className="px-4 py-2 ml-2 hover:bg-[#434343] hover:rounded-full items-center">
              <FontAwesomeIcon icon={faMessage} />
              <span className="text-[15px] ml-[24px] font-bold">Message</span>
            </div>
          </div>
        </div>
        {/* Profile */}
        <div className="mt-auto flex border-t-2 pt-2 border-slate-700 text-[#E3E3E3] font-montserrat ">
          <div className="flex px-4 py-2 ml-2 hover:bg-[#434343] hover:rounded-full">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="flex flex-col ml-[24px] items-start">
              <span className="text-[15px] font-bold">Atharian</span>
              <span className="text-[15px] font-bold">User</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayouts;
