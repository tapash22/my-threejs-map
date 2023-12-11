import { CarShow } from "../components/animation/CarShow";
// import { Text } from '@react-three/drei';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CarList from "../storage/CarList";
import Customers from "../storage/Customers";
import CustomarProfile from '../components/card/CustomarProfile';
import SingleCar from "../components/card/SingleCar";
import EmpProfile from "../storage/EmpProfile";
import OurServices from "../components/swiper/OurServices";
import CarServices from "../storage/CarServices";

const Home = () => {
  return (
    <div className="h-full">
      {/* header */}
      <div style={{ height: "550px" }}>
        <Suspense fallback={null}>
          <Canvas shadows resize={{ scroll: false }} style={{}}>
            {/* <Text position={[6,2,2]} rotation={[0,0,0]} scale={0.5} color={0xfff000} anchorX='left'>
        this is me {'\n'} do you know
      </Text> */}
            <CarShow />
          </Canvas>
        </Suspense>
      </div>

      <div className="bg-white px-5 py-3 h-auto block ">
        <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
          CAR CATEGORY
        </span>
        <div className="px-3 py-4 grid grid-cols-4 gap-5">
          {CarList.map((carl) => {
            return (
              <SingleCar  key={carl.id} carl={carl} />
            );
          })}
        </div>
      </div>

      <div className="bg-white px-5 py-3 h-auto block ">
        <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
          OUR SERVICES
        </span>
        <div className="px-3 py-4  w-full">
          <OurServices carServices={CarServices} />
          </div>
          </div>

      <div className="bg-white px-5 py-3 h-auto block ">
        <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
        WHAT CUSTOMERS SAY
        </span>
        <div className="grid grid-cols-3 px-3 py-4 gap-5">
          {
            Customers.map((customer) =>{
              return (
                <CustomarProfile key={customer.id} customer={customer}  />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
