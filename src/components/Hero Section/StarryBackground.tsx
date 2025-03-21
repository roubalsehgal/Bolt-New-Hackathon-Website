import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function StarryBackground() {
  const starsRef = useRef<THREE.Points>();
  
  const starCount = 8000;
  const positions = new Float32Array(starCount * 3);
  const colors = new Float32Array(starCount * 3);
  
  for(let i = 0; i < starCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 300;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 300;

    // Star colors - focusing on blue tones
    const colorChoice = Math.random();
    if (colorChoice < 0.4) {
      // Bright blue stars
      colors[i * 3] = 0.4;
      colors[i * 3 + 1] = 0.6;
      colors[i * 3 + 2] = 1;
    } else if (colorChoice < 0.7) {
      // Light blue stars
      colors[i * 3] = 0.6;
      colors[i * 3 + 1] = 0.8;
      colors[i * 3 + 2] = 1;
    } else {
      // White stars with blue tint
      colors[i * 3] = 0.9;
      colors[i * 3 + 1] = 0.95;
      colors[i * 3 + 2] = 1;
    }
  }

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0001;
      starsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.01;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={starCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}