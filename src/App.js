import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import { CarShow } from './components/CarShow';
import { Text } from '@react-three/drei'; 


function App() {
  return (
    <div className="App">
   <Suspense fallback={null}>
    <Canvas shadows style={{height:'100vh'}}>
      <Text position={[6,2,2]} rotation={[0,0,0]} scale={0.5} color={0xfff000} anchorX='left'>
        this is me {'\n'} do you know
      </Text>
      <CarShow  />
    </Canvas>
   </Suspense>
    </div>
  );
}

export default App;
