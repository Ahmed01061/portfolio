'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.8,
      color: 0x7337FF,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create connections between particles
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x7337FF,
      transparent: true,
      opacity: 0.1,
    });

    const maxDistance = 15;
    const positions = particlesGeometry.attributes.position.array;
    const linePositions: number[] = [];

    for (let i = 0; i < positions.length; i += 3) {
      for (let j = i + 3; j < positions.length; j += 3) {
        const dx = positions[i] - positions[j];
        const dy = positions[i + 1] - positions[j + 1];
        const dz = positions[i + 2] - positions[j + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < maxDistance && Math.random() > 0.98) {
          linePositions.push(positions[i], positions[i + 1], positions[i + 2]);
          linePositions.push(positions[j], positions[j + 1], positions[j + 2]);
        }
      }
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    camera.position.z = 30;

    // Mouse movement effect
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      
      lines.rotation.x += 0.0003;
      lines.rotation.y += 0.0003;

      // Mouse interaction
      const targetX = mouseRef.current.x * 0.5;
      const targetY = mouseRef.current.y * 0.5;
      
      particlesMesh.rotation.x += (targetY - particlesMesh.rotation.x) * 0.02;
      particlesMesh.rotation.y += (targetX - particlesMesh.rotation.y) * 0.02;

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`fixed inset-0 -z-10 transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}