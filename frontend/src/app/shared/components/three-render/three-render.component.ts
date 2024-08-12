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
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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
  private gltfModel!: THREE.Object3D;
  private controls!: OrbitControls;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.initThreeJS();
      this.onWindowResize();
      window.addEventListener('resize', this.onWindowResize.bind(this), false);
    }
  }

  private initThreeJS() {
    const container = this.containerRef.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Configurar el renderizador con fondo transparente y habilitar sombras
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Crear la escena
    this.scene = new THREE.Scene();

    // Configurar la cámara
    const fov = 75; // Campo de visión
    const aspect = width / height; // Relación de aspecto
    const near = 0.1; // Plano cercano
    const far = 1000; // Plano lejano
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    );
    const target = new THREE.Vector3(-0.5, 1.2, 0);

    this.camera.position.copy(initialCameraPosition);
    this.camera.lookAt(target);

    // Añadir iluminación con sombras
    const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI); // Luz ambiental suave
    this.scene.add(ambientLight);

    // Añadir los controles orbitales
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.target = target;

    // Añadir un plano para recibir la sombra
    const planeGeometry = new THREE.PlaneGeometry(500, 500);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1; // Ajusta la posición según sea necesario
    plane.receiveShadow = true;
    this.scene.add(plane);

    // Cargar y añadir el modelo GLB usando DRACOLoader
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderConfig({ type: 'js' });
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);
    const gltfURL = `/${this.urlBase}.glb`;
    console.log('GLTF URL:', gltfURL);

    gltfLoader.load(
      gltfURL,
      (gltf) => {
        this.gltfModel = gltf.scene;

        // Escalar el objeto
        this.gltfModel.scale.set(this.scale.x, this.scale.y, this.scale.z);
        // Posicionar el objeto
        this.gltfModel.position.set(this.position.x, this.position.y, this.position.z);

        // Configurar sombras y hacer la base invisible
        this.gltfModel.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = false;
            child.receiveShadow = false;
          }
        });

        this.scene.add(this.gltfModel);
        this.animate();
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('Error loading GLTF file:', error);
      }
    );
  }

  private animate() {
    requestAnimationFrame(() => this.animate());

    // Rotar el objeto sobre su base
    if (this.gltfModel) {
      const direction = this.rotation.direction;
      direction === 'left'
        ? (this.gltfModel.rotation.y -= this.rotation.velocity)
        : (this.gltfModel.rotation.y += this.rotation.velocity);
    }

    this.controls.update();
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
