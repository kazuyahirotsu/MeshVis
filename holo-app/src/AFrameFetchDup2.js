import React, { useState, useEffect, useRef } from 'react';

const AFrameFetchDup2 = () => {
  const [gltfModels, setGltfModels] = useState(['', '']);
  const [loadedModelIndex, setLoadedModelIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      fetch('http://127.0.0.1:5000/scene.gltf')
        .then(response => response.text())
        .then(gltfText => {
          const nextIndex = (currentIndex + 1) % 2;
          setGltfModels(prevGltfModels => {
            prevGltfModels[nextIndex] = gltfText;
            return [...prevGltfModels];
          });
          currentIndex = nextIndex;
        });
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  const onModelLoad = () => {
    setLoadedModelIndex(prevLoadedModelIndex => (prevLoadedModelIndex + 1) % 2);
  };

  return (
    <a-entity position="0 0 -10">
      <a-entity
        gltf-model={`data:application/json;base64,${btoa(gltfModels[loadedModelIndex])}`}
        onLoad={onModelLoad}
      />
      <a-entity
        gltf-model={`data:application/json;base64,${btoa(gltfModels[(loadedModelIndex + 1) % 2])}`}
        visible={!gltfModels[loadedModelIndex]}
        onLoad={onModelLoad}
      />
    </a-entity>
  );
};


export default AFrameFetchDup2;
