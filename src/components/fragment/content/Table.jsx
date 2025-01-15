export const TableContent = () => {
  return (
    <table className="w-full table-fixed">
      <thead className="border-b">
        <tr className="text-left font-montserrat text-[#d3d2d2]">
          <th className="pb-2 ">
            <div className="">Game</div>
          </th>
          <th className="pb-2 px-4">
            <div className="">
              Game Name
            </div>
          </th>
          <th className="pb-2 px-4">
            <div className="">
              Room Name
            </div>
          </th>
          <th className="pb-2 ">
            <div className="">Players</div>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="font-montserrat text-[#E3E3E3]">
          <td className="pt-2 ">
            <div className="">Valo</div>
          </td>
          <td className="pt-2 px-4">
            <div className="">Valorant</div>
          </td>
          <td className="pt-2 px-4">
            <div className="">
              Gaming Room
            </div>
          </td>
          <td className="pt-2 ">
            <div className="">
              Bisma, rian
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
