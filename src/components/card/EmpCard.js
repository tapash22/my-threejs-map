const EmpCard = ({emp}) =>{
    return (
        <div className="h-auto w-full rounded-tl-full shadow-xl shadow-indigo-900 ">
                        <div className="w-full h-auto px-2 flex justify-start overflow-hidden">
                            <img src={emp.image} alt="" className="object-cover bg-center rounded-full scale-100 hover:scale-110 z-10 hover:z-50 transition-all duration-300" />
                        </div>
                        <div className="w-full h-auto py-3 bg-indigo-950 opacity-90 rounded-tl-full -z-0">
                            <span className="text-xl font-bold py-1 flex justify-center text-gray-300 ">
                                {emp.name}
                            </span>
                            <p className="text-lg font-bold  flex justify-center text-gray-200">
                                {emp.experience}
                            </p>
                            <p className="text-lg font-semibold flex justify-center text-gray-400">
                                {emp.email}
                            </p>
                        </div>
                    </div>
    )
}

export default EmpCard;