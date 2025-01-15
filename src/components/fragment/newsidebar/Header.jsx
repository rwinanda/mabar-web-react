import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../assets/assets";
import { useContext } from "react";

export const HeaderSidebar = (props) => {
    const {toggleSidebar} = props;
  return (
    <div className="p-4 pb-2 flex justify-between items-center">
      <img
        src={Logo.MabarLogo}
        alt="header-sidebar"
        className="w-24 cursor-pointer"
      />
      <button onClick={toggleSidebar} className="p-1.5">
        <FontAwesomeIcon icon={faSlidersH} className="text-[#E3E3E3]" />
      </button>
    </div>
  );
};
