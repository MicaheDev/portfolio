'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { loadGLTFModel } from '@/utilities/Model'

function easeOutCirc(x: number): number {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const BackgroundRender = ({containerClassname}: {containerClassname: string}) => {
  const refContainer = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const refRenderer = useRef<THREE.WebGLRenderer | null>(null)
  
  const urlDogGLB =  '/untitled.glb'

  const handleWindowResize = useCallback(() => {
    const renderer = refRenderer.current
    const container = refContainer.current

    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const container = refContainer.current
    if (!container) return

    const scW = container.clientWidth
    const scH = container.clientHeight

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(scW, scH)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)
    refRenderer.current = renderer

    const scene = new THREE.Scene()
    const target = new THREE.Vector3(-0.5, 3, 0)
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )

    const scale = scH * 0.005 + 2
    const camera = new THREE.OrthographicCamera(
      -scale, scale, scale, -scale, 0.01, 50000
    )
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)

    const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI)
    scene.add(ambientLight)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
    controls.target = target

    let req: number | null = null
    let frame = 0

    const animate = () => {
      req = requestAnimationFrame(animate)

      frame = frame <= 100 ? frame + 1 : frame

      if (frame <= 100) {
        const p = initialCameraPosition
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

        camera.position.y = 5
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        camera.lookAt(target)
      } else {
        controls.update()
      }

      renderer.render(scene, camera)
    }

    loadGLTFModel(scene, urlDogGLB, {
      receiveShadow: false,
      castShadow: false
    }).then(() => {
      animate()
      setLoading(false)
    }).catch((error) => {
      console.error('Error loading model:', error)
      setLoading(false)
    })

    return () => {
      if (req) cancelAnimationFrame(req)
      renderer.domElement.remove()
      renderer.dispose()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <div ref={refContainer} className={containerClassname} >
      {loading && <div className='flex justify-center items-center w-full h-full'>Loading...</div>}
    </div>
  )
}

export default BackgroundRender
