import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

@Component({
  selector: 'app-three-render',
  standalone: true,
  imports: [],
  templateUrl: './three-render.component.html',
  styleUrl: './three-render.component.scss',
})
export class ThreeRenderComponent implements AfterViewInit {
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
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Añadir iluminación
    const ambientLight = new THREE.AmbientLight(0xffffff); // Luz blanca
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    this.scene.add(directionalLight);

    // Cargar y añadir el modelo 3D
    const loader = new OBJLoader();
    loader.load('/computer.obj', (obj) => {
      // Escalar el objeto
      obj.scale.set(0.35, 0.35, 0.35); // Ajusta el factor de escala según sea necesario

      // Posicionar el objeto si es necesario
      obj.position.set(0, -1.7, 0);

      this.objModel = obj;
      this.scene.add(this.objModel);
      this.animate();
    });
  }

  private animate() {
    requestAnimationFrame(() => this.animate());

    // Rotar el objeto sobre su base
    if (this.objModel) {
      this.objModel.rotation.y += 0.01; // Ajusta la velocidad de rotación según sea necesario
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
