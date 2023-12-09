const EmpCard = ({emp}) =>{
    return (
        <div className="h-auto w-full px-2 py-2 ">
                        <div className="w-full h-auto py-2 px-2 flex justify-center">
                            <img src={emp.image} alt="" className="w-32 h-32 ring-2 ring-indigo-950 shadow-xl shadow-indigo-950 rounded-full" />
                        </div>
                        <div className="w-full h-auto py-3 bg-indigo-950 opacity-90 rounded-tl-xl rounded-tr-xl ">
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