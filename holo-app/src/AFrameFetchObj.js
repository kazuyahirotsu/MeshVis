import React, { useState, useEffect, useRef } from 'react';

const AFrameFetchObj = () => {
    const [tempObjModel, setTempObjModel] = useState();
    const [modelLoaded, setModelLoaded] = useState(false);

    const entityRef = useRef(null);

    useEffect(() => {
      setInterval(() => {
        fetch('https://192.168.0.169:443/scene.obj')
          .then(response => response.text())
          .then(objText => setTempObjModel(objText));
      },500);
    }, []);

    useEffect(() => {
      if (tempObjModel && !modelLoaded) {
        entityRef.current.setAttribute('obj-model', `obj: url(data:text/plain;base64,${btoa(tempObjModel)})`);
        setModelLoaded(true);
      } else if (tempObjModel && modelLoaded) {
        entityRef.current.setAttribute('obj-model', `obj: url(data:text/plain;base64,${btoa(tempObjModel)})`);
      }
    }, [tempObjModel, modelLoaded]);

    return (
      <a-entity position="0 1.3 0" scale="0.001 0.001 0.001" ref={entityRef}></a-entity>
    );
  };

export default AFrameFetchObj;
