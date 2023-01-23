import React, { useContext, useState } from 'react'
import s from './HeaderMobile.module.css'
import { Navbar } from '../../Navbar/Navbar'
import { ThemeButton } from '../../../components/themeButton/themeButton'
import { ThemeContext } from '../../../utilities/Context'
import cx from 'classnames'
import { langHeader } from '../../../data/lang'
import { AnimatePresence, motion } from 'framer-motion'

export const HeaderMobile = () => {
  const [open, setOpen] = useState(false)
  const { y, locale } = useContext(ThemeContext)
  const l = langHeader[locale]
  return (
    <>
      <motion.header
        key={'Header-mobile'}
        initial={{
          opacity: 0.4,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.2 },
        }}
        exit={{
          opacity: 0.4,
          y: 80,
        }}
        className={cx({
          [s.mobileMenu]: true,
          shadowUp: y > 50 && !open,
        })}
      >
        <div
          className={s.title}
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          {l.name}
        </div>
        <div className={s.btnWrapper}>
          <button onClick={() => setOpen(!open)} className={s.menuBtn}>
            {l.menu}
          </button>
          <ThemeButton />
        </div>
      </motion.header>
      <AnimatePresence>{open && <Navbar animate handleClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  )
}
