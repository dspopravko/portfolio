import React, { useContext } from 'react'
import s from './Navbar.module.css'
import { Link } from 'react-scroll'
import { ThemeContext } from '../../utilities/Context'
import { langNavbar } from '../../data/lang'
import { motion } from 'framer-motion'
import { cvLink } from "../../data/cv/link";

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
            <Link key={el[0]} to={el[0]} offset={-80} spy smooth className={s.link} activeClass={s.activeLink}>
              {el[1]}
            </Link>
        )
      })}
      <li className={s.link}>
        <a target={'_blank'} style={{ color: 'red' }} href={cvLink} rel="noreferrer">
          CV
        </a>
      </li>
    </motion.div>
  )
}
