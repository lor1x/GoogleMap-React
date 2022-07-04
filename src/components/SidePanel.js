import { useContext } from "react";
import { ActiveContext } from "../components/ActiveContext";

export default function SidePanel({ markers }) {
  const { active, setActive } = useContext(ActiveContext);

  return (
    <div className="flex flex-col w-full h-full items-center overflow-y-scroll">
      {markers.map((el) => (
        <div
          key={el.id}
          className={`w-full border-slate-300 border-[1px] hover:bg-slate-400 hover:text-white flex flex-row p-4 py-10 cursor-pointer ${
            active === el.id
              ? " bg-slate-400 text-white "
              : " bg-white text-black "
          }`}
          onClick={() => setActive(el.id)}
        >
          <p className="w-1/2 text-lg">{el.name}</p>
          <p className="w-1/2 text-lg text-center">{el.location}</p>
        </div>
      ))}
    </div>
  );
}
