import { GiCarWheel } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPaintRoller } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";
import { FaAssistiveListeningSystems } from "react-icons/fa";

const CarServices = [
    {
        id:1,
        name:'Wheel',
        icon: <GiCarWheel style={{ fontSize: '80px' }}  className="scale-100 text-white font-medium hover:scale-125 transition-all duration-100 hover:duration-100"  />,
        info:'Balencing'
    },
    {
        id:2,
        name:'Sound',
        icon: <GiSoundOn style={{ fontSize: '80px' }} className="text-3xl scale-100 text-white font-medium hover:scale-125 transition-all duration-300 hover:duration-300"  />,
        info:'Audio Installation'
    },
    {
        id:3,
        name:'Auto Painting',
        icon: <FaPaintRoller style={{ fontSize: '80px' }} className="text-3xl scale-100 text-white font-medium hover:scale-125 transition-all duration-300 hover:duration-300"  />,
        info:'Repairing'
    },
    {
        id:4,
        name:'Audio System',
        icon: <FaAssistiveListeningSystems style={{ fontSize: '80px', }} className="text-3xl scale-100 text-white font-medium hover:scale-125 transition-all hover:duration-300"  />,
        info:'Installation'
    },
    {
        id:5,
        name:'Car Repair',
        icon: <IoSettingsOutline style={{ fontSize: '80px',  }} className="text-3xl scale-100 text-white font-medium hover:scale-125 transition-all duration-300 hover:duration-300"  />,
        info:'Repairing'
    },
]

export default CarServices;