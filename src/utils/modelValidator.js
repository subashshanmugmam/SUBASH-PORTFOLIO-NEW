import { useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';

// Hook to check if a model exists and can be loaded
export const useModelValidator = (modelPath) => {
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkModel = async () => {
      try {
        // Try to fetch the model file
        const response = await fetch(modelPath);
        if (!response.ok) {
          throw new Error(`Model not found: ${modelPath} (${response.status})`);
        }
        setIsValid(true);
        setError(null);
      } catch (err) {
        console.error(`Model validation failed for ${modelPath}:`, err);
        setIsValid(false);
        setError(err.message);
      }
    };

    if (modelPath) {
      checkModel();
    }
  }, [modelPath]);

  return { isValid, error };
};

// Safe model loader with validation
export const SafeModelLoader = ({ modelPath, onError, children }) => {
  const { isValid, error } = useModelValidator(modelPath);

  useEffect(() => {
    if (!isValid && error && onError) {
      onError(error);
    }
  }, [isValid, error, onError]);

  if (!isValid) {
    return null; // Return null if model is invalid
  }

  return children;
};

export default useModelValidator;