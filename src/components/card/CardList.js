const CardList = ({carI}) =>{
    return (
        <div className="relative cursor-pointer block w-full h-auto ring-1 ring-indigo-600 rounded-lg my-5 py-2 group  shadow-lg shadow-indigo-700">
        <div className="flex justify-between ">
            <div className='w-11/12 h-auto px-2 bg-indigo-900 rounded-tr-xl rounded-br-xl'>
                <p className="text-sm font-normal text-justify tracking-wider text-white py-2 px-2 flex justify-center ">
                    {carI.details}
                </p>
            </div>
            <div className="w-1/12 h-auto flex justify-center items-center py-2 ">
                <img src={carI.image} alt="" className="h-16 w-16 rounded-full ring-2 ring-indigo-700 p-1 bg-white shadow-xl shadow-indigo-700" />
            </div>
        </div>

        <div className="absolute inset-0 bg-indigo-950 from-transparent  opacity-50 group-hover:opacity-0 transform scale-x-100 group-hover:scale-x-0  transition-all origin-left duration-500 rounded-lg">

        </div>
    </div>
    )
}

export default CardList;