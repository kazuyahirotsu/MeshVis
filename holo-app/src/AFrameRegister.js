import React, { useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import * as AFRAME from 'aframe';
require('aframe');


const AFrameRegister = ({ modelSrc }) => {

    AFRAME.registerComponent('register', {
        init: function () {
            console.log('Hello, World!');
        },

        update: function () {
          const loader = new GLTFLoader();
          loader.load(modelSrc, gltf => {
            console.log(gltf);
            console.log(gltf.scene.children[0]);
            // entity.removeObject3D('mesh');
            // entity.setObject3D('mesh', gltf.scene);
            this.el.setObject3D('mesh', gltf.scene.children[0]);
            // child.geometry = gltf.geometry;
          });
        //   this.el.setObject3D('light', new THREE.Light());
          // Light is now part of the scene.
          // object3DMap.light is now a THREE.Light() object.
        },
      
        // remove: function () {
        //   this.el.removeObject3D('light');
        //   // Light is now removed from the scene.
        //   // object3DMap.light is now null.
        // }
      });

  return (
    <a-entity position="0 0 -5" register></a-entity>
  );
};

export default AFrameRegister;
