export const measurePerformance = () => {
  if (typeof window === 'undefined' || !window.performance) return

  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0]
      const paint = performance.getEntriesByType('paint')
      
      const metrics = {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        
        totalResources: performance.getEntriesByType('resource').length,
      }

      if (import.meta.env.DEV) {
        console.group('Performance Metrics')
        console.log('DOM Content Loaded:', `${metrics.domContentLoaded.toFixed(2)}ms`)
        console.log('Load Complete:', `${metrics.loadComplete.toFixed(2)}ms`)
        console.log('First Paint:', `${metrics.firstPaint.toFixed(2)}ms`)
        console.log('First Contentful Paint:', `${metrics.firstContentfulPaint.toFixed(2)}ms`)
        console.log('Total Resources:', metrics.totalResources)
        console.groupEnd()
      }

      return metrics
    }, 0)
  })
}

export const debounce = (func, wait, immediate) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      timeout = null
      if (!immediate) func(...args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func(...args)
  }
}

export const throttle = (func, limit) => {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove('lazy')
          imageObserver.unobserve(img)
        }
      })
    })

    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach(img => imageObserver.observe(img))
  }
}

export const preloadCriticalResources = () => {
  const criticalResources = [
    '/src/assets/fonts/Magnetik-Medium.woff2',
    '/src/assets/fonts/Magnetik-Bold.woff2',
    '/123456789.png'
  ]

  criticalResources.forEach(resource => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource
    
    if (resource.includes('.woff2')) {
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
    } else if (resource.includes('.png') || resource.includes('.jpg')) {
      link.as = 'image'
    }
    
    document.head.appendChild(link)
  })
}

export const initPerformanceOptimizations = () => {
  measurePerformance()
  preloadCriticalResources()
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lazyLoadImages)
  } else {
    lazyLoadImages()
  }
}