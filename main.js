import './style.css'
import { gsap } from 'gsap'

gsap.set('#falling-leaves', { perspective: 600 })
gsap.set('img', { xPercent: '-50%', yPercent: '-50%' })

var total = 30
var warp = document.getElementById('falling-leaves'),
  w = window.innerWidth,
  h = window.innerHeight

for (let i = 0; i < total; i++) {
  var Div = document.createElement('div')
  gsap.set(Div, {
    attr: { class: 'dot' },
    x: R(0, w),
    y: R(-200, -150),
    z: R(-200, 200),
  })
  warp.appendChild(Div)
  animm(Div)
}

function animm(elm) {
  gsap.to(elm, {
    y: h + 100,
    ease: 'none',
    repeat: -1,
    delay: -15,
    duration: R(6, 15),
  })
  gsap.to(elm, {
    x: '+=100',
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

function R(min, max) {
  return min + Math.random() * (max - min)
}

// a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
