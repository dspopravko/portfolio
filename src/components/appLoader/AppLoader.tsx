import React, { useContext, useState } from 'react'
import { Loader } from '../loader/Loader'
import s from './AppLoader.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeContext } from '../../utilities/Context'

type AppLoaderPropsType = {
  children: React.ReactNode
}

export const AppLoader = ({ children }: AppLoaderPropsType) => {
  const { height } = useContext(ThemeContext)
  const [isLoaded, setIsLoaded] = useState(false)
  setTimeout(() => {
    setIsLoaded(true)
  }, 200)

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div

          layout
          key={'app'}
          initial={{
            y: -height,
            scale: 0,
          }}
          animate={{
            y: 0,
            scale: 1,
            transition: { duration: 1.8, delay: 0.15 },
          }}
        >
          {children}
        </motion.div>
      )}
      {!isLoaded && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.35 },
          }}
          exit={{
            scale: 2,
            transition: { duration: 0.5 },
          }}
          key={'app-loader'}
          className={s.container}
        >
          <Loader size={'regular'} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}