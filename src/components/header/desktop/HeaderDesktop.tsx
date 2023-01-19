import React, { useContext } from 'react'
import s from './HeaderDesktop.module.css'
import { ThemeButton } from '../../themeButton/themeButton'
import { ThemeContext } from '../../../utilities/Context'
import { Navbar } from '../../../pages/nav/Navbar'
import { LanguageBtn } from '../../languageBtn/LanguageBtn'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'

export const HeaderDesktop = () => {
  const { y, width } = useContext(ThemeContext)

  return (
    <>
      <AnimatePresence>
        {width > 1300 && y < 50 && (
          <motion.div
            initial={{
              opacity: 0.4,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
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
      </AnimatePresence>
      <header
        className={cx({
          [s.header]: true,
          [s.small]: y > 50,
          shadowBottom: y > 50,
        })}
      >
        <LanguageBtn />
        <ThemeButton />
        <Navbar />
      </header>
    </>
  )
}
