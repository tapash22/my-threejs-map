import { CarShow } from "../components/animation/CarShow";
// import { Text } from '@react-three/drei';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CarList from '../storage/CarList';
import Customers from "../storage/Customers";

const Home = () => {

  return (
    <div className="h-full">
      {/* header */}
      <div style={{ height: '550px' }}>
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
        Car Category
        </span>
        <div className='px-3 py-4 grid grid-cols-4 gap-5'>
          {
            CarList.map((carl) => {
              return (
                <div className='w-full h-auto  py-2 block shadow-lg shadow-indigo-500' key={carl.id}>
                  <div className='flex justify-center w-full px-0 items-center py-5 rounded-tl-full  rounded-br-full bg.,-gray-200  shadow-lg shadow-indigo-500'>
                    <img src={carl.image} alt='' className=' w-[240px] h-[168px] px-2 object-cover scale-100 rounded-3xl' />
                  </div>
                  <div className='w-full h-auto px-5 py-4 block my-1' style={{borderTop:'1px solid gold'}}>
                    <span className='text-lg font-bold py-1 text-indigo-950'>
                      {carl.name}
                    </span>
                    <p className='flex justify-between text-sm font-bold tracking-wide py-2'>
                      <span className='text-sm font-bold' style={{borderRight:'5px solid red',width:'50%'}}>
                     MPH: {carl.mph}
                      </span>
                     Model {carl.model}
                     
                    </p>
                    <ul className='py-2 grid grid-cols-2 gap-3'>
                      {
                        carl.features.map((f, i) => {
                          return (
                            <li key={i} className='flex justify-center text-sm text-white font-medium tracking-wide bg-indigo-500 px-2 py-1 rounded-xl '>
                              {f}
                            </li>
                          )
                        })
                      }
                    </ul>
                    <p className='text-lg font-bold py-1 '>
                    Price: Tk {carl.price}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
