import { CarShow } from '../components/animation/CarShow';
// import { Text } from '@react-three/drei'; 
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

const Home = () => {
  return (
    <div>
      {/* header */}
      <div style={{height:'550px'}}>
        <Suspense fallback={null}>
          <Canvas shadows resize={{ scroll: false }} style={{  }}>
            {/* <Text position={[6,2,2]} rotation={[0,0,0]} scale={0.5} color={0xfff000} anchorX='left'>
        this is me {'\n'} do you know
      </Text> */}
            <CarShow />
          </Canvas>
          
        </Suspense>
      </div>
      <div className='text-lg text-red-600'>
        this is our main view
      </div>
    </div>
  );
};

export default Home;
