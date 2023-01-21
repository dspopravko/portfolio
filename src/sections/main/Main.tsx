import React, { useContext, useEffect } from "react";
import s from './Main.module.css'
import { ThemeContext } from '../../utilities/Context'
import { langMain } from '../../data/lang'
import profilePictureRmBg from "../../assets/profile/profilePictureRmBg.png";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

export const Main = ({isLoaded}: {isLoaded: boolean}) => {
  const { locale, height} = useContext(ThemeContext)
  const l = langMain[locale]

  const controls = useAnimationControls()

  useEffect(() => {
    controls.set({
      y: -height/3,
      scale: 0.6,
      opacity: 0
    })
    if (isLoaded) {
      controls.start({
        y: 0,
        scale: 1,
        opacity: 1,
        transition: { duration: 0.7, delay: 0 },
      })
    }
  }, [isLoaded])

  return (
    <AnimatePresence>
      <motion.section
        layout
        initial={{
          y: -height/3,
          scale: 0.6,
          opacity:0
        }}
        animate={controls}
        className={s.wrapper} id={'home'}>
        <div className={s.welcome}>
          <h1>{l.name}</h1>
          <h2>{l.job}</h2>
          <h3>{l.description}</h3>
          <div className={s.btnContainer}>
            <button
              className={'button'}
              onClick={(e) => {
                e.preventDefault()
                window.location.href = '#remote'
              }}
            >
              Contact me
            </button>
          </div>
        </div>
        <div className={s.photo}>
          <svg viewBox="20 25 165 156" xmlns="http://www.w3.org/2000/svg">
            <mask id="b">
              <path
                fill="rgba(255, 255, 255, 1)"
                d="M48.3,-53.7C64.2,-44.3,79.8,-30.5,83.6,-14C87.4,2.6,79.4,21.9,68.9,39.4C58.3,56.8,45.1,72.3,29.1,76.9C13,81.4,-6,75.1,-23,67.2C-40,59.3,-55.1,49.9,-65.3,35.9C-75.4,21.9,-80.8,3.4,-79.6,-15.9C-78.5,-35.3,-70.9,-55.3,-56.5,-65C-42.2,-74.7,-21.1,-74.1,-2.4,-71.2C16.2,-68.3,32.5,-63.1,48.3,-53.7Z"
                transform="translate(100 100)"
              />
            </mask>
            <g mask="url(#b)">
              <path
                fill="#416CA6"
                d="M48.3,-53.7C64.2,-44.3,79.8,-30.5,83.6,-14C87.4,2.6,79.4,21.9,68.9,39.4C58.3,56.8,45.1,72.3,29.1,76.9C13,81.4,-6,75.1,-23,67.2C-40,59.3,-55.1,49.9,-65.3,35.9C-75.4,21.9,-80.8,3.4,-79.6,-15.9C-78.5,-35.3,-70.9,-55.3,-56.5,-65C-42.2,-74.7,-21.1,-74.1,-2.4,-71.2C16.2,-68.3,32.5,-63.1,48.3,-53.7Z"
                transform="translate(100 100)"
              />
              <image x="10" y="15" className={s.profilePicture} xlinkHref={profilePictureRmBg} />
            </g>
          </svg>
        </div>
      </motion.section>
    </AnimatePresence>
  )
}
