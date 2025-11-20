import { useGLTF } from '@react-three/drei';
import Logger from './logger';

// Preload all 3D models to avoid loading errors
export const preloadModels = async () => {
  const modelPaths = [
    '/models/react_logo-transformed.glb',
    '/models/python-transformed.glb', 
    '/models/node-transformed.glb',
    '/models/three.js-transformed.glb',
    '/models/git-svg-transformed.glb',
    '/models/optimized-room.glb',
    '/models/computer-optimized-transformed.glb'
  ];

  // Preload all models asynchronously
  const preloadPromises = modelPaths.map(async (path) => {
    try {
      Logger.log(`Preloading model: ${path}`);
      await useGLTF.preload(path);
      Logger.log(`Successfully preloaded: ${path}`);
    } catch (error) {
      Logger.warn(`Failed to preload model: ${path}`, error);
    }
  });

  try {
    await Promise.allSettled(preloadPromises);
    Logger.log('Model preloading completed');
  } catch (error) {
    Logger.warn('Some models failed to preload:', error);
  }
};

// Alternative model paths for fallbacks
export const fallbackModels = {
  '/models/python-transformed.glb': '/models/react_logo-transformed.glb',
  '/models/node-transformed.glb': '/models/react_logo-transformed.glb', 
  '/models/git-svg-transformed.glb': '/models/react_logo-transformed.glb',
  '/models/three.js-transformed.glb': '/models/react_logo-transformed.glb'
};

export default preloadModels;