import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import './NeedleShowcase.css';

function Model(props) {
    const { scene } = useGLTF('/assets/images/panda pins/needle.glb');
    const ref = useRef();

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta * 1.9; // Even faster rolling
        }
    });

    return <primitive
        ref={ref}
        object={scene}
        rotation={[0, 0, Math.PI / 2]} // Lay horizontally
        {...props}
    />;
}

const NeedleShowcase = () => {
    return (
        <section className="needle-showcase-section theme-blue">
            <div className="container">
                <div className="section-header text-center text-white">
                    <p className="section-label text-white-50">Precision Engineering</p>
                    <h2 className="text-white">Experience Our Craftsmanship</h2>
                    <p className="section-description text-white-80">
                        Explore the intricate details of our Machine needle in interactive 3D.
                        Drag to rotate and inspect the quality from every angle.
                    </p>
                </div>

                <div className="canvas-container center-content">
                    <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 8] }} style={{ position: 'absolute' }} shadows={false}>
                        <color attach="background" args={['#1e3a5f']} />
                        <PresentationControls
                            speed={1.5}
                            global
                            zoom={2.5}
                            polar={[-0.1, Math.PI / 4]}
                            rotation={[0, 0, 0]} // Reset initial rotation of controls
                        >
                            <Stage environment="city" intensity={0.6} contactShadow={false} shadows={false}>
                                <Suspense fallback={null}>
                                    <Model scale={2} />
                                </Suspense>
                            </Stage>
                        </PresentationControls>
                    </Canvas>


                </div>
            </div>
        </section>
    );
};

export default NeedleShowcase;
