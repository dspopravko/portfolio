import React, { useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import { HeaderMobile } from './mobile/HeaderMobile'
import { HeaderDesktop } from './desktop/HeaderDesktop'
import { ThemeContext } from '../../utilities/Context'

export const Header = () => {
  const { width } = useContext(ThemeContext)
  return <AnimatePresence>{width < 750 ? <HeaderMobile /> : <HeaderDesktop />}</AnimatePresence>
}