const CarView = ({car}) => {
    return (
        <div className="relative block w-1/3 h-auto ring-1 ring-indigo-600 rounded-lg py-2 group">
            <div className="block w-full h-auto">
                <div className="w-auto h-auto flex justify-center py-2 ">
                    <img src={car.image} alt="" className="h-32 w-32 rounded-full ring-2 ring-indigo-700 p-1" />
                </div>
                <p className="text-xl font-bold tracking-wider py-2 px-2 flex justify-center uppercase">
                    {car.name}
                </p>
            </div>
            
            <div className="absolute flex justify-center items-center inset-0 bg-indigo-950 from-transparent  opacity-0 group-hover:opacity-80 transform scale-y-0 group-hover:scale-y-100  transition-all origin-bottom duration-300 rounded-lg">
                <p className="text-xl font-bold text-white ">
                {car.joining}
                </p>
            </div>
        </div>
    )
}

export default CarView;