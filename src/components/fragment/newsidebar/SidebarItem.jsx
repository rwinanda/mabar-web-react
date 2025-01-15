import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SidebarItem = (props) => {
    const {icon, title, isClose} = props
    return(
        <li className="flex relative items-center py-2 px-1 my-1 font-montserrat font-medium cursor-pointer text-[#E3E3E3] rounded-md">
            <div className="flex hover:bg-[#434343] py-2 px-2 hover:rounded-full items-center">
                <FontAwesomeIcon icon={icon}/>
                <span className={`whitespace-nowrap ${isClose ? "w-52 ml-3" : "hidden"}`}>
                    {title}
                </span>
            </div>
        </li>
    );
};

SidebarItem.propTypes