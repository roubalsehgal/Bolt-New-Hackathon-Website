import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Hero3D() {
  const particlesRef = useRef<THREE.Points>();
  const ringRef = useRef<THREE.Mesh>();
  const ring2Ref = useRef<THREE.Mesh>();

  // Particle system
  const particleCount = 3000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for(let i = 0; i < particleCount; i++) {
    const radius = 15 + Math.random() * 15;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 2;
    
    positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = radius * Math.cos(theta);
    
    // Blue-centric gradient colors
    colors[i * 3] = 0.2 + Math.random() * 0.2;     // R
    colors[i * 3 + 1] = 0.4 + Math.random() * 0.3; // G
    colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // B
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0002;
      particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.001;
      ringRef.current.rotation.x = Math.cos(time * 0.2) * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= 0.0015;
      ring2Ref.current.rotation.y = Math.sin(time * 0.15) * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Particle System */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60A5FA" />
    </group>
  );
}