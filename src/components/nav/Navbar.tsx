import React, { useContext } from 'react'
import s from './Navbar.module.css'
import { ThemeContext } from '../../utilities/Context'
import { langNavbar } from '../../lang'
import { motion } from 'framer-motion'

const navbarVariant = {
  hide: {
    opacity: 0.3,
    y: 180,
    transition: { duration: 0.2 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
}

export const Navbar = ({ handleClose, animate = false }: { handleClose?: () => void; animate?: boolean }) => {
  const { locale } = useContext(ThemeContext)
  const l = langNavbar[locale]

  return (
    <motion.div
      variants={navbarVariant}
      initial={animate ? 'hide' : undefined}
      animate={'show'}
      exit={'hide'}
      className={s.navbar}
      onClick={handleClose}
    >
      <a href="src/components/nav/Navbar#home">{l.home}</a>
      <a href="src/components/nav/Navbar#about">{l.about}</a>
      <a href="src/components/nav/Navbar#skills">{l.skills}</a>
      <a href="src/components/nav/Navbar#projects">{l.projects}</a>
      <a href="src/components/nav/Navbar#remote">{l.contacts}</a>
      <a target={'_blank'} style={{ color: 'red' }} href="https://youtu.be/dQw4w9WgXcQ" rel="noreferrer">
        {l.cv}
      </a>
    </motion.div>
  )
}
