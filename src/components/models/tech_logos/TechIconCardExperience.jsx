import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, Suspense, useState } from "react";
import * as THREE from "three";
import { fallbackModels } from "../../../utils/modelPreloader";
import Logger from "../../../utils/logger";

// Enhanced loading component with animation
const TechLoader = () => (
  <Float speed={4} rotationIntensity={1} floatIntensity={2}>
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#4cc9f0" 
        wireframe 
        transparent 
        opacity={0.6}
      />
    </mesh>
  </Float>
);

// Enhanced error boundary component for 3D model
const TechModel = ({ model }) => {
  const [modelPath, setModelPath] = useState(model.modelPath);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setModelPath(model.modelPath);
    setHasError(false);
  }, [model.modelPath]);

  const handleError = () => {
    Logger.error('Model loading failed for:', modelPath);
    
    // Try fallback model if available and not already using fallback
    if (fallbackModels[model.modelPath] && !hasError) {
      Logger.log(`Using fallback model for ${model.modelPath}: ${fallbackModels[model.modelPath]}`);
      setModelPath(fallbackModels[model.modelPath]);
      setHasError(true);
    } else {
      setHasError(true);
    }
  };

  // If we've tried fallback and it failed, show loader
  if (hasError && (!fallbackModels[model.modelPath] || modelPath === fallbackModels[model.modelPath])) {
    return <TechLoader />;
  }

  return (
    <ModelContent 
      key={modelPath} // Force re-render when model path changes
      modelPath={modelPath} 
      model={model} 
      onError={handleError}
    />
  );
};

// Separate component for the actual model content with proper async handling
const ModelContent = ({ modelPath, model, onError }) => {
  const [modelData, setModelData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadModel = async () => {
      try {
        setLoading(true);
        
        // Wait a bit to ensure preloading had a chance to complete
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const scene = useGLTF(modelPath);
        
        // Check if scene is a Promise (still loading)
        if (scene && typeof scene.then === 'function') {
          const loadedScene = await scene;
          if (isMounted) {
            setModelData(loadedScene);
            setLoading(false);
          }
        } else if (scene && scene.scene) {
          if (isMounted) {
            setModelData(scene);
            setLoading(false);
          }
        } else {
          throw new Error('Invalid model data received');
        }
      } catch (err) {
        Logger.error('Failed to load model:', modelPath, err);
        if (isMounted) {
          setLoading(false);
          if (onError) onError();
        }
      }
    };

    loadModel();

    return () => {
      isMounted = false;
    };
  }, [modelPath, onError]);

  useEffect(() => {
    if (modelData && model.name === "Interactive Developer") {
      modelData.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [modelData, model.name]);

  if (loading || !modelData) {
    return <TechLoader />;
  }

  return (
    <Float speed={3} rotationIntensity={0.3} floatIntensity={0.5}>
      <group scale={model.scale} rotation={model.rotation}>
        <primitive object={modelData.scene} />
      </group>
    </Float>
  );
};

const TechIconCardExperience = ({ model }) => {
  return (
    <Canvas
      dpr={[1, 1.5]} // Limit pixel ratio
      performance={{ min: 0.5 }}
      gl={{ antialias: false }} // Disable antialiasing for performance
    >
      {/* Enhanced lighting setup for better visibility and SelectiveBloom support */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1.2} 
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <Environment preset="city" />

      <OrbitControls enableZoom={false} enablePan={false} />

      <Suspense fallback={<TechLoader />}>
        <TechModel model={model} />
      </Suspense>
    </Canvas>
  );
};

export default TechIconCardExperience;
