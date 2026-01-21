import * as THREE from 'three'

// Material library for appliance 3D models
export class ApplianceMaterials {
  static instance = null
  materials = new Map()

  static getInstance() {
    if (!ApplianceMaterials.instance) {
      ApplianceMaterials.instance = new ApplianceMaterials()
    }
    return ApplianceMaterials.instance
  }

  constructor() {
    this.initializeMaterials()
  }

  initializeMaterials() {
    // Stainless Steel Material
    const stainlessSteel = new THREE.MeshStandardMaterial({
      color: 0xc0c0c0,
      metalness: 0.9,
      roughness: 0.1,
      envMapIntensity: 1.0
    })
    this.materials.set('stainlessSteel', stainlessSteel)

    // Matte Black Material
    const matteBlack = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.1,
      roughness: 0.8
    })
    this.materials.set('matteBlack', matteBlack)

    // White Appliance Material
    const whiteAppliance = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.0,
      roughness: 0.3
    })
    this.materials.set('white', whiteAppliance)

    // Glass Material
    const glass = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.0,
      roughness: 0.0,
      transmission: 0.9,
      transparent: true,
      opacity: 0.1,
      ior: 1.5
    })
    this.materials.set('glass', glass)

    // LED Screen Material
    const ledScreen = new THREE.MeshStandardMaterial({
      color: 0x000000,
      emissive: 0x001122,
      emissiveIntensity: 0.3,
      metalness: 0.0,
      roughness: 0.1
    })
    this.materials.set('ledScreen', ledScreen)

    // Chrome Material
    const chrome = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 1.0,
      roughness: 0.0,
      envMapIntensity: 1.5
    })
    this.materials.set('chrome', chrome)

    // Plastic Material
    const plastic = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      metalness: 0.0,
      roughness: 0.6
    })
    this.materials.set('plastic', plastic)

    // Rubber Material
    const rubber = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.0,
      roughness: 0.9
    })
    this.materials.set('rubber', rubber)
  }

  getMaterial(name) {
    return this.materials.get(name)?.clone()
  }

  // Create animated materials
  createAnimatedLED(baseColor = 0x0066ff) {
    const material = new THREE.MeshStandardMaterial({
      color: baseColor,
      emissive: baseColor,
      emissiveIntensity: 0.2,
      metalness: 0.0,
      roughness: 0.1
    })

    // Animate emissive intensity
    const animate = () => {
      const time = Date.now() * 0.001
      material.emissiveIntensity = 0.1 + Math.sin(time * 2) * 0.1
      requestAnimationFrame(animate)
    }
    animate()

    return material
  }

  // Dispose all materials
  dispose() {
    this.materials.forEach(material => {
      material.dispose()
    })
    this.materials.clear()
  }
}