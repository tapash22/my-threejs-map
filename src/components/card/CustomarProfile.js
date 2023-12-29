const CustomarProfile = ({customer}) =>{
    return (
        <div className="w-full shadow-lg shadow-indigo-800 py-6 block hover-scale-125 cursor-pointer">
        <span className="w-full text-xl text-white font-bold tracking-wide py-2 px-4 border border-indigo-800 border-l-4 border-t-0 border-b-0 border-r-0 bg-indigo-700 opacity-75">
        {customer.tag}
        </span>
        <p className="text-sm font-normal py-10 px-5 text-justify tracking-wide ">
            {customer.message}
            Ex aliqua ea dolore non aliqua consequat.
        </p>
        <div className="flex justify-between w-full px-4">
            <div className="w-1/4 flex justify-start items-center ">
                <img src={customer.image} alt="customer" className="w-16 h-16 object-cover ring-2 ring-indigo-950 shadow-lg shadow-indigo-900 rounded-full p-1  transition-all ease-in-out delay-75 "  />
            </div>
            <div className="block px-2 py-2 w-3/4">
                <span className="text-xl font-bold py-1 ">
                    {customer.name}
                </span>
                <p className="text-sm font-medium">
                    {customer.info}
                </p>
            </div>
        </div>
        </div>
    )
}

export default CustomarProfile;