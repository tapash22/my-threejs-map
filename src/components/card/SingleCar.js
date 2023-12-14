import { FaLocationArrow } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";

const SingleCar = ({ carl }) => {
  return (
    <div className="w-full h-auto  py-2 block shadow-lg shadow-indigo-500">
      <div className="flex justify-start  w-full px-0 items-center py-5 rounded-tl-full rounded-br-full bg-gray-200  shadow-lg shadow-indigo-500">
        <img
          src={carl.image}
          alt=""
          className=" w-[240px] h-[168px] px-2 object-cover scale-100 rounded-3xl translate-x-0 hover:translate-x-16 transition-all duration-100 hover:duration-100"
        />
      </div>
      <div
        className="w-full h-auto px-5 py-5 block my-1"
        style={{ borderTop: "1px solid gold" }}
      >
        <span className="text-lg font-bold py-1 text-indigo-950">
          {carl.name}
        </span>
        <div className="flex justify-between gap-2 py-2">
          <p className="flex w-1/2 border border-indigo-950 border-r-2 border-l-0 border-t-0 border-b-0">
            <IoSpeedometer className="font-bold text-3xl px-2 py-1 text-indigo-950" />
            <span className="text-sm font-bold py-1 ">{carl.mph}</span>
          </p>
          <p className="flex justify-end w-1/2">
            <FaLocationArrow className="font-bold text-3xl px-2 py-1 text-indigo-950" />
            <span className="text-sm font-bold py-1 ">{carl.model}</span>
          </p>
        </div>
        <ul className="py-4 grid grid-cols-2 gap-3">
          {carl.features.map((f, i) => {
            return (
              <li
                key={i}
                className="flex justify-center text-sm text-white font-medium tracking-wide bg-indigo-900 px-2 py-1 rounded-xl "
              >
                {f}
              </li>
            );
          })}
        </ul>
        <p className=" flex justify-start w-full">
          <IoMdPricetags className="font-bold text-3xl px-2 py-1 text-indigo-950" />
          <span className="text-xl font-medium ">{carl.price}</span>
        </p>
      </div>
    </div>
  );
};

export default SingleCar;
