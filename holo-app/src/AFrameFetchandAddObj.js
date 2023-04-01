import React, { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const AFrameFetchandAddObj = () => {
  const [scene, setScene] = useState(null);
  const [tempObjModel, setTempObjModel] = useState('');
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchGltf();
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (scene && tempObjModel && modelLoaded) {
      const oldEntityRef = scene.querySelector('#old-model-entity');
      if (oldEntityRef) {
        oldEntityRef.setAttribute('visible', 'false');
      }
      const newEntityRef = document.createElement('a-entity');
      newEntityRef.setAttribute('id', 'new-model-entity');
      newEntityRef.setAttribute('position', '0 1.1 0');
      newEntityRef.setAttribute('scale', '0.001 0.001 0.001');
      newEntityRef.setAttribute('obj-model', `obj: url(data:text/plain;base64,${btoa(tempObjModel)})`);
      newEntityRef.setAttribute('opacity', '0');
      scene.appendChild(newEntityRef);
  
      setTimeout(() => {
        const entityRef = scene.querySelector('#model-entity');
        if (entityRef) {
          entityRef.parentNode.removeChild(entityRef);
        }
        newEntityRef.setAttribute('id', 'model-entity');
        newEntityRef.setAttribute('opacity', '1');
        setModelLoaded(false);
      }, 200);
    }
  }, [scene, tempObjModel, modelLoaded]);
  

  const fetchGltf = () => {
    fetch('https://10.218.204.110:443/scene.obj')
      .then(response => response.text())
      .then(objText => {
        setTempObjModel(objText);
        setModelLoaded(true);
      });
  };

  return (
    <a-scene ref={(ref) => setScene(ref)}>
      <a-assets></a-assets>
      <a-entity id="old-model-entity"></a-entity>
      <a-camera position="0 0 0"></a-camera>
    </a-scene>
  );
};

export default AFrameFetchandAddObj;