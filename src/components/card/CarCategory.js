import { FaLocationArrow } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import {useState} from 'react';

const CarCategory = ({ carT }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const onHover =()=>{
        setIsDarkMode(true);
    }

    const onHoverOut =()=>{
        setIsDarkMode(false);
    }


  return (
    <div className="block relative border border-b cursor-pointer" onMouseOver={onHover} onMouseOut={onHoverOut}>
      <div className={`w-full h-auto py-3 px-2 ${isDarkMode ? 'bg-indigo-800 dark:text-white' : 'bg-white text-indigo-900'}`} >
        <div className="flex justify-center">
          <img src={carT.image} alt="" />
        </div>
        <p className={`text-xl font-bold py-3 text-center w-full uppercase ${isDarkMode ? 'text-white':'text-indigo-900'}  tracking-wide`}>
          {
            isDarkMode ? carT.info : carT.name
          }
        </p>

        <ul className="absolute top-2 right-1 block list-none px-1 ">
          <li className="flex">
            <IoSpeedometer className={`font-bold text-xl px-1 ${isDarkMode ? 'text-white' :'text-indigo-900'}`} />
            <span className={`text-sm font-medium tracking-wide ${isDarkMode ? 'text-white' :'text-indigo-900'}`}>
              {carT.mph}
            </span>
          </li>
          <li className="flex">
            <FaLocationArrow className={`font-bold text-xl px-1 ${isDarkMode ? 'text-white' :'text-indigo-900'}`} />
            <span className={`text-sm font-medium tracking-wide ${isDarkMode ? 'text-white' :'text-indigo-900'}`}>
              {carT.model}
            </span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default CarCategory;
