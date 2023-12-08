const CardList = ({carI}) =>{
    return (
        <div className="relative cursor-pointer block w-full h-auto ring-1 ring-indigo-600 rounded-lg my-5 py-2 group  shadow-lg shadow-indigo-700">
        <div className="flex justify-between ">
            <div className='w-11/12 h-auto px-2 bg-indigo-900 rounded-tr-xl rounded-br-xl'>
                <p className="text-sm font-normal text-justify tracking-wider text-white py-2 px-2 flex justify-center ">
                    Mollit ut incididunt ipsum sint. Officia do enim ut aute dolor fugiat pariatur est. Eiusmod magna sunt nisi enim exercitation voluptate esse velit tempor nostrud magna laborum. Incididunt laboris pariatur reprehenderit minim dolore. Aliquip magna laborum ut Lorem nulla nulla nostrud elit deserunt non laborum. Commodo pariatur irure id aute irure velit amet ullamco voluptate tempor adipisicing sunt. Laborum veniam elit veniam non voluptate veniam do consequat sit eu incididunt aliqua.
                </p>
            </div>
            <div className="w-1/12 h-auto flex justify-center items-center py-2 ">
                <img src={carI.image} alt="" className="h-16 w-16 rounded-full ring-2 ring-indigo-700 p-2 bg-white shadow-xl shadow-indigo-700" />
            </div>
        </div>

        <div className="absolute inset-0 bg-gray-950 from-transparent  opacity-0 group-hover:opacity-70 transform scale-x-0 group-hover:scale-x-100  transition-all origin-left duration-300 rounded-lg">

        </div>
    </div>
    )
}

export default CardList;