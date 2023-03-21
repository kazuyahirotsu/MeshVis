import logo from './logo.svg';
import './App.css';
import AFrameEntity from './AFrameEntity';
import AFrameObjEntity from './AFrameObjEntity';
import AFrameRegister from './AFrameRegister';
import AFrameFetch from './AFrameFetch';
import AFrameFetchDup2 from './AFrameFetchDup2';
import AFrameFetchDup4 from './AFrameFetchDup4';
import AFrameFetchObj from './AFrameFetchObj';
import object from './scene.gltf'
import object1 from './scene1.gltf'
import object2 from './scene2.gltf'

import React, { useState, useEffect } from 'react';
function App() {
  // const [gltfPath, setGltfPath] = useState(object1)
  // const INTERVAL_MS = 1000;

  // useEffect(() => {

  //   const interval = setInterval(() => {
  //       console.log('Logs every second');
  //       if(gltfPath == object1){
  //         console.log("change to 2")
  //         setGltfPath(object2)
  //       }else{
  //         console.log("change to 1")
  //         setGltfPath(object1)
  //       }
  //   }, INTERVAL_MS);



  //   return () => clearInterval(interval); 
  // }, [])
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


    <a-scene light="defaultLightsEnabled: false">
        {/* <a-assets>
          <a-asset-item id="model" src="http://127.0.0.1:5000/scene.gltf"></a-asset-item>
        </a-assets> */}
        {/* <a-entity position="0 0 -5" gltf-model="#model"></a-entity> */}
        {/* <a-entity position="0 0 -5" gltf-model="url(http://127.0.0.1:5000/scene.gltf)"></a-entity> */}
        {/* <a-entity position="0 1.3 0" scale="0.001 0.001 0.001" obj-model="obj: url(test.obj);"></a-entity> */}

        {/* <a-camera></a-camera> */}
        {/* <AFrameEntity modelSrc="scene.gltf" /> */} 
        {/* <AFrameEntity modelSrc={object} /> */}
        {/* <AFrameObjEntity modelSrc="scene.obj" /> */}
        {/* <AFrameRegister modelSrc={object}  /> */}
        {/* <AFrameFetch modelSrc="http://127.0.0.1:5000/scene.gltf"  /> */}
        <AFrameFetchObj />
        {/* <AFrameFetchDup2 modelSrc="http://127.0.0.1:5000/scene.gltf"  />
        <AFrameFetchDup4 modelSrc="http://127.0.0.1:5000/scene.gltf"  /> */}
      </a-scene>
    </div>
  );
}

export default App;
