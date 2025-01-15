import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../assets/assets";
import { faHouse, faMessage, faSlidersH, faUser } from "@fortawesome/free-solid-svg-icons";
// import { iconName } from "@fortawesome/free-solid-svg-icons/faHouse";
import { SidebarItem } from "./SidebarItem";
import { useState } from "react";

export const NewSidebar = () => {
    // Handling sidebar close
    const [isClose, setIsClose] = useState(false);
    const toggleClose = () => {
        setIsClose((close) => {
            const setupClose = !close;
            console.log(setupClose);
            return setupClose;
        });
    }
    return (
        <div className="h-screen">
            <div className="h-full flex flex-col bg-[#202020] shadow-sm">
                {/* Header */}
                <div className={`p-4 pb-2 flex items-center ${isClose ? "justify-between" : ""}`}>
                    <img src={Logo.MabarLogo} alt="header-sidebar" className={`overflow-hidden transition-all duration-300 cursor-pointer ${isClose ? "h-8" : "h-0"}`}/>
                    <button onClick={toggleClose} className="ml-2 p-1.5">
                        <FontAwesomeIcon icon={faSlidersH} className="text-[#E3E3E3]"/>
                    </button>
                </div>
                {/* Content */}
                <div className="flex-1 px-3 mt-4">
                        <SidebarItem icon={faHouse} isClose={isClose} title="Home"/>
                        <SidebarItem icon={faMessage} isClose={isClose} title="Message"/>
                </div>

                {/* Footer */}
                <div className="flex p-3 font-montserrat border-t-2 pt-2 border-slate-700">
                    <div className="flex cursor-pointer">
                        <FontAwesomeIcon icon={faUser} className="w-10 h-10" />
                    </div>
                    <div className={`overflow-hidden flex ml-3 items-center transition-all duration-300 ${isClose ? "w-52" : "w-0"}`}>
                        <div className="leading-4">
                            <h4 className="font-semibold text-[#E3E3E3] whitespace-nowrap">Mochammad Winanda Hidayat</h4>
                            <span className="text-xs text-[#E3E3E3]">winanda@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};