import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

type Coordinates = {
  x: number;
  y: number;
  z: number;
};

type Rotation = {
  direction: Directions;
  velocity: number;
};

type Directions = 'left' | 'right';

@Component({
  selector: 'app-three-render',
  standalone: true,
  imports: [],
  templateUrl: './three-render.component.html',
  styleUrls: ['./three-render.component.scss'],
})
export class ThreeRenderComponent implements AfterViewInit {
  @Input() urlBase!: string;
  @Input() position!: Coordinates;
  @Input() scale!: Coordinates;
  @Input() rotation: Rotation = { direction: 'left', velocity: 0.005 };
  @ViewChild('canvas') private canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('container') private containerRef!: ElementRef<HTMLDivElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private isBrowser!: boolean;
  private objModel!: THREE.Object3D;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.initThreeJS();
      this.onWindowResize();
    }
  }

  private initThreeJS() {
    const container = this.containerRef.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Configurar el renderizador con fondo transparente
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      alpha: true,
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Crear la escena
    this.scene = new THREE.Scene();

    // Configurar la cámara
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    // Añadir iluminación
    const ambientLight = new THREE.AmbientLight(0xffffff); // Luz blanca
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    this.scene.add(directionalLight);

    // Cargar y añadir el modelo 3D
    const mtlLoader = new MTLLoader();
    const mtlURL = `/${this.urlBase}.mtl`;
    console.log('MTL URL:', mtlURL);

    mtlLoader.load(
      mtlURL,
      (materials) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        const objURL = `/${this.urlBase}.obj`;
        console.log('OBJ URL:', objURL);

        objLoader.load(
          objURL,
          (obj) => {
            // Escalar el objeto
            obj.scale.set(this.scale.x, this.scale.y, this.scale.z);
            // Posicionar el objeto
            obj.position.set(this.position.x, this.position.y, this.position.z);

            this.objModel = obj;
            this.scene.add(this.objModel);
            this.animate();
          },
          (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
          },
          (error) => {
            console.error('Error loading OBJ file:', error);
          }
        );
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('Error loading MTL file:', error);
      }
    );
  }

  private animate() {
    requestAnimationFrame(() => this.animate());

    // Rotar el objeto sobre su base
    if (this.objModel) {
      const direction = this.rotation.direction;
      direction === 'left'
        ? (this.objModel.rotation.y -= this.rotation.velocity)
        : (this.objModel.rotation.y += this.rotation.velocity);
    }

    this.renderer.render(this.scene, this.camera);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    const container = this.containerRef.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
}
