import CarList from "../storage/CarList";
import SingleCar from "../components/card/SingleCar";

const Cars = () => {
    return (
        <div className="block bg-white overflow-hidden">
            <div className="bg-white px-5 py-3 h-auto block ">
                <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
                    CAR VIEW
                </span>
                <div className="px-3 py-4 grid grid-cols-4 gap-5">
                    {CarList.map((carl) => {
                        return (
                            <SingleCar key={carl.id} carl={carl} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
};

export default Cars;