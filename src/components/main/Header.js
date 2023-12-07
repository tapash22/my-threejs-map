import { NavLink } from "react-router-dom";
import car from "../../assets/car.png";

const Header = () => {

    const lists= [
        {
            id:1,
            name:'Home',
            link:'/',
        },
        {
            id:2,
            name:'About',
            link:'/about',
        },
        {
            id:3,
            name:'Contact',
            link:'/contact',
        },
    ];

  return (
    <div className="bg-gray-800 px-10 py-2 flex ring-1 ring-gray-200 w-full h-auto shadow-lg shadow-indigo-500">
        <div className="w-1/4 flex justify-start items-center">
        <img src={car} alt="" className="h-12 w-12" />
        </div>
        <div className="flex justify-end items-center w-3/4">
            <ul className="list-none flex bg-transparent gap-5">
                {
                lists.map((list)=>{
                    return (
                        <li key={list.id} >
                            <NavLink to={list.link} className="text-sm font-medium underline underline-offset-4 text-white tracking-wider">{list.name}</NavLink>
                        </li>
                    )
                })
               }
            </ul>
        </div>
    </div>
  );
};

export default Header;
