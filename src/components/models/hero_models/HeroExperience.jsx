import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { useRef, useState, useEffect } from "react";
// Temporarily disabled: import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
// Temporarily disabled: import { BlendFunction } from "postprocessing";
import * as THREE from "three";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";
import Logger from "../../../utils/logger";

// Error boundary for Canvas
const CanvasErrorFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-lg">
    <div className="text-center text-gray-400">
      <div className="text-4xl mb-4">🎨</div>
      <p>3D Scene Loading...</p>
    </div>
  </div>
);

// Canvas content wrapper with error handling
const CanvasContent = ({ screensRef, isMobile, isTablet }) => {
  const { gl, scene, camera } = useThree();
  
  useEffect(() => {
    // Ensure proper WebGL context
    if (gl && gl.domElement) {
      gl.toneMapping = THREE.ACESFilmicToneMapping;
      gl.toneMappingExposure = 0.75;
      gl.shadowMap.enabled = true;
      gl.shadowMap.type = THREE.PCFSoftShadowMap;
    }
  }, [gl]);

  return (
    <>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={isMobile ? 25 : 50} />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room screensRef={screensRef} />
        </group>
      </Suspense>

      {/* Temporarily disable SelectiveBloom to prevent layers error */}
      {/* TODO: Re-implement bloom effect with proper layer management */}
    </>
  );
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const screensRef = useRef();
  const [hasError, setHasError] = useState(false);

  // Handle Canvas errors
  const handleCanvasError = (error) => {
    Logger.error('Canvas error in HeroExperience:', error);
    setHasError(true);
  };

  if (hasError) {
    return <CanvasErrorFallback />;
  }

  return (
    <Canvas 
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{ 
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: false,
        failIfMajorPerformanceCaveat: false
      }}
      onError={handleCanvasError}
      onCreated={(state) => {
        // Ensure proper initialization
        if (state.gl && state.gl.domElement) {
          Logger.log('Canvas created successfully');
        }
      }}
      style={{ background: 'transparent' }}
    >
      <CanvasContent 
        screensRef={screensRef}
        isMobile={isMobile}
        isTablet={isTablet}
      />
    </Canvas>
  );
};

export default HeroExperience;
