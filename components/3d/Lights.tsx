import * as THREE from "three";

const Lights = () => (
  <>
    {/* lamp's light - dimmed cool white */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={80}
      color="#c7d2fe"
    />
    {/* Deep Crimson overhead key light */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={35}
      color="#a60030"
    />
    {/* Navy Blue side fill light */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={50}
      color="#03045e"
    />
    {/* Dark Violet area light for blending */}
    <primitive
      object={new THREE.RectAreaLight("#4c026b", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={12}
    />
    {/* Contrasting dark point lights: Blood Red & Midnight Blue */}
    <pointLight position={[0, 1, 0]} intensity={8} color="#780000" />
    <pointLight position={[1, 2, -2]} intensity={8} color="#000060" />
  </>
);

export default Lights;
