import React, { useContext } from 'react'
import s from './Navbar.module.css'
import { ThemeContext } from '../../utilities/Context'
import { langNavbar } from '../../lang'

export const Navbar = () => {
  const { locale } = useContext(ThemeContext)
  const l = langNavbar[locale]

  return (
    <div className={s.navbar}>
      <a href="#home">{l.home}</a>
      <a href="#about">{l.about}</a>
      <a href="#skills">{l.skills}</a>
      <a href="#projects">{l.projects}</a>
      <a href="#remote">{l.contacts}</a>
      <a target={'_blank'} style={{ color: 'red' }} href="https://youtu.be/dQw4w9WgXcQ" rel="noreferrer">
        {l.cv}
      </a>
    </div>
  )
}
