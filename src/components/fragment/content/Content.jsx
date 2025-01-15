import { useContext } from "react";
import { SkeletonTable } from "./SkeletonTable";
import { TableContent } from "./Table";
import { Loading } from "../../../context/LoadingSkeletonContext";

const Content = () => {

    const{isLoading} = useContext(Loading)

  return (
    <div className="flex-auto text-white">
      <div className="p-4 pt-8 w-full">
        <div className="overflow-auto">
          {isLoading ? <SkeletonTable />  : <TableContent />}
        </div>
      </div>
    </div>
  );
};

export default Content;
