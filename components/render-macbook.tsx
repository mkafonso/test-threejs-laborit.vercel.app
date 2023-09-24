"use client";

import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function MeshComponent() {
  const fileURL =
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf";
  const gltf = useGLTF(fileURL);

  return <primitive object={gltf.scene} position-y={-1.2} />;
}

export function RenderMacbook() {
  return (
    <div className="bg-zinc-800 h-screen w-screen">
      <Canvas className="h-2xl w-2xl">
        <Environment preset="sunset" />
        <OrbitControls makeDefault />

        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float rotationIntensity={0.4}>
            <MeshComponent />
          </Float>
        </PresentationControls>

        <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
      </Canvas>
    </div>
  );
}
