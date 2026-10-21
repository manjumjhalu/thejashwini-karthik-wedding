import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function GoldenScene() {
  const host = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (
      !host.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return
    const el = host.current
    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
      })
    } catch {
      return
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5))
    el.appendChild(renderer.domElement)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.z = 9
    const positions = new Float32Array(180 * 3)
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = Math.random() * 19 - 9.5
      positions[i + 1] = Math.random() * 12 - 6
      positions[i + 2] = Math.random() * 5 - 4
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.PointsMaterial({
      color: 0xe6bf72,
      size: 0.025,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    })
    const points = new THREE.Points(geo, mat)
    scene.add(points)
    const resize = () => {
      renderer.setSize(el.clientWidth, el.clientHeight)
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
    }
    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(el)
    let frame = 0
    const render = (time: number) => {
      points.rotation.z = Math.sin(time * 0.000025) * 0.06
      points.position.y = Math.sin(time * 0.0001) * 0.25
      renderer.render(scene, camera)
      frame = requestAnimationFrame(render)
    }
    frame = requestAnimationFrame(render)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      geo.dispose()
      mat.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])
  return <div className="golden-scene" ref={host} aria-hidden="true" />
}
