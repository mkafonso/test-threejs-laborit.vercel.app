"use client";

import {
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function MeshComponent() {
  const fileURL =
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf";
  const gltf = useGLTF(fileURL);

  return (
    <primitive object={gltf.scene} position-y={-1.2} rotation-x={0.13}>
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={1.17}
        position={[0, 1.56, -1.4]}
        rotation-x={-0.256}
        style={{ pointerEvents: "auto" }}
      >
        <iframe src="https://laborit.com.br/"></iframe>
      </Html>
    </primitive>
  );
}

export function RenderMacbook() {
  return (
    <div className="bg-zinc-800 h-screen w-screen">
      <Canvas>
        <Environment preset="sunset" />
        <OrbitControls
          makeDefault
          minPolarAngle={0.1}
          maxPolarAngle={Math.PI / 2 - 0.1}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
        />

        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float rotationIntensity={0.4}>
            <rectAreaLight
              color="#fafafa"
              width={2.5}
              height={1.65}
              intensity={65}
              rotation={[-0.1, Math.PI, 0]}
              position={[0, 0.55, -1.15]}
            />

            <Text
              fontSize={0.6}
              position={[2, 0.75, 0.75]}
              rotation-y={-1.25}
              children={`Laborit\nBrasil`}
              textAlign="center"
            />

            <MeshComponent />
          </Float>
        </PresentationControls>

        <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
      </Canvas>
    </div>
  );
}
