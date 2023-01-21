import React from 'react'
import { Loader } from '../loader/Loader'
import s from './AppLoader.module.css'
import { AnimatePresence, motion } from 'framer-motion'

type AppLoaderPropsType = {
  children: React.ReactNode
  isLoaded: boolean
}

export const AppLoader = ({ children, isLoaded}: AppLoaderPropsType) => {
  return (
    <AnimatePresence mode={'wait'}>
      <motion.div key={'app'}>
        {children}
      </motion.div>
      {!isLoaded && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.35 },
          }}
          exit={{
            scale: 2,
            opacity: 0,
            transition: { duration: 0.5 },
          }}
          key={'app-loader'}
          className={s.container}
        >
          <Loader size={'large'} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
