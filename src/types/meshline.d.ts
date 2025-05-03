// meshline.d.ts
import { Object3DNode } from '@react-three/fiber'

declare module 'meshline' {
  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[], closed?: boolean): void;
  }

  export class MeshLineMaterial extends THREE.ShaderMaterial {
    constructor(parameters?: {
      color?: THREE.Color | string | number;
      lineWidth?: number;
      resolution?: [number, number];
      sizeAttenuation?: boolean;
      useMap?: boolean;
      map?: THREE.Texture;
      repeat?: [number, number];
      depthTest?: boolean;
      dashArray?: number;
      dashOffset?: number;
      dashRatio?: number;
      opacity?: number;
      transparent?: boolean;
      alphaTest?: number;
    });
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
      meshLineMaterial: Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>;
    }
  }
}