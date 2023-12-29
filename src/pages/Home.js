import { CarShow } from "../components/animation/CarShow";
// import { Text } from '@react-three/drei';
import { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
import CarList from "../storage/CarList";
import Customers from "../storage/Customers";
import CustomarProfile from '../components/card/CustomarProfile';
import SingleCar from "../components/card/SingleCar";
import EmpProfile from "../storage/EmpProfile";
import OurServices from "../components/swiper/OurServices";
import CarServices from "../storage/CarServices";
import CarType from '../storage/CarType';
import CarCategory from "../components/card/CarCategory";


const Home = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [customers,setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const url ='https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        console.log(response);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setUsers(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const url ='https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        console.log(response);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setCustomers(result);
        console.log(customers);
      } catch (error) {
        console.log(error);
      } 
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="block bg-white overflow-hidden">
      {/* header */}
      {/* <div style={{ height: "550px" }}>
        <Suspense fallback={null}>
          <Canvas shadows resize={{ scroll: false }} style={{}}> */}
            {/* <Text position={[6,2,2]} rotation={[0,0,0]} scale={0.5} color={0xfff000} anchorX='left'>
        this is me {'\n'} do you know
      </Text> */}
            {/* <CarShow />
          </Canvas>
        </Suspense>
      </div> */}

      {/* canvas animation use end  */}

      {/* <div className="bg-white px-5 py-3 h-auto block ">
        <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
         USERS DATA
        </span>
        <div className="grid grid-cols-4 gap-7 px-5 py-4">
          {
            users.map((user) => {
              return (
                <div className="block rounded-xl ring-1 ring-bg-indigo-500 px-3 py-3 w-full bg-indigo-950" key={user.id}>
                  <span className="text-lg font-bold flex justify-center w-full  py-1 tracking-wide text-gray-200 ">
                    {
                      user.name
                    }
                  </span>
                  
                  <span className="text-sm font-medium break-words tracking-wider flex justify-center w-full text-gray-400
                   py-1 ">
                    {
                      user.email
                    }
                  </span>
                  </div>
              )
            })
          }
        </div>
        </div>

        <div className="bg-white px-5 py-3 h-auto block ">
        <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
         CUSTOMER DATA
        </span>
        <div className="grid grid-cols-4 gap-7 px-5 py-4">
          {
            customers.map((customer) => {
              return (
                <div className="block rounded-lg ring-1 ring-red-500 px-2 py-3" key={customer.id}>
                  <span className="text-xl font-bold py-2 w-full flex justify-between">
                    {
                      customer.first_name
                    }
                    {
                      customer.last_name
                    }
                  </span>
                  <span className="text-lg font-medium
                   py-2 ">
                    {
                      customer.email
                    }
                  </span>
                  </div>
              )
            })
          }
        </div>
        </div> */}

      <div className="bg-white px-5 py-3 h-auto block ">
        <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
          CAR VIEW
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
        TYPES OF VEHICLES
        </span>
        <div className="px-3 py-4 w-full grid grid-cols-4 gap-5">
          {
            CarType.map((carT)=>{
              return (
                <CarCategory key={carT.id} carT={carT}  />
              )
            })
          }
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
