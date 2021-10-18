import { useWindowSize } from 'react-use'
import { useTheme } from 'styled-components'
import Particles from 'react-particles-js'

export function AnimatedBackground() {
  const { height: windowHeight, width: windowWidth } = useWindowSize()

  const {
    colors: { gray, teal },
  } = useTheme()

  return (
    <Particles
      height={`${windowHeight}px`}
      params={{
        particles: {
          number: { value: 3 },
          color: { value: [gray, teal] },
          shape: { type: 'circle' },
          opacity: { value: 1, anim: { enable: false } },
          size: { value: { min: 50, max: 300 } },
          move: {
            enable: true,
            speed: 2,
            out_mode: 'out',
            bounce: false,
          },
        },
        interactivity: {
          events: {
            onhover: { enable: false },
            onclick: { enable: false },
            resize: true,
          },
        },
        retina_detect: true,
      }}
      style={{ left: 0, position: 'fixed', top: 0, zIndex: -1 }}
      width={`${windowWidth}px`}
    />
  )
}
