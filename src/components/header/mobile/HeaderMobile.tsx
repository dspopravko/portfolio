import React, { useContext, useState } from 'react'
import s from './HeaderMobile.module.css'
import { Navbar } from '../../../pages/nav/Navbar'
import { ThemeButton } from '../../themeButton/themeButton'
import { ThemeContext } from '../../../utilities/Context'
import cx from 'classnames'
import { langHeader } from '../../../lang'

export const HeaderMobile = () => {
  const [open, setOpen] = useState(false)
  const { y, locale } = useContext(ThemeContext)
  const l = langHeader[locale]

  return (
    <>
      <div
        className={cx({
          [s.mobileMenu]: true,
          shadowUp: y > 50 && open,
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
      </div>
      <div className={open ? s.headerOpen : s.headerClose}>
        <Navbar />
      </div>
    </>
  )
}
