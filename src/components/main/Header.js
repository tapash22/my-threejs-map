import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo/logo_sm.png";
import { FaBars } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { useState } from "react";

const Header = () => {

    const lists = [
        {
            id: 1,
            name: 'Home',
            link: '/',
        },
        {
            id: 2,
            name: 'Cars',
            link: '#',
            children: [
                {
                    id: 1,
                    name: 'Corrola',
                    link: '/Corrola',
                },
                {
                    id: 2,
                    name: 'Range Rover',
                    link: '/rangeRover',
                },
                {
                    id: 3,
                    name: 'Land Cruser',
                    link: '/landCurser',
                }
            ]
        },
        {
            id: 3,
            name: 'About',
            link: '/about',
        },
        {
            id: 4,
            name: 'Contact',
            link: '/contact',
        },
    ];
    const [show, setShow] = useState(false);
    const [child, setChild] = useState(false);

    const showNav = () => {
        setShow(!show);
    };

    const childView = () =>{
            setChild(!child);
    }

    // const childP = lists.children.map((list) => (
    //     <li >
    //         <NavLink
    //             to={list.link}
    //             className="text-sm font-bold text-white tracking-wider"
    //         ></NavLink>
    //     </li>
    // ));

    return (
        <div className="bg-indigo-950 px-16 py-5 flex ring-1 ring-gray-200 w-full h-auto shadow-lg shadow-indigo-500 fixed z-50">
            <div className="w-1/4 flex justify-start items-center">
                <Link to="/">
                    <img src={logo} alt="" className="py-2 scale-125" />
                </Link>
            </div>
            <div className="flex justify-end items-center w-2/4 px-2">
                <form className="flex justify-end w-full h-auto">
                    <input type="text" className="w-full h-8 py-2 px-3 rounded-tl-lg rounded-bl-lg bg-white text-sm font-medium tracking-wide " />
                    <button className="px-3 py-1 rounded-tr-lg rounded-br-lg bg-gray-400"><ImSearch className="text-lg font-bold" /></button>

                </form>
            </div>
            <div className="flex justify-end items-center w-1/4">
                <div className="block p-0 m-0 relative ">
                    <button onClick={showNav} className="w-full z-50">
                        <FaBars className="text-2xl font-bold text-white cursor-pointer" />
                    </button>
                    {/* {show && ( */}
                    <ul
                        className={`list-none block gap-5 bg-indigo-950 rounded-br-lg rounded-bl-lg p-5 absolute top-14  transform transition-transform ease-in-out duration-300 ${show ? 'translate-y-0 opacity-100 z-0 right-0' : 'translate-y-[-100%] opacity-0 z-0 right-8'
                            }`}
                    >
                        {lists.map((list) => (
                            <li key={list.id} className="py-1 relative">
                                <NavLink
                                    to={list.link}
                                    className="text-sm font-bold text-white tracking-wider"
                                    onClick={childView}
                                >
                                    {list.name}
                                    {list.children && list.children.length > 0 && child && (
                                    <ul className={`block py-1  ${show ? 'translate-y-0 opacity-100 z-0 right-0' : 'translate-y-[-100%] opacity-0 z-0 right-0'
                                }`}>
                                    
                                        {list.children.map((child) => (
                                            <li key={child.id} className="py-1">
                                                <NavLink
                                                    to={child.link}
                                                    className="text-sm font-medium text-white"
                                                >
                                                    {child.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                </NavLink>



                            </li>
                        ))}
                    </ul>
                    {/* )} */}
                </div>

            </div>
        </div>
    );
};

export default Header;
