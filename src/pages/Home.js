import { CarShow } from "../components/animation/CarShow";
// import { Text } from '@react-three/drei';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import man1 from '../assets/customer/1.jpg';
import man2 from '../assets/customer/2.jpg';
import man3 from '../assets/customer/3.jpg'

const Home = () => {

  const customers = [
    {
      id:1,
      name:'customer name',
      message:'Proident adipisicing incididunt in laboris anim deserunt tempor nulla incididunt pariatur culpa pariatur aute.',
      image:man1,
      info:'customer',
      tag:'Best Car'
    },
    {
      id:2,
      name:'customer name',
      message:'Proident adipisicing incididunt in laboris anim deserunt tempor nulla incididunt pariatur culpa pariatur aute.',
      image:man2,
      info:'customer',
      tag:'Best Car'
    },
    {
      id:3,
      name:'customer name',
      message:'Proident adipisicing incididunt in laboris anim deserunt tempor nulla incididunt pariatur culpa pariatur aute.',
      image:man3,
      info:'customer',
      tag:'Best Car'
    },
  ]
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
      <div className="block px-5 py-2">
        <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
          What Customer Say
        </span>
        <div className="grid grid-cols-3 px-8 py-2 gap-6">
          {
            customers.map((customer) =>{
              return (
                <div className="block px-2 py-2 rounded-lg shadow-lg shadow-indigo-600" key={customer.id}>
                  <span className="text-lg py-2 font-bold text-justify">
                    {customer.tag}
                  </span>
                  <p className="text-sm font-normal tracking-wide py-2 px-3">
                    {
                      customer.message
                    }
                  </p>
                  <div className="flex justify-between px-2">
                    <div className="w-1/3 flex justify-center">
                      <img src={customer.image} className="w-20 h-20 ring-1 ring-indigo-600 p-1 rounded-full" />
                      </div>
                      <div className="block w-2//3 py-1 px-2">
                        <span className="text-sm py-2 font-bold text-justify">
                          {customer.name}
                        </span>
                        <p className="text-sm py-2 font-bold text-justify">
                          {customer.info}
                        </p>
                        </div>
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
