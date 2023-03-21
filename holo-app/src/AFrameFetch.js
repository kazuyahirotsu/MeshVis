import React, { useState, useEffect } from 'react';

const AFrameFetch = () => {
    const [gltfModel, setGltfModel] = useState();

    useEffect(() => {
        setInterval(() => {
            fetch('http://127.0.0.1:5000/scene.gltf')
            .then(response => response.text())
            .then(gltfText => setGltfModel(gltfText));
          }, 1000);

    }, []);

  return (
    <a-entity position="0 0 -5" gltf-model={`data:application/json;base64,${btoa(gltfModel)}`}></a-entity>
  );
};

export default AFrameFetch;
