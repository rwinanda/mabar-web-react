import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterSidebar = () => {
  return (
    <div className="flex p-3 font-montserrat border-t-2 pt-2 border-slate-700">
      <div className="flex cursor-pointer">
        <FontAwesomeIcon icon={faUser} className="h-10" />
      </div>
      <div className="flex ml-3 items-center w-52">
        <div className="leading-4">
          <h4 className="font-semibold text-[#E3E3E3]">Mochammad Winanda</h4>
          <span className="text-xs text-[#E3E3E3]">winanda@gmail.com</span>
        </div>
      </div>
    </div>
  );
};
