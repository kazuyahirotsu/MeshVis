import React, { useState, useEffect, useRef } from 'react';

const AFrameFetch = () => {
    const [tempGltfModel, setTempGltfModel] = useState();
    const [modelLoaded, setModelLoaded] = useState(false);
  
    const entityRef = useRef(null);
  
    useEffect(() => {
      setInterval(() => {
        fetch('http://127.0.0.1:5000/scene.gltf')
          .then(response => response.text())
          .then(gltfText => setTempGltfModel(gltfText));
      },100);
    }, []);
  
    useEffect(() => {
      if (tempGltfModel && !modelLoaded) {
        entityRef.current.setAttribute('gltf-model', `data:application/json;base64,${btoa(tempGltfModel)}`);
        setModelLoaded(true);
      } else if (tempGltfModel && modelLoaded) {
        entityRef.current.setAttribute('gltf-model', `data:application/json;base64,${btoa(tempGltfModel)}`);
      }
    }, [tempGltfModel, modelLoaded]);
  
    return (
      <a-entity position="0 0 -5" ref={entityRef}></a-entity>
    );
  };

export default AFrameFetch;
