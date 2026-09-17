import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

/* =====================================================
   MAIN HOUSE
===================================================== */

function House() {
  return (
    <group position={[0, -1, 0]}>

      {/* MAIN BUILDING */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[4.2, 2.4, 3.2]} />
        <meshStandardMaterial
          color="#d8d0bd"
          roughness={0.6}
        />
      </mesh>

      {/* ROOF */}
      <mesh
        position={[0, 2.5, 0]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
      >
        <coneGeometry args={[2.9, 1.8, 4]} />
        <meshStandardMaterial
          color="#182c24"
          roughness={0.7}
        />
      </mesh>

      {/* FRONT DOOR */}
      <mesh position={[0, 0.75, 1.63]}>
        <boxGeometry args={[0.85, 1.5, 0.08]} />
        <meshStandardMaterial
          color="#735a3b"
          roughness={0.55}
        />
      </mesh>

      {/* LEFT WINDOW */}
      <mesh position={[-1.25, 1.25, 1.63]}>
        <boxGeometry args={[0.85, 0.85, 0.08]} />
        <meshStandardMaterial
          color="#8eb0a0"
          roughness={0.15}
          metalness={0.25}
        />
      </mesh>

      {/* RIGHT WINDOW */}
      <mesh position={[1.25, 1.25, 1.63]}>
        <boxGeometry args={[0.85, 0.85, 0.08]} />
        <meshStandardMaterial
          color="#8eb0a0"
          roughness={0.15}
          metalness={0.25}
        />
      </mesh>

      {/* BALCONY */}
      <mesh position={[0, 1.75, -1.65]}>
        <boxGeometry args={[2.1, 0.08, 0.65]} />
        <meshStandardMaterial
          color="#c8a96b"
          metalness={0.25}
          roughness={0.45}
        />
      </mesh>

    </group>
  );
}


/* =====================================================
   TREE
===================================================== */

function Tree({ position, scale = 1 }) {

  const treeRef = useRef();

  useFrame((state) => {

    if (!treeRef.current) return;

    treeRef.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.7) * 0.025;

  });

  return (
    <group
      ref={treeRef}
      position={position}
      scale={scale}
    >

      {/* TRUNK */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry
          args={[0.12, 0.18, 1.6, 12]}
        />

        <meshStandardMaterial
          color="#5b4935"
        />
      </mesh>

      {/* LEAVES */}
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry
          args={[0.75, 18, 18]}
        />

        <meshStandardMaterial
          color="#476b52"
          roughness={0.9}
        />
      </mesh>

      {/* SMALL TOP LEAVES */}
      <mesh position={[0.2, 2.35, 0]}>
        <sphereGeometry
          args={[0.42, 14, 14]}
        />

        <meshStandardMaterial
          color="#5f8067"
          roughness={0.9}
        />
      </mesh>

    </group>
  );
}


/* =====================================================
   FLOATING GOLD ORBS
===================================================== */

function FloatingOrb({
  position,
  size = 0.08,
}) {

  const ref = useRef();

  useFrame((state) => {

    if (!ref.current) return;

    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.004;

    ref.current.position.y +=
      Math.sin(
        state.clock.elapsedTime * 1.2 +
        position[0]
      ) * 0.0008;

  });

  return (
    <mesh
      ref={ref}
      position={position}
    >

      <sphereGeometry
        args={[size, 20, 20]}
      />

      <meshStandardMaterial
        color="#c8a96b"
        metalness={0.8}
        roughness={0.2}
      />

    </mesh>
  );
}


/* =====================================================
   FLOATING RING
===================================================== */

function FloatingRing() {

  const ringRef = useRef();

  useFrame((state) => {

    if (!ringRef.current) return;

    ringRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.25;

    ringRef.current.rotation.y += 0.002;

  });

  return (
    <mesh
      ref={ringRef}
      position={[3.3, 2.4, 0]}
    >

      <torusGeometry
        args={[0.65, 0.025, 16, 80]}
      />

      <meshStandardMaterial
        color="#c8a96b"
        metalness={0.8}
        roughness={0.2}
      />

    </mesh>
  );
}


/* =====================================================
   SCENE
===================================================== */

function Scene() {

  return (
    <>

      <PerspectiveCamera
        makeDefault
        position={[7, 4.5, 8]}
        fov={45}
      />

      {/* LIGHTING */}

      <ambientLight intensity={1.1} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={3}
        castShadow
      />

      <directionalLight
        position={[-5, 3, -4]}
        intensity={1.2}
      />

      <Environment preset="sunset" />


      {/* GROUND */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.05, 0]}
        receiveShadow
      >

        <planeGeometry
          args={[30, 30]}
        />

        <meshStandardMaterial
          color="#13251e"
          roughness={1}
        />

      </mesh>


      {/* HOUSE */}

      <Float
        speed={1}
        rotationIntensity={0.08}
        floatIntensity={0.15}
      >

        <House />

      </Float>


      {/* TREES */}

      <Tree
        position={[-4, -1, -1]}
        scale={1.2}
      />

      <Tree
        position={[4, -1, -1]}
        scale={1.4}
      />

      <Tree
        position={[-4.5, -1, 2]}
        scale={0.8}
      />

      <Tree
        position={[4.5, -1, 2]}
        scale={0.9}
      />


      {/* FLOATING ELEMENTS */}

      <FloatingOrb
        position={[-3, 2.8, 1]}
        size={0.08}
      />

      <FloatingOrb
        position={[3.5, 3.2, 1]}
        size={0.06}
      />

      <FloatingOrb
        position={[2.8, 1.2, 2]}
        size={0.045}
      />

      <FloatingOrb
        position={[-2.5, 3.5, 0]}
        size={0.05}
      />

      <FloatingRing />


      {/* CAMERA CONTROL */}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.1}
      />

    </>
  );
}


/* =====================================================
   HERO CANVAS
===================================================== */

function HeroScene() {

  return (
    <div className="hero-3d">

     <Canvas
  shadows
  dpr={[1, 2]}
  style={{ pointerEvents: "none" }}
>
  <Scene />
</Canvas>

    </div>
  );
}

export default HeroScene;