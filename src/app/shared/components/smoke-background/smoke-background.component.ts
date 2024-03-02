import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';
@Component({
  selector: 'app-smoke-background',
  templateUrl: './smoke-background.component.html',
  styleUrls: ['./smoke-background.component.scss'],
})
export class SmokeBackgroundComponent implements AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.initThree();
    });
  }

  initThree() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    this.rendererContainer.nativeElement.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 0.1);
    light.position.set(-1, 3, 1);
    scene.add(light);

    // const helper = new THREE.DirectionalLightHelper(light, 5)
    // scene.add(helper)

    const smokeParticles: THREE.Mesh[] = [];
    const loader = new THREE.TextureLoader();
    loader.crossOrigin = '';

    loader.load('../../../assets/smoke.webp', (texture) => {
      const smokeGeometry = new THREE.PlaneGeometry(300, 300);

      const smokeMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
      });

      const NUM_OF_PARTICLES = 300;
      for (let p = 0; p < NUM_OF_PARTICLES; p++) {
        const particle = new THREE.Mesh(smokeGeometry, smokeMaterial);

        particle.position.set(
          Math.random() * 500 - 250,
          Math.random() * 500 - 250,
          Math.random() * 1000 - 100
        );
        particle.rotation.z = Math.random() * 360;

        scene.add(particle);

        smokeParticles.push(particle);
      }
    });

    camera.position.z = 5;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      smokeParticles.forEach((particle) => {
        particle.rotation.z += 0.005;
      });

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', resize);
  }
}
