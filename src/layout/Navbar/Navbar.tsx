import React, { useContext } from 'react'
import s from './Navbar.module.css'
import { Link } from 'react-scroll'
import { ThemeContext } from '../../utilities/Context'
import { langNavbar } from '../../data/lang'
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
      {Object.entries(l).map((el) => {
        return (
          <li key={el[0]}>
            <Link to={el[0]} offset={-80} spy smooth className={s.link} activeClass={s.activeLink}>
              {el[1]}
            </Link>
          </li>
        )
      })}
      <li>
        <a target={'_blank'} style={{ color: 'red' }} href="https://youtu.be/dQw4w9WgXcQ" rel="noreferrer">
          CV
        </a>
      </li>
    </motion.div>
  )
}