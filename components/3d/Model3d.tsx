import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import Lights from "./Lights";
import { Suspense } from "react";

const Model3d = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.4} color="#0f0a1a" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
        autoRotate
        autoRotateSpeed={0.5}
      />

      <Suspense fallback={null}>
        <Environment preset="city" />
        <Lights />
        <group
          scale={isMobile ? 1.0 : 1.3}
          position={[0, -4, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default Model3d;
