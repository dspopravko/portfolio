import React, { useContext } from 'react'
import s from './HeaderDesktop.module.css'
import { ThemeButton } from '../../themeButton/themeButton'
import { ThemeContext } from '../../../utilities/Context'
import { Navbar } from '../../nav/Navbar'
import { LanguageBtn } from '../../languageBtn/LanguageBtn'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

export const HeaderDesktop = () => {
  const { y, width } = useContext(ThemeContext)

  return (
    <>
        {width > 1300 && y < 50 && (
          <motion.div
            key={'bottom-links'}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {delay: 0.5}
            }}
            exit={{
              opacity: 0.4,
              y: 80,
            }}
            className={s.links}
          >
            <a target={'_blank'} href={'https://github.com/dspopravko'} rel="noreferrer">
              <FontAwesomeIcon size="2x" icon={faGithub} color={'#5095BF'} />
            </a>
            <a target={'_blank'} href={'https://www.linkedin.com/in/demid-popravko-2aa212239'} rel="noreferrer">
              <FontAwesomeIcon size="2x" icon={faLinkedin} color={'#5095BF'} />
            </a>
          </motion.div>
        )}
      <motion.header
        key={'header-desktop'}
        initial={{
          opacity: 0.4,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className={cx({
          [s.header]: true,
          [s.small]: y > 50,
          shadowBottom: y > 50,
        })}
      >
        <LanguageBtn />
        <ThemeButton />
        <Navbar />
      </motion.header>
    </>
  )
}
