import React, { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const AFrameFetchandAdd = () => {
  const [scene, setScene] = useState(null);
  const [tempGltfModel, setTempGltfModel] = useState('');
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchGltf();
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (scene && tempGltfModel && modelLoaded) {
      const oldEntityRef = scene.querySelector('#old-model-entity');
      if (oldEntityRef) {
        oldEntityRef.setAttribute('visible', 'false');
      }
      const newEntityRef = document.createElement('a-entity');
      newEntityRef.setAttribute('id', 'new-model-entity');
      newEntityRef.setAttribute('position', '0 0 0');
      newEntityRef.setAttribute('gltf-model', `data:application/json;base64,${btoa(tempGltfModel)}`);
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
  }, [scene, tempGltfModel, modelLoaded]);
  

  const fetchGltf = () => {
    fetch('http://127.0.0.1:5000/scene.gltf')
      .then(response => response.text())
      .then(gltfText => {
        setTempGltfModel(gltfText);
        setModelLoaded(true);
      });
  };

  return (
    <a-scene ref={(ref) => setScene(ref)}>
      <a-assets></a-assets>
      <a-entity id="old-model-entity"></a-entity>
      <a-camera position="0 0 5"></a-camera>
    </a-scene>
  );
};

export default AFrameFetchandAdd;