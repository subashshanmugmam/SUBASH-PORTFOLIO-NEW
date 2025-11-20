import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Production build optimizations
  build: {
    // Code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
          'animation-vendor': ['framer-motion', 'gsap'],
          'ui-vendor': ['lucide-react', 'react-responsive']
        }
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
    // Source maps for debugging in production
    sourcemap: false // Set to true if you need debugging in production
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    host: true // Allow external connections
  },
  
  // Dev server configuration
  server: {
    port: 5173,
    host: true,
    // Handle API routes for EmailJS
    cors: true
  },
  
  // Public base path (change for deployment)
  base: './', // Use relative paths for deployment flexibility
  
  // Asset handling
  assetsInclude: ['**/*.glb', '**/*.gltf']
});
