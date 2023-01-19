import React, { useContext, useState } from 'react'
import s from './HeaderMobile.module.css'
import { Navbar } from '../../../pages/nav/Navbar'
import { ThemeButton } from '../../themeButton/themeButton'
import { ThemeContext } from '../../../utilities/Context'
import cx from 'classnames'
import { langHeader } from '../../../lang'
import { AnimatePresence } from 'framer-motion'

export const HeaderMobile = () => {
  const [open, setOpen] = useState(false)
  const { y, locale } = useContext(ThemeContext)
  const l = langHeader[locale]
  return (
    <>
      <header
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
      </header>
      <AnimatePresence>{open && <Navbar animate handleClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  )
}
