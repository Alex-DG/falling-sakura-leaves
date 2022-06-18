import './style.css'
import { gsap } from 'gsap'

gsap.set('#falling-leaves', { perspective: 600 })
gsap.set('img', { xPercent: '-50%', yPercent: '-50%' })

const total = 30
const container = document.getElementById('falling-leaves')
let w = window.innerWidth
let h = window.innerHeight

let allDivs = []

const animm = (elm) => {
  gsap.to(elm, {
    y: h + 100,
    opacity: 0,
    ease: 'none',
    repeat: -1,
    delay: -12,
    duration: R(6, 15),
  })
  gsap.to(elm, {
    x: '+=100',
    opacity: 1,
    rotationZ: R(0, 180),
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    duration: R(4, 8),
  })
  gsap.to(elm, {
    rotationX: R(0, 360),
    rotationY: R(0, 360),
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: -5,
    duration: R(2, 8),
  })
}

const R = (min, max) => {
  return min + Math.random() * (max - min)
}

const start = () => {
  for (let i = 0; i < total; i++) {
    const newDiv = document.createElement('div')
    gsap.set(newDiv, {
      attr: { class: 'dot' },
      x: R(0, w),
      y: R(-200, -150),
      z: R(-200, 200),
    })
    container.appendChild(newDiv)
    allDivs.push(newDiv)
    animm(newDiv)
  }
}

start()

const clear = () => {
  allDivs.forEach((div) => {
    container.removeChild(div)
    gsap.killTweensOf(div)
  })
  allDivs = []
}

const adjustSize = () => {
  const shouldReset = allDivs.length > 0
  if (shouldReset) {
    clear()
    start()
  }
}

window.addEventListener('resize', () => {
  w = window.innerWidth
  h = window.innerHeight
  adjustSize()
})
