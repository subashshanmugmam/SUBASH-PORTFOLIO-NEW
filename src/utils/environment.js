import Logger from './logger';

// Environment variables validation
export const validateEnvironment = () => {
  const requiredVars = [
    'VITE_APP_EMAILJS_SERVICE_ID',
    'VITE_APP_EMAILJS_TEMPLATE_ID', 
    'VITE_APP_EMAILJS_PUBLIC_KEY'
  ];

  const missing = requiredVars.filter(
    varName => !import.meta.env[varName] || import.meta.env[varName].trim() === ''
  );

  if (missing.length > 0) {
    Logger.warn('Missing environment variables:', missing);
    return false;
  }

  return true;
};

// Get environment variables with fallbacks
export const getEnvVar = (name, fallback = '') => {
  const value = import.meta.env[name];
  if (!value || value.trim() === '') {
    if (!fallback) {
      Logger.warn(`Environment variable ${name} is not set`);
    }
    return fallback;
  }
  return value;
};

// Email configuration
export const emailConfig = {
  serviceId: getEnvVar('VITE_APP_EMAILJS_SERVICE_ID'),
  templateId: getEnvVar('VITE_APP_EMAILJS_TEMPLATE_ID'),
  publicKey: getEnvVar('VITE_APP_EMAILJS_PUBLIC_KEY'),
  isValid: () => validateEnvironment()
};

export default { validateEnvironment, getEnvVar, emailConfig };