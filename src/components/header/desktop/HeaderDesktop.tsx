import React, { useContext } from 'react'
import s from './HeaderDesktop.module.css'
import { ThemeButton } from '../../themeButton/themeButton'
import { ThemeContext } from '../../../utilities/Context'
import { Navbar } from '../../../pages/nav/Navbar'
import { LanguageBtn } from '../../languageBtn/LanguageBtn'
import cx from 'classnames'

export const HeaderDesktop = () => {
  const { y } = useContext(ThemeContext)

  return (
    <>
      <div
        className={cx({
          [s.header]: true,
          [s.small]: y > 50,
          'shadowBottom': y < 50,
        })}
      >
        <LanguageBtn />
        <ThemeButton />
        <Navbar />
      </div>
    </>
  )
}
