import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const AFrameObjEntity = ({ modelSrc }) => {
  const entityRef = useRef();

  useEffect(() => {
    const entity = entityRef.current;
    entity.addEventListener('model-loaded', (e) => {
        
        const model = entity.getObject3D('mesh');

        model.traverse(child => {
            if (child instanceof THREE.Mesh) {
              child.geometry.addEventListener('dispose', () => {
                
                const loader = new OBJLoader();
                loader.load(modelSrc, obj => {
                    // entity.removeObject3D('mesh');
                    // entity.setObject3D('mesh', obj.scene);
                    child.geometry = obj.geometry;
                });
                // entity.addEventListener('model-loaded', (e) => {
                //     entity.removeObject3D('mesh');
                // })

              });
            }
          });
      })
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
  }, [modelSrc]);

  return (
    <a-entity position="0 0 -5" material="color: red" ref={entityRef} obj-model={`obj: url(${modelSrc}); mtl: url(scene.mtl)`}></a-entity>
  );
};

export default AFrameObjEntity;
