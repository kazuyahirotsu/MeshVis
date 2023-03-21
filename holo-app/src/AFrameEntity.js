import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const AFrameEntity = ({ modelSrc }) => {

    
    const entityRef = useRef();
    const INTERVAL_MS = 1000;

    useEffect(() => {

        const interval = setInterval(() => {
            console.log('Logs every second');
            const entity = entityRef.current;
            entity.addEventListener('model-loaded', (e) => {
                
                const model = entity.getObject3D('mesh');

                model.traverse(child => {
                    if (child instanceof THREE.Mesh) {
                    child.geometry.addEventListener('dispose', () => {
                        entity.removeObject3D('mesh');
                        const loader = new GLTFLoader();
                        loader.load(modelSrc, gltf => {
                            // entity.removeObject3D('mesh');
                            // entity.setObject3D('mesh', gltf.scene);
                            entity.setObject3D('mesh', gltf.scene);
                            // child.geometry = gltf.geometry;
                        });
                        // entity.addEventListener('model-loaded', (e) => {
                        //     entity.removeObject3D('mesh');
                        // })

                    });
                    }
                });
            })
        }, INTERVAL_MS);

        // const loader = new GLTFLoader();
        // loader.load(modelSrc, gltf => {
        //     document.querySelector('a-entity').object3D.add(gltf.scene)
        // });

        return () => clearInterval(interval); 
    }, [])
            // model.traverse(child => {
            //     if (child instanceof THREE.Mesh) {
            //     child.geometry.addEventListener('dispose', () => {
            //         entity.removeObject3D('mesh');
            //         const loader = new GLTFLoader();
            //         loader.load(modelSrc, gltf => {
            //             // entity.removeObject3D('mesh');
            //             // entity.setObject3D('mesh', gltf.scene);
            //             // entity.setObject3D('mesh', gltf.scene);
            //             child.geometry = gltf.geometry;
            //         });
            //         // entity.addEventListener('model-loaded', (e) => {
            //         //     entity.removeObject3D('mesh');
            //         // })

            //     });
            //     }
            // });
        // })



//   useEffect(() => {
//     console.log("useeffect running");
//     const entity = entityRef.current;
//     entity.addEventListener('model-loaded', (e) => {
        
//         const model = entity.getObject3D('mesh');

//         model.traverse(child => {
//             if (child instanceof THREE.Mesh) {
//               child.geometry.addEventListener('dispose', () => {
//                 entity.removeObject3D('mesh');
//                 const loader = new GLTFLoader();
//                 loader.load(modelSrc, gltf => {
//                     // entity.removeObject3D('mesh');
//                     // entity.setObject3D('mesh', gltf.scene);
//                     entity.setObject3D('mesh', gltf.scene);
//                     // child.geometry = gltf.geometry;
//                 });
//                 // entity.addEventListener('model-loaded', (e) => {
//                 //     entity.removeObject3D('mesh');
//                 // })

//               });
//             }
//           });
//       })
    // const entity = entityRef.current;
    // const model = entity.getObject3D('mesh');

    // model.traverse(child => {
    //   if (child instanceof THREE.Mesh) {
    //     child.geometry.addEventListener('dispose', () => {
    //       entity.removeObject3D('mesh');

    //       const loader = new GLTFLoader();
    //       loader.load(modelSrc, gltf => {
    //         entity.setObject3D('mesh', gltf.scene);
    //       });
    //     });
    //   }
    // });
//   }, [modelSrc]);

  return (
    <a-entity position="0 0 -5" ref={entityRef} gltf-model={`url(${modelSrc})`}></a-entity>
  );
};

export default AFrameEntity;
